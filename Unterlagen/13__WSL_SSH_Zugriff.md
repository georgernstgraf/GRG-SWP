# 13. SSH-Zugriff auf WSL über das WLAN

## Warum dieses Thema?

Stell dir vor: Du entwickelst auf deinem Windows-Rechner mit WSL (Ubuntu, Debian, …). Auf deinem WLAN läuft auch ein Raspberry Pi, ein Smartphone oder ein Firmen-Notebook. Du möchtest dich von **diesen Geräten aus per SSH in deine WSL-Umgebung einloggen**, um dort Code zu testen, Dateien zu bearbeiten oder Dienste zu administrieren – ganz ohne extra einen eigenen Linux-Server aufzusetzen.

Klingt einfach? Ist es leider nicht. WSL2 verwendet eine **NAT-Architektur** (Network Address Translation). Deine WSL-Instanz ist aus dem Netzwerk nicht direkt erreichbar – sie teilt sich die Internetverbindung mit Windows, hat aber eine eigene, **private** IP-Adresse.

In diesem Dokument lernst du zwei Wege, diese Hürde zu umgehen:

| Ansatz | Voraussetzung | Schwierigkeit |
|--------|--------------|---------------|
| **Mirrored Mode** | Windows 11 22H2+ | Einfach (einmal konfigurieren) |
| **Port Proxy** | Windows 10 / 11 | Mittel (Automatisierung nötig) |

---

## Grundlagen

Bevor wir loslegen, brauchen wir eine funktionierende Basis.

### 1. systemd in WSL aktivieren

Seit 2022 unterstützt WSL2 systemd nativ. Viele Dienste (darunter SSH) setzen systemd voraus.

Öffne (oder erstelle) die Datei `/etc/wsl.conf` in deiner WSL-Distribution:

```ini
[boot]
systemd=true
```

Dann WSL komplett neustarten – in PowerShell:

```powershell
wsl --shutdown
wsl
```

Nach dem Neustart prüfen:

```bash
systemctl status
```

Wenn systemd läuft, siehst du eine Liste aller aktiven Services. Erscheint "System has not been booted with systemd", stimmt etwas mit der Konfiguration nicht.

### 2. SSH-Server installieren

Jetzt installieren wir den OpenSSH-Server in WSL:

```bash
sudo apt update
sudo apt install openssh-server
```

Den Dienst starten und für den Autostart aktivieren:

```bash
sudo systemctl enable ssh --now
sudo systemctl status ssh
```

Der SSH-Server sollte jetzt auf Port 22 lauschen (nur innerhalb von WSL).

### 3. Test: Lokaler SSH-Zugriff

Bevor wir uns um das Netzwerk kümmern, testen wir, ob SSH grundsätzlich funktioniert:

```bash
# Von Windows aus (PowerShell):
ssh benutzername@localhost
```

Wenn das klappt, läuft der SSH-Server. Jetzt kümmern wir uns um den Zugriff **von anderen Geräten im WLAN**.

---

## Ansatz 1: Mirrored Mode (Windows 11 22H2+)

Microsoft hat mit Windows 11 22H2 einen neuen Netzwerkmodus für WSL eingeführt: **Mirrored Mode**. Dabei wird das Windows-Netzwerk direkt in die WSL-VM "gespiegelt". WSL bekommt dieselbe IP wie der Windows-Host und ist **direkt aus dem LAN erreichbar**.

### Voraussetzung prüfen

Öffne PowerShell:

```powershell
[System.Environment]::OSVersion.Version
```

Du brauchst mindestens Build 22621 (Windows 11 22H2). Alternativ:

```powershell
winver
```

### Konfiguration

Erstelle oder bearbeite die Datei `%USERPROFILE%\.wslconfig`:

```ini
[wsl2]
networkingMode=mirrored
```

WSL neustarten:

```powershell
wsl --shutdown
wsl
```

### Firewall: Nur Port 22 freigeben

**Achtung:** Im Mirrored Mode ist WSL direkt im LAN. Du musst die Windows-Firewall für eingehende Verbindungen auf Port 22 konfigurieren.

