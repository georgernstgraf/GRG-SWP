# Hausübungen – 2AHWII SWP

> Wichtig: PLF 4. Mai

---

## Hausübung vom 16. März 2026

### Thema: Transpile / async / await

**Aufgabe:**
1. Füge das Paket `ms` zu deinem Deno-Projekt hinzu: `deno add npm:ms`
2. Verwende die `ms`-Funktion in deiner Website, um Zeitangaben (z.B. „vor 5 Minuten") benutzerfreundlich darzustellen

---

## Hausübung vom 9. März 2026

### Thema: Promises und Promise-Chaining

**Detaillierte Angabe:** Siehe Ordner `2026-03-09_promises/Angabe_HÜ.md`

**Zusammenfassung:**
Erstelle eine Promise-Kette für einen Pizza-Service:
1. **Ofen-Check:** Funktion `checkOven()`, die prüft, ob der Ofen heiß ist
2. **Pizza backen:** Funktion `bakePizza(pizzaName)`, die nur ausgeführt wird, wenn der Ofen bereit ist
3. **Chaining:** Verbinde beide Funktionen mit `.then()` und einem `.catch()` am Ende

---

## Hausübung vom 2. März 2026

### Thema: Fetch und Response-Objekt

**Aufgabe:**
Siehe Ordner `2026-03-02_button fetch übung_mankah/`

Arbeite mit dem **Response-Objekt**:
- Die Methoden `.json()` und `.text()` liefern ihrerseits wieder ein Promise
- Erstelle einen Button, der Daten von einem Endpoint fetcht und verarbeitet

---

## Hausübung vom 23. Februar 2026

### Thema: Hono mit SQLite REST-API

**Aufgabe:**
Erstelle einen Button „hole Essen" mit `onclick()`, der:
1. Den Endpoint fetched
2. Das JSON in eine HTML-Tabelle umwandelt: `<tr><td>Name</td><td>Essen</td></tr>`
3. Die Tabelle auf der Website anzeigt

---

## Hausübung vom 19. Januar 2026

### Thema: Lambda-Funktionen mit Arrays

**Aufgabe:**
Erstelle eine Liste mit 5 Personen:
```js
const persons = [{name: "Hermine", age: 14, gender: "f"}, ... ]
```

1. Sortiere deine Personen nach Alter mit `persons.sort()`
2. Erstelle ein weiteres Array mit nur den männlichen oder nur den weiblichen Personen (verwende `filter`)

---

## Hausübung vom 15. Dezember 2025

### Thema: CSS Grid

**Aufgabe:**
Wende CSS Grid in einer Website an und experimentiere mit verschiedenen Layouts.

---

## Hausübung vom 1. Dezember 2025

### Thema: CSS Selectors

**Aufgabe:**
- Spiele „CSS Diner" durch: <https://flukeout.github.io/>
- Mache 3 Screenshots vom Ende des Spiels als Nachweis

---

## Hausübung vom 24. November 2025

### Thema: Flexbox und Fonts

**Aufgaben:**
1. Wende Flexbox sinnvoll in einer Website an
2. Verwende einen speziellen/ausgefallenen Font

**Ressourcen:**
- Flexbox-Poster: <https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png>
- Fonts: Siehe Unterlagen-Ordner im Repository

---

## Hausübung vom 17. November 2025

### Thema: CSS Boxmodel

**Aufgabe:**
- Website verbessern: Weniger CSS, aber dafür effizienter eingesetzt
- Behandelte Inhalte: padding, margin, border, units
- Siehe auch: `GRG-WMC/Unterlagen/CSS/CSS-Boxmodel.pdf` und <https://whatunit.com>

---

## Hausübung vom 10. November 2025

### Thema: CSS Boxmodel – Kreative Anwendung

**Aufgabe:**
Wende die behandelten CSS-Eigenschaften kreativ an:
- padding / margin / border
- etc.

---

## Hausübung vom 3. November 2025

### Thema: HTML-Tags

**Aufgabe:**
Verwende Tags auf deiner bereits erstellten oder einer neuen Website!

Anregungen:
- `<table>` (fancy, wenn möglich)
- `<form>` / `<input>`
- Eventuell besondere Fonts

---

## Hausübung vom 20. Oktober 2025

### Thema: HTML-Einführung

**Aufgabe:**
1. Recherche zu HTML auf:
   - <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference>
   - <https://selfhtml.org>
   - <https://w3schools.com>
2. Erstelle eine HTML-Seite, auf der du die Erkenntnisse deiner Recherche zusammenfasst

---

## Hausübung vom 13. Oktober 2025

### Thema: Debugger in VSCode

**Aufgaben:**
1. Debugger in VSCode einrichten
2. Abgabe:
   - 3 Screenshots des Debuggers
   - `launch.json`
3. Testen mit `deno test`:
   - 10 Primzahlen testen
   - 10 Nicht-Primzahlen testen

---

## Hausübung vom 6. Oktober 2025

### Thema: Automatisierte Tests

**Aufgabe:**
Tests weiter automatisieren mit Zufallszahlen:

```js
Math.ceil(Math.random() * obergrenze)
```

1. Ergebnis zuerst generieren (jeweils zufällig: ganz / zähler / nenner)
2. Den Zähler in 2 Teile durch Subtraktion zerlegen, sodass `a + b == Zähler`
3. Beide Brüche um eine jeweils andere Zufallszahl (int) erweitern
4. Überprüfen: `bruch1.addiere(bruch2).toString() == ergebnis.toString()`
5. Obige Punkte in einer Schleife ca. 15× ausführen

---

## Hausübung vom 29. September 2025

### Thema: Objektorientierung – Klasse Bruch

**Aufgaben:**
1. `deno init` in einem neuen Ordner ausführen
2. `deno test` aufrufen
3. 5 Testfälle für die Bruchklasse implementieren

---

## Hausübung vom 22. September 2025

### Thema: Constructor, this, static – class vs. instance

**Aufgabe:**
Recherche zu Exceptions in JavaScript/TypeScript

---

## Hausübung vom 15. September 2025

### Thema: OO-Style Reorg und throw()

**Aufgabe:**
`throw()` in deinem Code verwenden!

---

## Hausübung vom 8. September 2025

### Thema: Projekt-Setup und Brüche

**Aufgaben:**
1. GitHub-User und Repository anlegen, URL an Lehrer schicken (Informatik und SWP separat)
2. Brüche-Addieren-Programm weiterbauen, insbesondere Parameterprüfung mit `throw`
