# Lösungen: Knowledge-Check Security Awareness (3ahwii)

**Datum:** 9. November 2026 · **Gesamtpunkte:** 75
**Teil A:** 15 Fragen × 4 Punkte = 60 · **Teil B:** 1 Frage × 15 Punkte = 15

Grundlage ist das Video „HAHAHA (You deserve it)" (The PrimeTime,
9. November 2026, 15:21, englisch). Die Fragen prüfen ausschließlich Inhalte,
die im Video tatsächlich gesagt werden; Frage 13 bezieht sich auf den
beiläufigen Satz zum eMudhra-Schlüssel.

---

## Teil A — Videoinhalt

### 1. Polymarket: der Weg über die CDN

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a ☑ Die Angreifer übernahmen die CDN-Auslieferung und tauschten das Skript.
- b ☑ Das Skript entzog Guthaben unmittelbar beim Aufruf der Seite.
- c ☑ Genau das kritisiert der Autor: kein Pinning, keine Prüfsumme, kein
  Review vor dem Laden.
- d ☐ Nicht das eigene Repository war der Einstiegspunkt, sondern die fremde
  Quelle.

### 2. Polymarket: die Bedingungen für das Geld zurück

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a ☑ Betroffene mussten vor der Auszahlung einen Vertrag unterschreiben.
- b ☑ Der Vertrag enthielt eine Klausel, die öffentliche Kritik untersagt.
- c ☑ Die Regelung galt ab Schäden von etwa 10.000 US-Dollar.
- d ☐ Ohne Bedingungen ging es gerade nicht — das ist der Punkt der Anekdote.

### 3. Binance: Schaden und Urheber

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a ☐ Der Schaden liegt um Größenordnungen über einer Million.
- b ☑ Rund 6 Milliarden US-Dollar nennt das Video.
- c ☑ Das FBI macht Nordkorea verantwortlich.
- d ☑ Binance erklärte zunächst, ein kompromittierter Laptop eines
  DevOps-Engineers komme als Ursache in Frage.

### 4. Binance: der erste Einstiegspunkt

**Richtig: a ☐, b ☑, c ☐, d ☑**

- a ☐ Es war kein offizielles Release, sondern eine manipulierte Variante.
- b ☑ Der Engineer suchte nach der Homebrew-Installation und wählte die
  bezahlte Suchanzeige.
- c ☐ Gerade nicht: die offizielle Seite war nicht der Weg, sondern die
  Anzeige.
- d ☑ Die Anzeige führte zu einer manipulierten Installation.

### 5. Binance: der zweite Einstiegspunkt

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a ☑ Ein angeblicher Projektleiter meldete sich über eine Job-Plattform.
- b ☑ Das Programm sollte Teil des Bewerbungsverfahrens sein und wurde
  ausgeführt.
- c ☑ Der Kontakt und die Ausführung passierten auf dem Arbeitslaptop.
- d ☐ Ein SSH-Schlüssel wird im Video nicht verlangt; die Schadsoftware kam
  über das „Testprogramm".

### 6. Binance: vom Bewerbungsgespräch weiter ins Netz

**Richtig: a ☑, b ☑, c ☐, d ☐**

- a ☑ Das interne KI-Werkzeug diente als Sprungbrett auf weitere Rechner.
- b ☑ Ausgangspunkt war der bereits kompromittierte Rechner aus dem
  Bewerbungsgespräch.
- c ☐ Physischer Zugang war nicht nötig; alles lief über Rechner und
  Zugangsdaten.
- d ☐ Der wirksame Teil des Angriffs lief in einem Fenster von wenigen
  Stunden.

### 7. Binance: Token, Container und Zeitfenster

**Richtig: a ☑, b ☑, c ☑, d ☐**

- a ☑ Auf dem Rechner des DevOps-Engineers lag ein Deployment-Token.
- b ☑ Damit wurde ein bösartiger Container bereitgestellt, der den Angriff
  auslöste.
- c ☑ Das Video nennt den 29. Oktober, etwa 17:15 bis 20:00 Uhr.
- d ☐ Genau diese Freigabe fehlte — das ist der zentrale Kritikpunkt.

### 8. Binance: Einfrieren und das Versprechen von Krypto

**Richtig: a ☐, b ☑, c ☑, d ☑**

- a ☐ Eine vollständige Rückholung aller Gelder wird nicht berichtet.
- b ☑ Rund 3 Milliarden US-Dollar konnten eingefroren werden.
- c ☑ Der Autor betont genau diesen Widerspruch.
- d ☑ „This is the future of finance" fällt sarkastisch.

### 9. Binance: Geldwäsche und Fluchtweg

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a ☑ Tornado Cash vermischt Zu- und Abflüsse und erschwert die Zuordnung.
- b ☑ 60 Millionen gestohlene USDT dienten als Sicherheit für rund 19.762
  geliehene ETH.
- c ☐ Die Beute lief nicht über normale Bankkonten, sondern über Krypto und
  Mixer.
- d ☑ Der Abzug erfolgte, bevor das Einfrieren wirksam wurde.

### 10. Ledger: die Hardware-Wallets

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a ☑ Die Geräte wurden auf dem Versandweg manipuliert.
- b ☑ Die Manipulation sammelte die eingegebenen privaten Schlüssel ein.
- c ☐ Das Video zieht das Gegenteil als Fazit: auch Hardware war nicht sicher.
- d ☑ Rund 86 Millionen US-Dollar werden genannt.

### 11. Größenordnung und Nordkorea

**Richtig: a ☑, b ☐, c ☑, d ☑**