Microsoft verwendet für WSL eine spezielle Hyper-V-Firewall. Die pauschale Freigabe (`DefaultInboundAction Allow`) ist unsicher. Stattdessen setzt du eine **gezielte Regel nur für Port 22**:

```powershell
# PowerShell als Administrator
New-NetFirewallHyperVRule -Name "WSL SSH" -DisplayName "WSL SSH" `
  -Direction Inbound -VMCreatorId '{40E0AC32-46A5-438A-A0B2-2B479E8F2E90}' `
  -Protocol TCP -LocalPorts 22
```

Die GUID `{40E0AC32-46A5-438A-A0B2-2B479E8F2E90}` ist die feste Kennung der WSL-VM – alle Hyper-V-Firewall-Regeln für WSL müssen darauf verweisen.

### Test von einem anderen Gerät im WLAN

Finde die IP-Adresse deines Windows-Rechners heraus:

```powershell
ipconfig
```

Suche nach deiner WLAN-Schnittstelle (meist "Wi-Fi" oder "WLAN") – dort steht die IPv4-Adresse (z.B. `192.168.1.42`).

Vom anderen Gerät aus:

```bash
ssh benutzername@192.168.1.42
```

Wenn das funktioniert, herzlichen Glückwunsch! Deine WSL-Instanz ist jetzt aus dem gesamten WLAN erreichbar.

### Vorteile & Nachteile

| Vorteile | Nachteile |
|----------|-----------|
| Kein Port-Forwarding nötig | Nur Windows 11 22H2+ |
| WSL-IP ändert sich nicht | Hyper-V-Firewall muss konfiguriert werden |
| IPv6-Unterstützung | Ältere Windows-Versionen nicht kompatibel |
| VPN-Kompatibilität verbessert | |
| Auch andere Dienste (Webserver, DB) automatisch erreichbar | |

---

## Ansatz 2: Port Proxy (Windows 10 + 11)

Wenn du Windows 10 oder eine ältere Windows-11-Version verwendest, kannst du den Mirrored Mode nicht nutzen. Stattdessen leitest du einen Port auf Windows per **Portproxy** an die WSL-Instanz weiter.

### WIE FUNKTIONIERT DAS?

Windows hat ein eingebautes Werkzeug namens `netsh` (Network Shell). Damit können wir einen **Portproxy** einrichten:

```
Windows (WLAN-IP: 192.168.1.42)
  │
  │ Port 22 eingehend
  │
  ▼
netsh portproxy (Windows)
  │
  │ Weiterleitung an WSL-IP
  │
  ▼
WSL (interne IP: 172.x.x.x)
  │
  ▼
sshd (Port 22)
```

Jede Anfrage, die an die WLAN-IP deines Windows-Rechners auf Port 22 kommt, wird automatisch an die interne IP-Adresse von WSL weitergeleitet.

### Schritt 1: WSL-IP ermitteln

Die IP-Adresse von WSL2 ändert sich bei jedem Neustart. Aktuell ermitteln wir sie so:

```powershell
# Von Windows aus (PowerShell)
wsl hostname -I
```

Beachte den **großen Buchstaben `I`**! `wsl hostname -i` (klein) liefert eine andere, unbrauchbare Adresse (127.0.1.1).

Typische Ausgabe: `172.30.98.229`

### Schritt 2: Portproxy einrichten

PowerShell **als Administrator** öffnen:

```powershell
$wslIp = (wsl hostname -I).Trim()
netsh interface portproxy add v4tov4 `
  listenport=22 `
  listenaddress=0.0.0.0 `
  connectport=22 `
  connectaddress=$wslIp
```

- `listenport=22` – welcher Port auf Windows geöffnet wird
- `listenaddress=0.0.0.0` – auf **allen** Netzwerkschnittstellen (WLAN, Ethernet, etc.) lauschen
- `connectport=22` – Ziel-Port in WSL (auch 22)
- `connectaddress=$wslIp` – die interne IP von WSL

### Schritt 3: Windows Firewall öffnen

Damit eingehende Verbindungen von außen erlaubt sind, brauchen wir eine Firewall-Regel:

