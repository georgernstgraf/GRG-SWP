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
