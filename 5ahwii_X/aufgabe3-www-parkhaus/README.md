# Aufgabenstellung 3 – Webseitenentwicklung: Parking Booking

Es soll eine responsive Buchungsseite für ein Parkhaus entwickelt werden. Benutzer*innen sollen einen Parkplatzplan sehen und Stellplätze auswählen können. Die Darstellung soll sauber und konsistent umgesetzt werden.

Maße, Farben und CSS-Variablen sind den Angabedateien vorgegeben und dürfen verändert werden. Hauptfokus liegt jedoch auf Erstellung des Responsive Layouts sowie Interaktivität (select / focus / hover).

## Vorgaben

- Technologien: HTML + CSS
- Kein Frontend-JavaScript erforderlich (nur als Bonus für „Sehr gut“)
- Keine Frameworks (kein Bootstrap, kein Tailwind, …)
- Responsive Layout (Desktop 2 Spalten, Mobile 1 Spalte)
- Footer muss vorhanden sein (Legende der Platz-Zustände)

## Anforderungen

- Layout: Desktop 2 Spalten: links Parkplatzplan, rechts Buchungsübersicht; ab einem Breakpoint (siehe Details) 1 Spalte.
- Parkplatzplan: CSS-Grid mit 6 Reihen (A–F) und 8 Stellplätzen (1–8).
- Fahrweg: Zwischen Platz 4 und 5 ist ein sichtbarer Abstand („Fahrweg“).

### 3 mögliche Zustände der Stellplätze:

- frei (wählbar)
- ausgewählt (optisch klar markiert)
- belegt (nicht wählbar, disabled)

Auswahl ohne Javascript: Die Auswahl muss ohne Javascript möglich sein, z.B. über Checkbox + Label (empfohlen).

Fokus-Styling: Bei Aktivität/Fokus in einem interaktiven Element muss dieses deutlich hervorgehoben werden (:focus).

Tooltips: Bei Aktivität/Fokus eines Stellplatzes ist ein Tooltip sichtbar (z.B. „Reihe A, Platz 5“).

Footer: Enthält eine Legende (frei / ausgewählt / belegt) und ist optisch vom Inhalt getrennt.

### Buchungsübersicht (rechts)

- Standortname, Adresse, Preisinfo (statisch genügt)
- Feld „Ausgewählte Plätze:“ darf ohne JS ein Platzhalter sein („—“)
- Button „Reservieren“/„Buchen“ mit Hover/Active/Focus-Styles (Disabled-Style soll vorhanden sein)

## Bonus (nur für „Sehr gut“ mit Javascript):

- Live-Anzeige der ausgewählten Plätze (z.B. „A5, A6“)
- Anzahl & Gesamtpreis berechnen
- Button nur aktiv, wenn mindestens 1 Platz ausgewählt ist

## Abgabe:

- index.html
- style.css
- optional: script.js
- Abgabe als ZIP: parking-booking_nachname.zip