```powershell
New-NetFirewallRule -DisplayName "WSL SSH" `
  -Direction Inbound -LocalPort 22 -Protocol TCP -Action Allow
```

### Schritt 4: Testen

Wieder von einem anderen Gerät im WLAN:

```bash
ssh benutzername@192.168.1.42
```

### Schritt 5: Automatisierung (wichtiger Schritt!)

Das große Problem: Die WSL-IP ändert sich bei jedem Neustart. Nach `wsl --shutdown` oder einem Windows-Neustart zeigt der Portproxy ins Leere.

Lösung: Ein PowerShell-Skript, das beim Start von Windows ausgeführt wird.

**Skript `C:\Scripts\wsl-portproxy.ps1`:**

```powershell
# WSL SSH Port-Forwarding einrichten
# Ausführen als Administrator (z.B. via Task Scheduler)

$wslIp = (wsl hostname -I).Trim()
if (-not $wslIp) {
    Write-Error "WSL läuft nicht oder liefert keine IP. Starte WSL..."
    wsl true
    Start-Sleep -Seconds 2
    $wslIp = (wsl hostname -I).Trim()
}

# Alte Regel entfernen, neue erstellen
netsh interface portproxy delete v4tov4 listenport=22 listenaddress=0.0.0.0
netsh interface portproxy add v4tov4 listenport=22 listenaddress=0.0.0.0 connectport=22 connectaddress=$wslIp

# Firewall-Regel sicherstellen (löschen + neu anlegen)
Remove-NetFirewallRule -DisplayName "WSL SSH" -ErrorAction SilentlyContinue
New-NetFirewallRule -DisplayName "WSL SSH" -Direction Inbound -LocalPort 22 -Protocol TCP -Action Allow

