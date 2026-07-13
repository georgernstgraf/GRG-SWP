# Wissenstest - 2ahwii

**Datum:** 2026-02-23  
**Themen:** Hono Web Framework, REST API, SQLite, JavaScript

---

## Multiple Choice Fragen

Kreuze die richtigen Antworten an. Es können mehrere Antworten richtig sein.

### 1. Hono Framework

Was ist Hono?

- [ ] Eine Datenbank für SQL-Abfragen
- [ ] Ein Web-Framework für Deno
- [ ] Ein CSS-Framework
- [ ] Ein JavaScript-Test-Framework

### 2. REST API Endpoints

Welche HTTP-Methoden werden typischerweise für REST APIs verwendet?

- [ ] GET
- [ ] SEND
- [ ] POST
- [ ] DELETE

### 3. Hono Route Definition

Was bewirkt folgender Code in Hono?

```typescript
app.get("/lieblinge", (c) => {
    return c.json(getLieblinge());
});
```

- [ ] Er definiert eine POST-Route
- [ ] Er gibt JSON-Daten als Antwort zurück
- [ ] Er liest eine Datei vom Dateisystem
- [ ] Der Parameter `c` steht für den Context

### 4. SQLite in Deno

Was macht der folgende Code?

```typescript
const lieblinge_stmt = db.prepare("SELECT person.name, essen.essen FROM person JOIN essen ON person.id_lieblingsessen = essen.id");
```

- [ ] Er erstellt eine neue Tabelle
- [ ] Er bereitet eine SQL-Abfrage vor
- [ ] Er führt einen JOIN zwischen zwei Tabellen aus
- [ ] Er löscht alle Einträge

### 5. Statische Dateien in Hono

Was bewirkt diese Zeile?

```typescript
app.use("/*", serveStatic({ root: "./static" }));
```

- [ ] Alle Routen werden blockiert
- [ ] Statische Dateien aus dem Ordner `./static` werden bereitgestellt
- [ ] Nur HTML-Dateien werden ausgeliefert
- [ ] Die Middleware gilt für alle Pfade (`/*`)

### 6. JavaScript DOM

Wie erhält man ein HTML-Element mit der ID "calculate"?

- [ ] `document.getElement("calculate")`
- [ ] `document.getElementById("calculate")`
- [ ] `document.querySelector("#calculate")`
- [ ] `document.getById("calculate")`

### 7. Event Listener

Was passiert mit folgendem Code?

```javascript
calculateBtn.addEventListener("click", calculate);
```

- [ ] Die Funktion `calculate` wird sofort ausgeführt
- [ ] Bei einem Klick auf `calculateBtn` wird `calculate` aufgerufen
- [ ] Es wird ein Klick-Event simuliert
- [ ] Der Button wird deaktiviert

### 8. Canvas API

Wofür wird `ctx.lineTo()` verwendet?

- [ ] Um Text auf das Canvas zu schreiben
- [ ] Um eine Linie zum aktuellen Pfad hinzuzufügen
- [ ] Um das Canvas zu löschen
- [ ] Um eine Verbindung zu einem Server herzustellen

### 9. JSON

Was ist JSON?

- [ ] Eine Programmiersprache
- [ ] Ein Format zum Austausch von Daten
- [ ] Eine Datenbank
- [ ] JavaScript Object Notation

### 10. Deno

Was ist Deno?

- [ ] Ein Browser
- [ ] Eine Laufzeitumgebung für JavaScript/TypeScript
- [ ] Ein Code-Editor
- [ ] Ein Paket-Manager für Python

### 11. SQL JOIN

Was bewirkt ein JOIN in SQL?

- [ ] Löscht doppelte Einträge
- [ ] Verbindet zwei Tabellen basierend auf einer gemeinsamen Spalte
- [ ] Erstellt eine neue Datenbank
- [ ] Sortiert die Ergebnisse

### 12. Fetch API

Wie kann man Daten von einem API-Endpunkt abrufen?

- [ ] `fetch("http://localhost:8000/lieblinge")`
- [ ] `request("http://localhost:8000/lieblinge")`
- [ ] `http.get("http://localhost:8000/lieblinge")`
- [ ] `download("http://localhost:8000/lieblinge")`

---

## Freitext Fragen

### 13. REST API Erklärung

Erkläre kurz, was eine REST API ist und nenne zwei typische Anwendungsfälle.

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

### 14. Code-Analyse

Analysiere den folgenden Code und erkläre, was er bewirkt:

```typescript
app.get("/lieblinge", (c) => {
    return c.json(getLieblinge());
});
```

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

### 15. Frontend-Backend Kommunikation

Wie kommuniziert das Frontend (HTML/JavaScript) mit dem Backend (Hono-Server) in der gezeigten Anwendung? Beschreibe den Ablauf.

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________