- a ☑ Der Autor nennt es den größten bekannten Hack.
- b ☐ Wenige Millionen widersprechen der genannten Größenordnung.
- c ☑ 26,6 Milliarden US-Dollar nennt er als Wirtschaftsleistung Nordkoreas.
- d ☑ Er rechnet die Beute auf etwa 20 Prozent davon hoch.

### 12. Was der Autor als Kernversagen nennt

**Richtig: a ☑, b ☑, c ☐, d ☐**

- a ☑ Eine Person mit so weitreichenden Rechten ist genau sein Vorwurf.
- b ☑ Er vermisst die Kontrolle, die bei großen Beträgen eine zweite Person
  einschaltet.
- c ☐ Rechenleistung ist kein Thema des Videos.
- d ☐ Ein veraltetes Betriebssystem ist nicht die genannte Ursache.

### 13. eMudhra: ein Schlüssel, der „4" ist

**Richtig: a ☐, b ☑, c ☑, d ☐**

- a ☐ Der Schlüssel wurde nicht gestohlen — er war von Anfang an so schwach,
  dass man ihn aus dem öffentlichen Zertifikat ableiten konnte.
- b ☑ Der Autor sagt genau das: der private Schlüssel war praktisch die Zahl 4.
- c ☑ Das ist die Lehre des Falls: Sicherheit hängt an der Erzeugung, nicht am
  Etikett „Zertifizierungsstelle".
- d ☐ eMudhra ist eine echte Zertifizierungsstelle (60 Mio.+ Zertifikate).

> **Hintergrund für die Nachbesprechung (nicht abgefragt):** Die acht
> Intermediate-Keys entstanden bei einer Key-Ceremony am 30. April 2025 durch
> einen Skriptfehler beim Key-Wrap/Unwrap; die Entropie fiel von 384 Bit auf
> einstellige Zahlen. Gemeldet am 17. Oktober 2026, innerhalb von drei Tagen
> von Chrome, Firefox, Apple und Microsoft gesperrt (CVE-2026-111943 u. a.).
> Die Lehre für den Unterricht: Browser waren nach einem Tag sauber, Java,
> Node, Go, CI-Images und Container-Truststores brauchten Wochen — Vertrauen
> steckt in Abhängigkeiten, die niemand auf dem Schirm hat.

### 14. Was der Autor als Gegenmaßnahme empfiehlt

**Richtig: a ☑, b ☑, c ☐, d ☑**

- a ☑ Er schlägt genau das vor: ein KI-Werkzeug fragen, was das Programm tut.
- b ☑ Fremde Software aus einem Gespräch gehört nicht ungefragt auf das
  Arbeitsgerät.
- c ☐ Links sofort zu öffnen ist das Gegenteil seiner Empfehlung.
- d ☑ „Don't raw-dog links" ist seine Formulierung dafür.

### 15. Der rote Faden

**Richtig: a ☑, b ☑, c ☐, d ☐**

- a ☑ Fremdes Skript, fremder Installer, manipuliertes Gerät — in allen drei
  Fällen kam der Schaden über einen ungeprüften Baustein.
- b ☑ Jedes Mal scheiterte eine Kontrolle an einer Stelle, an der Vertrauen
  angenommen wurde.
- c ☐ Eine Betriebssystem-Lücke ist in keinem der Fälle die Ursache.
- d ☐ Ein Browser-Update hätte weder Binance noch Ledger gerettet.

---

## Teil B — Übertragung auf die Praxis

### 16. Das „Testprogramm" im Bewerbungsgespräch (15 Punkte)

**Musterlösung (erwartete Elemente):**

Das Programm nicht ausführen. Ein Arbeitgeber oder ein Bewerbungsverfahren
verlangt nicht, fremde Software ungeprüft auf dem Arbeitsgerät zu starten —
genau dieser Köder wurde bei Binance verwendet (angeblicher Projektleiter,
„Testprogramm" während des Bewerbungsprozesses). Richtig ist:

- **Herkunft prüfen:** Wer hat das geschickt, ist die Identität über einen
  zweiten Kanal (bekannte Firmenadresse, Telefonnummer aus der Ausschreibung)
  bestätigt?
- **Nicht auf dem Arbeitsgerät ausführen:** für Tests eine virtuelle Maschine
  oder eine dafür vorgesehene, isolierte Umgebung verwenden.
- **Melden:** Vorgesetzte bzw. IT-Security informieren, statt es „schnell
  selbst zu regeln". Bei Binance fehlte genau diese Eskalation.
- **Nachfragen statt ausführen:** eine seriöse Gegenseite akzeptiert ein
  „das mache ich nicht auf meinem Arbeitsgerät".
- **Vorab prüfen lassen:** ein KI-Werkzeug fragen, ob das Programm Dateien
  verändert oder Daten überträgt — die Empfehlung aus dem Video.

**Wertungs-Skizze (Summe 15 P):**

| Teilschritt | Punkte |
|---|---|
| Programm nicht ausführen / Ausführung verweigern | 3 |
| Regel 1 (z. B. Herkunft und Identität über zweiten Kanal prüfen) | 3 |
| Regel 2 (z. B. isolierte Umgebung/VM statt Arbeitsgerät) | 3 |
| Regel 3 (z. B. melden an Vorgesetzte/IT-Security) | 3 |
| Bezug zum Video erkennbar (Fake-Recruiter, „Testprogramm", KI-Prüfung) | 3 |
| **Summe** | **15** |

---

## Gesamtpunkte

| Teil | Punkte |
|---|---|
| A (15 × 4) | 60 |
| B (1 × 15) | 15 |
| **Gesamt** | **75** |