Write-Host "Portproxy eingerichtet: Windows :22 -> WSL :22 ($wslIp)"
```

**Autostart einrichten (Task Scheduler):**

1. `taskschd.msc` öffnen
2. "Aufgabe erstellen" → Name: "WSL SSH Portproxy"
3. **Trigger:** "Beim Systemstart"
4. **Aktion:** "Programm starten" → `powershell.exe` mit Argumenten:
   ```
   -ExecutionPolicy Bypass -File C:\Scripts\wsl-portproxy.ps1
   ```
5. **Ausführen als:** `NT AUTHORITY\SYSTEM` (hat Admin-Rechte)
6. Haken bei "Mit höchsten Privilegien ausführen"

Jetzt wird der Portproxy bei jedem Windows-Start automatisch eingerichtet.

### Vorteile & Nachteile

| Vorteile | Nachteile |
|----------|-----------|
| Funktioniert auf Windows 10 + 11 | WSL-IP-Änderung erfordert Automatisierung |
| Keine Windows-Versionseinschränkung | Zusätzlicher Konfigurationsaufwand |
| Nur ein Port wird geöffnet (sicherer?) | Nur TCP (kein UDP) |
| | Powershell-Skript als Admin-Task nötig |

---

## WSL am Leben halten

Ein Problem haben beide Ansätze gemeinsam: WSL fährt die VM automatisch herunter, wenn **keine WSL-Shell** mehr geöffnet ist (standardmäßig nach ca. 8 Sekunden). Das ist ein Problem, weil der SSH-Dienst dann ebenfalls stirbt.

### Lösung 1: systemd (einfach, aber nicht immer ausreichend)

Wenn systemd aktiv ist und `ssh` als Dienst läuft (`sudo systemctl enable ssh`), hält systemd die WSL-Instanz grundsätzlich am Leben. In der Praxis reicht das oft, aber nicht immer – Windows kann die VM trotzdem beenden.

### Lösung 2: Hintergrundprozess

Starte in WSL einen minimalistischen Hintergrundprozess, der die Instanz am Leben hält:

```bash
# Einfach, aber effektiv:
sudo nohup sleep infinity > /dev/null 2>&1 &
```

Automatisch bei jedem WSL-Start – in `/etc/wsl.conf` hält der `[boot]`-Block leider nur einen Befehl. Besser: eine systemd-User-Unit.

Oder als Windows-Workaround: Ein Task, der regelmäßig `wsl true` aufruft.

### Lösung 3: Windows Task Scheduler (zuverlässig)

```powershell
# Alle 5 Minuten prüfen, ob WSL läuft
$action = New-ScheduledTaskAction -Execute "wsl.exe" -Argument "true"
$trigger = New-ScheduledTaskTrigger -Daily -DaysInterval 1
$trigger.Repetition.Duration = "P1D"
$trigger.Repetition.Interval = "PT5M"
Register-ScheduledTask -TaskName "WSL Keep Alive" -Action $action -Trigger $trigger -RunLevel Highest
```

Oder bequemer: Erstelle eine geplante Aufgabe über die GUI (`taskschd.msc`) mit:
- **Trigger:** Alle 5 Minuten, unbegrenzt
- **Aktion:** `wsl.exe` mit Argument `true`
- **Ausführen als:** Dein Benutzer

---

## SSH-Härtung (Security)

Sobald dein SSH-Server im WLAN erreichbar ist, kannst du dich nicht mehr hinter "es ist ja nur lokal" verstecken. Jeder im WLAN kann potenziell Verbindungsversuche starten.

### 1. Public-Key-Authentifizierung einrichten

**Auf dem Client** (dem Gerät, von dem du dich verbinden willst) ein Schlüsselpaar erzeugen:

```bash
ssh-keygen -t ed25519 -C "mein-notebook"
```

**Öffentlichen Schlüssel auf den WSL-Server kopieren:**

```bash
ssh-copy-id benutzername@192.168.1.42
```

Oder manuell: Inhalt von `~/.ssh/id_ed25519.pub` in die Datei `~/.ssh/authorized_keys` auf dem WSL-Server anhängen.

### 2. Passwort-Authentifizierung deaktivieren

Sobald der Public-Key-Zugriff funktioniert, schalte die Passwort-Anmeldung ab. Auf dem WSL-Server als root:

```bash
sudo nano /etc/ssh/sshd_config
```

Folgende Zeilen setzen/ändern:

```ssh-config
PasswordAuthentication no
ChallengeResponseAuthentication no
PermitRootLogin no
```

Dann SSH neustarten:

```bash
sudo systemctl restart ssh
```

**Teste vor dem Schließen der aktuellen Session,** ob die Key-Auth funktioniert! Sonst schließt du dich versehentlich selbst aus.

### 3. Fail2Ban (optional, aber empfohlen)

Fail2Ban überwacht die Logs und sperrt IPs nach mehreren fehlgeschlagenen Anmeldeversuchen.

```bash
sudo apt install fail2ban
```

Konfiguration in `/etc/fail2ban/jail.local`:

```ini
[sshd]
enabled = true
port = 22
maxretry = 3
bantime = 3600
findtime = 600
```

Fail2Ban starten:

```bash
sudo systemctl enable fail2ban --now
```

---

## Fehlerbehebung

### "Connection refused"

Der Portproxy oder die Firewall blockiert. Prüfe:

```powershell
# Portproxy anzeigen
netsh interface portproxy show all

# Firewall-Regel prüfen
Get-NetFirewallRule -DisplayName "WSL SSH"

