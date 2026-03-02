# sj25-26-2ahwii-swp-grg-mja

## 2026-03-02_fetch

**Response Object**

## Häufigste Fehler der Klasse

### 1. **REST API HTTP-Methoden (Frage 2)**

**Fehler:** DELETE als REST-Methode nicht erkannt
**Betroffene Schüler:** 7 von 14 (50%)
**Erklärung:** DELETE ist eine der vier grundlegenden REST-Methoden (GET, POST, PUT/PATCH, DELETE)

### 2. **Context-Parameter in Hono (Frage 3)**

**Fehler:** Parameter `c` in Hono-Handlern nicht als Context erkannt
**Betroffene Schüler:** 5 von 14 (36%)
**Erklärung:** In Hono steht `c` für den Context, der Request- und Response-Objekte kapselt

### 3. **JOIN in db.prepare() (Frage 4)**

**Fehler:** JOIN-Funktionalität in vorbereiteter Query nicht erkannt
**Betroffene Schüler:** 7 von 14 (50%)
**Erklärung:** `db.prepare()` bereitet eine SQL-Abfrage vor, die einen JOIN enthalten kann

### 4. **Wildcard-Pfade bei serveStatic (Frage 5)**

**Fehler:** `/*` als Wildcard für alle Pfade nicht erkannt
**Betroffene Schüler:** 7 von 14 (50%)
**Erklärung:** `/*` ist ein Wildcard-Muster, das auf alle Pfade zutrifft

### 5. **document.querySelector() (Frage 6)**

**Fehler:** Alternative DOM-Methode nicht erkannt
**Betroffene Schüler:** 10 von 14 (71%)
**Erklärung:** `querySelector("#id")` ist eine gültige Alternative zu `getElementById()`

### 6. **JSON-Begriffsdefinitionen (Frage 9)**

**Fehler:** Nur eine der zwei korrekten Definitionen angekreuzt
**Betroffene Schüler:** 5 von 14 (36%)
**Erklärung:** JSON ist sowohl "Ein Format zum Austausch von Daten" als auch die Abkürzung für "JavaScript Object Notation"

### 7. **Fetch API (Frage 12)**

**Fehler:** Fetch komplett falsch beantwortet
**Betroffene Schüler:** 4 von 14 (29%)
**Erklärung:** `fetch()` ist die moderne JavaScript-API für HTTP-Requests

### 8. **Grundlegende Missverständnisse**

- **Hono als Datenbank** (1 Schüler): Hono ist ein Web-Framework, keine Datenbank
- **Deno als Code-Editor** (2 Schüler): Deno ist eine Laufzeitumgebung wie Node.js
- **c.json() nicht erkannt** (2 Schüler): Das ist die Hauptmethode zum Senden von JSON in Hono

---

## Empfehlungen für den Unterricht

1. **REST-API-Grundlagen wiederholen:** DELETE-Methode und alle vier CRUD-Operationen
2. **Hono-Context erklärt:** Rolle des `c`-Parameters in Routen
3. **SQL JOINs vertiefen:** Verbindung von prepare() mit JOIN-Abfragen
4. **DOM-Methoden:** Sowohl getElementById als auch querySelector vorstellen
5. **Praktische Übungen:** Fetch API in realen Szenarien üben
6. **Konzept-Überprüfung:** Abgrenzung von Framework (Hono), Laufzeit (Deno) und Datenbank (SQLite)

## 2026-02-23

hono heute mit sqlite - rest - api
http Folie letzte Woche besprochen ..
HÜ:

- button "hole essen" mit onclick(), welche
  - den enpoint fetched
  - json verwandeln in <tr><td>Name</td><td>Essen</td></tr>
Also wird die ganze schöne Tabelle angezeigt.

## 2026-01-19 (lambda)function mit arrays

HÜ: Erstelle eine Liste mit 5 Personen, also zb liste =

```js
const persons = [{name: "Hermine", age: 14, gender: "f"}, ... ]
```

1) Sortiere Deine Peronen nach Alter mithilfe persons.sort();
2) Erstelle ein weiteres Array mit nur den männlichen/weiblichen Personen (filter)

## 2025-12-01_selectors

HÜ: css diner 3 screenshots vom Ende

## 2025-11-24

HÜ:

- In einer Website Flexbox sinnvoll anwenden und
- einen sehr speziellen Font verwenden

Flexbox: <https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png>
Fonts: Siehe Unterlagen-Ordner in diesem Repo

## 2025-11-17

gemacht: GRG-WMC/Unterlagen/CSS/CSS-Boxmodel.pdf (bis units)
anschauen: whatunit.com

HÜ: Website verbessern!
Weniger CSS, aber dafür effizienter eingesetzt

Samy: super var defs
Roger bitte Dirnames mit Datum
Mankah ditto

## 2025-11-10 Heute CSS Boxmodel durchgemacht

HÜ: Kreative Anwendung der Inhalte:

- padding / margin / border
- etc...

## GRG's WMC Repo

(web & mobile computing)
Hier sind die html / css / javascript unterlagen drin: <https://github.com/georgernstgraf/GRG-WMC.git>

## 2025-11-03

HÜ: Tags auch auf der schon erstellten oder einer neuen Website verwenden!!

Wenn schon geschehen, neue TAGS verwenden und einbauen. Anregungen:

- table (fancy wenn geht)
- form / input
- evtl. fontsy

## Herbstferien

## 2025-10-20

- testing von prim besprochen
- html angefangen

HÜ:

- recherche html auf <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference>
- <selfhtml.org>
- <w3schools.com>

Erstelle eine HTML Seite, auf welcher Du die Erkenntnisse deiner Recherche zusammenfasst!

## 2025-10-13 DEbugger

- HÜ: Debugger in VSCode einrichten
- Abgabe Screenshot des Debuggers (3 Stück), sowie launch.json
- Testen (deno test) mit
- - 10 Primzahlen
- - 10 Nicht Primzahlen

## 2025-10-06 Tests

HÜ: Tests weiter automatisieren:

Zufalls-Int mit Math.ceil(Math.random()*oberschranke) erzeugen

- Ergebnis zuerst generieren (jeweils zuf. ganz / zähler / nenner)
- den Zähler in 2 Teile durch Subtraktion zerlegen, sodass a+b wieder == Zähler wird
- Beide Brüche um eine jeweils andere Zufallszahl (int) erweitern
- überprüfen, ob bruch1.addiere(bruch2).toString() gleich ist wie ergebnis.toString()

obige Punkte in einer Schleife etwa 15x ausführen!!

## 2025-09-29

OO vertieft anhand Class Bruch

- HÜ: deno init in neuem Folder
- deno test aufrufen
- 5 Testfälle für die Bruchklasse implementieren

## 2025-09-22

- constructor / this / static
- class vs. instance

HÜ exceptions recherche

## 2025-09-15

- OO-style reorg
- throw() verwenden!!

## 2025-09-08

HÜ

- github user + repository anlegen + lehrer den url schicken / infi / swp separat
- Brüche addieren Programm weiterbauen, insbesondere Parameterprüfung (throw)

## Stoff todo

- exceptions
- Klassen
- html
- css

## Stoff besprochen

## INhalte vom letzten Jahr

- arrays / 2d
- json (eher nicht)
- js  im browser (fast) unbekannt
