# 09. Kryptografie, GnuPG und PASS

## Das Problem des sicheren Schlüsselaustauschs
Im Internet stehen wir vor einem fundamentalen Problem: Wie kann ich jemandem eine geheime Nachricht schicken, ohne dass jemand anderes auf dem Weg dorthin mitliest? 

Stellen wir uns vor, wir verwenden eine verschließbare Kiste. Wenn ich die Kiste mit einem Schloss verschließe und an dich schicke, brauchst du den Schlüssel, um sie zu öffnen. Aber wie schicke ich dir den Schlüssel? Wenn ich den Schlüssel per Post (oder unverschlüsselt über das Internet) schicke, könnte ihn jemand abfangen, nachmachen und später unsere Kiste öffnen. 
Dieses Problem nennt man das **Schlüsselaustauschproblem** der *symmetrischen Verschlüsselung* (bei der derselbe Schlüssel zum Ver- und Entschlüsseln benutzt wird).

---

## Die Lösung: Asymmetrische Verschlüsselung
Die Lösung ist genial und bildet das Fundament unserer modernen, sicheren Kommunikation (HTTPS, SSH, etc.): **Die Asymmetrische Verschlüsselung**.

Anstatt eines Schlüssels generieren wir ein zusammenhängendes **Schlüsselpaar**:
1.  **Den Public Key (Öffentlicher Schlüssel):** Stell dir das wie ein offenes Vorhängeschloss vor. Jeder darf dieses Schloss haben. Jeder kann dieses Schloss an eine Kiste hängen und diese zuklicken (verschlüsseln).
2.  **Den Private Key (Privater Schlüssel):** Das ist der einzige Schlüssel auf der Welt, der dieses spezifische Schloss wieder öffnen (entschlüsseln) kann. Dieser Schlüssel darf deinen Computer niemals verlassen.

### Wie funktioniert der Austausch nun?
1. Du möchtest eine geheime Nachricht von mir empfangen.
2. Du schickst mir dein *offenes Vorhängeschloss* (deinen Public Key). Das kann völlig ungesichert über das Internet passieren – es ist ja nur das offene Schloss.
3. Ich lege meine Nachricht in die Kiste, klicke *dein* Schloss zu und schicke die Kiste an dich zurück.
4. **Das Wichtige:** Selbst ich, der die Kiste gerade verschlossen hat, kann sie nun nicht mehr öffnen! Nur *du* mit deinem Private Key kannst das.

---

## Der Key-Server: Warum man Geheimnisse in die Welt hinausschreit
Es ist nicht nur sicher, sondern **zwingend notwendig**, seinen Public Key (das Vorhängeschloss) weiträumig zu verteilen. Wenn ihn niemand hat, kann dir auch niemand eine verschlüsselte Nachricht schicken.

Dafür gibt es **Key-Server** (z.B. `keyserver.ubuntu.com`). Das sind riesige, öffentliche Telefonbücher für Vorhängeschlösser. Du kannst dort nach der E-Mail-Adresse einer Person suchen und dir ihr Vorhängeschloss herunterladen.

---

## Identität und das "Web of Trust"
Hier entsteht das nächste Problem: Wenn ich auf dem Key-Server nach "Max Mustermann" suche, finde ich vielleicht drei verschiedene Vorhängeschlösser. Woher weiß ich, welches wirklich dem echten Max gehört und nicht einem Betrüger, der sich als Max ausgibt?

**Der Fingerprint (Fingerabdruck):**
Jeder Public Key hat einen kryptografischen Fingerabdruck – eine lange Zeichenfolge, die den Schlüssel eindeutig identifiziert (z.B. `2F9B 8A12 ...`).

**Das Web of Trust (Netz des Vertrauens):**
Anstatt einer zentralen Behörde zu vertrauen, vertrauen wir uns gegenseitig. 
1. Max und ich treffen uns physisch. Er zeigt mir seinen Ausweis und gibt mir einen Zettel mit seinem Fingerprint.
2. Ich lade den Key für Max vom Key-Server herunter.
3. Ich vergleiche den Fingerprint aus dem Internet mit dem Fingerprint auf dem echten Zettel.
4. Wenn sie übereinstimmen, **signiere** ich seinen Schlüssel mit *meinem* Private Key. Das ist wie mein digitaler Stempel: "Ich bürge dafür, dass dieser Schlüssel wirklich Max gehört."

Wenn meine Freunde nun Max eine Nachricht schicken wollen und sehen, dass *ich* (dem sie bereits vertrauen) für Max gebürgt habe, können sie sicher sein, den richtigen Schlüssel zu verwenden.

---

## Architektur von PASS
**PASS** (`pass`) ist der Standard-Unix-Passwortmanager, der auf genau dieser asymmetrischen Verschlüsselung basiert.

Anstatt Passwörter einer Firma (wie LastPass oder 1Password) in der Cloud anzuvertrauen, nutzt PASS eine viel simplere, aber sicherere Architektur:
*   Jedes Passwort wird als simple Textdatei auf deiner Festplatte gespeichert.
*   Bevor die Datei gespeichert wird, verschlüsselt `pass` sie mit GPG (und deinem Public Key).
*   Um das Passwort zu lesen, entschlüsselt `pass` die Datei kurzzeitig mit deinem Private Key.

### Die Vorteile der PASS-Architektur:
1.  **Git-Integration:** Da es nur Textdateien (wenn auch verschlüsselt) sind, lassen sie sich perfekt in einem Git-Repository verwalten (`pass git init`). So kannst du deine Passwörter versionieren und sicher über einen Git-Server (z.B. GitHub) zwischen deinem Laptop und Smartphone synchronisieren.
2.  **Multi-Client & Multi-Tenant:** Der genialste Aspekt von `pass` ist die Möglichkeit, ein Passwort für *mehrere* Schlüsselhalter zu verschlüsseln (Multi-Tenant).
    *   Du kannst ein Passwort so verschlüsseln, dass es sowohl mit *deinem* Private Key als auch mit dem Private Key deines *KI-Agenten* geöffnet werden kann.
    *   So kannst du einem Agenten (oder einem Teammitglied) gezielt Zugriff auf spezifische Passwörter (z.B. Datenbank-Credentials) geben, ohne ihm deine Master-Passwörter anvertrauen zu müssen. Der Agent entschlüsselt die Daten einfach mit seinem eigenen Private Key.