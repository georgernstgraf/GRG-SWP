# Windows-Debloat mit opencode (optional)

Optionaler **Semester- und Schuljahresstart**: das eigene Windows entrümpeln
(Bloatware, Telemetrie, Werbung) – **von opencode gesteuert**. Kein Pflichtstoff,
keine Benotung, sondern Übung im Umgang mit einem Agenten an einer echten, aber
**umkehrbaren** Aufgabe.

> **Nur private Geräte!** Auf schuleigenen Geräten nicht ausführen
> (Adminrechte/Policies). Auf fremden Geräten nur mit Erlaubnis.

## Lernziel

- opencode eine Aufgabe mit **Systemwirkung** geben,
- **vorher** ein Sicherheitsnetz aufbauen (Wiederherstellungspunkt),
- mit **`winget`** inventarisieren, was installiert bzw. sauber entfernbar ist,
- **vor** jeder Änderung den Vorschlag prüfen – nichts blind bestätigen,
- das Ergebnis **protokollieren**.

## Sicherheitsregeln (Pflicht)

1. **Nur private Geräte**, nie Schul- oder fremde Geräte.
2. **Adminrechte** nötig (UAC) – die Änderungen sind systemweit.
3. **Wiederherstellungspunkt zuerst** (Schritt 1). Win11Debloat ist undo-fähig,
   das Sicherheitsnetz kostet aber nur Minuten.
4. Vor jeder Änderung **erklären lassen, was passiert**.
5. Konservativ bleiben: **Store, Edge und Defender** nicht zwangsweise entfernen;
   im Zweifel den Haken weglassen.

## Schritt 1 – Wiederherstellungspunkt

Systemwiederherstellung muss aktiv sein. PowerShell **als Administrator**:

```powershell
Enable-ComputerRestore -Drive "C:\"
Checkpoint-Computer -Description "vor-debloat" -RestorePointType MODIFY_SETTINGS
```

Prüfen mit `Get-ComputerRestorePoint`.

## Schritt 2 – opencode beauftragen

opencode starten und die Aufgabe **mit Sicherheitsrahmen** übergeben, z. B.:

> Erkläre mir zuerst, was Win11Debloat macht. Lege dann einen
> Wiederherstellungspunkt an, **bevor** du irgendetwas änderst. Prüfe zusätzlich mit
> `winget list`, welche Programme installiert sind, und ob sich unerwünschte Win32-Apps
> sauber per `winget uninstall` entfernen lassen (statt sie manuell zu löschen).
> Führe anschließend den Standard-Debloat aus und zeige mir **vor jeder Änderung**,
> was passieren wird. Protokolliere am Ende, was entfernt bzw. geändert wurde.

Genau das ist Agenten-Steuerung: **Ziel + Schranken + Review**.

## Schritt 2b – Inventar & Entfernen mit winget

`winget` ist der Paketmanager unter Windows und ergänzt Win11Debloat: Dieses räumt
v. a. vorinstallierte (Store-/AppX-)Apps weg, `winget` deckt zusätzlich klassische
Win32-Programme ab.

```powershell
winget list                     # was ist installiert?
winget uninstall --id <PaketID> # gezielt entfernen (erst prüfen!)
winget install --id <PaketID>   # später sauber wieder installieren
```

- **Erst listen, dann entscheiden** – nichts entfernen, das du noch brauchst.
- Lieber per `winget uninstall` deinstallieren als Ordner/Dateien von Hand löschen.
- Für das Wiederherstellen ist `winget install` oft der bequemere Weg als der Store.

## Schritt 3 – Win11Debloat ausführen

**Quick** (lädt und startet automatisch; UAC/Admin nötig):

```powershell
& ([scriptblock]::Create((irm "https://debloat.raphi.re/")))
```

**Advanced** (als Administrator, mit CLI-Parametern):

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
.\Win11Debloat.ps1
```

- **Interaktiv:** Menü mit Häkchen – im Zweifel konservativ bleiben.
- **CLI/Config:** Parameter sowie Export/Import der Einstellungen siehe Wiki
  <https://github.com/Raphire/Win11Debloat/wiki>.

## Schritt 4 – rückgängig machen (Undo)

- Win11Debloat **erneut ausführen** und die gewünschten Änderungen abwählen.
- **Registry-Backup** des Tools zurückspielen.
- `Regfiles/Undo`-Dateien ausführen; entfernte Apps ggf. aus dem **Microsoft Store**
  oder per `winget install` neu installieren.
- Notfalls den gesetzten **Wiederherstellungspunkt** nutzen.

Wiki: <https://github.com/Raphire/Win11Debloat/wiki/Reverting-Changes>

## Dokumentieren

Kurz festhalten (z. B. als Datei im eigenen Repo): Was wurde entfernt/deaktiviert,
was hat funktioniert, was würdest du beim nächsten Mal anders machen?

## Weiterführend

- Win11Debloat: <https://github.com/Raphire/Win11Debloat>
- winget: <https://learn.microsoft.com/windows/package-manager/winget/>
- Alternativen im Vergleich: WinUtil (ChrisTitusTech), Winhance, BloatyNosy,
  ShutUp10++