# Prüfen, ob Port 22 auf Windows lauscht
netstat -ano | findstr :22
```

In WSL:

```bash
sudo ss -tlnp | grep :22
```

### WSL-IP geändert

Nach jedem `wsl --shutdown` oder Windows-Neustart kann sich die IP ändern. Führe das Automatisierungs-Skript aus (siehe oben) oder richte den Portproxy neu ein.

### Hyper-V Firewall blockiert trotz Regel

Prüfe die Hyper-V-Firewall-Regel:

```powershell
Get-NetFirewallHyperVRule -VMCreatorId '{40E0AC32-46A5-438A-A0B2-2B479E8F2E90}'
```

### systemd nicht aktiv

```bash
systemctl status
```

Erscheint "System has not been booted with systemd", prüfe `/etc/wsl.conf` auf Tippfehler. Nach Änderung: `wsl --shutdown` in PowerShell (nicht nur `exit` in WSL).

### Mirrored Mode aktiv, aber kein Zugriff

Prüfe, ob Mirrored Mode wirklich aktiv ist. In WSL:

```bash
ip addr show
```

Wenn hier die **gleiche** IP wie auf Windows erscheint, funktioniert der Mirrored Mode. Siehst du eine 172.x.x.x-Adresse, wird der NAT-Modus verwendet.

---

## Cheat Sheet

### WSL (Linux-Shell)

| Befehl | Beschreibung |
|--------|--------------|
| `sudo systemctl enable ssh --now` | SSH-Server installieren + starten |
| `sudo systemctl status ssh` | Status prüfen |
| `sudo nano /etc/ssh/sshd_config` | SSH-Konfiguration bearbeiten |
| `sudo systemctl restart ssh` | SSH neustarten nach Konfig-Änderung |
| `ip addr show` | IP-Adresse anzeigen |
| `hostname -I` | Kurzform der IP (nur in WSL) |
| `ssh-keygen -t ed25519` | SSH-Schlüsselpaar erzeugen |

### PowerShell (Windows, Admin)

| Befehl | Beschreibung |
|--------|--------------|
| `wsl hostname -I` | WSL-IP ermitteln |
| `wsl --shutdown` | WSL komplett neustarten |
| `netsh interface portproxy show all` | Alle Portproxys anzeigen |
| `Get-NetFirewallRule -DisplayName "WSL SSH"` | Firewall-Regel prüfen |
| `New-NetFirewallHyperVRule ...` | Hyper-V-Firewall für Mirrored Mode |

### Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `%USERPROFILE%\.wslconfig` | WSL2-Globalkonfiguration (Mirrored Mode) |
| `/etc/wsl.conf` | WSL-Distro-Konfiguration (systemd) |
| `/etc/ssh/sshd_config` | SSH-Server-Konfiguration |
| `~/.ssh/authorized_keys` | Öffentliche Schlüssel für Key-Auth |
| `/etc/fail2ban/jail.local` | Fail2Ban-Konfiguration |

---

## Zusammenfassung

- **WSL2 verwendet NAT** → die Instanz ist nicht direkt aus dem LAN erreichbar.
- **systemd muss aktiv sein** (`/etc/wsl.conf`), damit sshd als Dienst läuft.
- **Mirrored Mode** (Windows 11 22H2+) ist die einfachste Lösung: WSL erbt die Windows-IP und ist direkt erreichbar. Einzige Konfiguration: Hyper-V-Firewall für Port 22.
- **Port Proxy** (Windows 10 + 11) leitet Port 22 von Windows an WSL weiter. Wegen wechselnder WSL-IP ist ein Automatisierungsskript nötig.
- **SSH-Härtung** ist Pflicht: Public-Key-Auth, Passwort-Login deaktivieren, Fail2Ban.
- **WSL am Leben halten** erfordert einen Trick (systemd, Hintergrundprozess, Windows-Task).

> **Wichtig:** Dieser Zugriff gilt nur für dein **lokales WLAN**. Für Zugriff aus dem Internet brauchst du zusätzlich Port-Forwarding im Router, eine Firewall-Konfiguration und deutlich mehr Sicherheitsvorkehrungen (VPN, Tailscale, etc.). Das ist ein eigenes Thema.

---

## Quellen & Weiterführendes

- [Microsoft Learn: Accessing network applications with WSL](https://learn.microsoft.com/en-us/windows/wsl/networking)
- [Microsoft Learn: systemd support in WSL](https://learn.microsoft.com/en-us/windows/wsl/systemd)
- [Microsoft Learn: WSL configuration (.wslconfig)](https://learn.microsoft.com/en-us/windows/wsl/wsl-config)
- [Scott Hanselman: How to SSH into WSL2 on Windows 10](https://www.hanselman.com/blog/how-to-ssh-into-wsl2-on-windows-10-from-an-external-machine)
- [OpenSSH Server Konfiguration](https://www.ssh.com/academy/ssh/sshd_config)
- [Fail2Ban Dokumentation](https://fail2ban.readthedocs.io/)
