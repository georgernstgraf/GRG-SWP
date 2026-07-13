# Lösungen - Wissenstest 2ahwii

**Datum:** 2026-02-23

---

## Multiple Choice Lösungen

### 1. Hono Framework
- [x] Ein Web-Framework für Deno

### 2. REST API Endpoints
- [x] GET
- [x] POST
- [x] DELETE

### 3. Hono Route Definition
- [x] Er gibt JSON-Daten als Antwort zurück
- [x] Der Parameter `c` steht für den Context

### 4. SQLite in Deno
- [x] Er bereitet eine SQL-Abfrage vor
- [x] Er führt einen JOIN zwischen zwei Tabellen aus

### 5. Statische Dateien in Hono
- [x] Statische Dateien aus dem Ordner `./static` werden bereitgestellt
- [x] Die Middleware gilt für alle Pfade (`/*`)

### 6. JavaScript DOM
- [x] `document.getElementById("calculate")`
- [x] `document.querySelector("#calculate")`

### 7. Event Listener
- [x] Bei einem Klick auf `calculateBtn` wird `calculate` aufgerufen

### 8. Canvas API
- [x] Um eine Linie zum aktuellen Pfad hinzuzufügen

### 9. JSON
- [x] Ein Format zum Austausch von Daten
- [x] JavaScript Object Notation

### 10. Deno
- [x] Eine Laufzeitumgebung für JavaScript/TypeScript

### 11. SQL JOIN
- [x] Verbindet zwei Tabellen basierend auf einer gemeinsamen Spalte

### 12. Fetch API
- [x] `fetch("http://localhost:8000/lieblinge")`

---

## Freitext Lösungen

### 13. REST API Erklärung

**Musterlösung:**
Eine REST API (Representational State Transfer) ist eine Schnittstelle, die über HTTP-Methoden (GET, POST, PUT, DELETE) auf Ressourcen zugreift. Sie ist zustandslos und nutzt standardisierte Formate wie JSON.

Anwendungsfälle:
- Abfrage von Daten aus einer Datenbank (z.B. `/lieblinge` für Lieblingsessen)
- Mobile Apps, die mit einem Server kommunizieren
- Microservices-Architekturen
- Web-Anwendungen mit getrenntem Frontend und Backend

### 14. Code-Analyse

**Musterlösung:**
Der Code definiert eine GET-Route am Pfad `/lieblinge`. Wenn ein Client (z.B. Browser) eine GET-Anfrage an `http://localhost:8000/lieblinge` sendet:
1. Empfängt Hono die Anfrage
2. Der Handler wird mit einem Context-Objekt `c` aufgerufen
3. Die Funktion `getLieblinge()` wird ausgeführt (liest Daten aus SQLite)
4. Das Ergebnis wird als JSON-Antwort zurückgegeben

### 15. Frontend-Backend Kommunikation

**Musterlösung:**
Der Ablauf:
1. **Frontend (Browser):** Der Benutzer klickt auf einen Button oder lädt die Seite
2. **JavaScript fetch():** Das Frontend sendet eine HTTP-GET-Anfrage an den Endpunkt (z.B. `fetch("/lieblinge")`)
3. **Backend (Hono):** Der Hono-Server empfängt die Anfrage an der definierten Route
4. **Datenbankabfrage:** SQLite führt die vorbereitete Query aus (JOIN von person und essen Tabellen)
5. **JSON-Antwort:** Der Server sendet die Daten als JSON zurück
6. **Frontend-Verarbeitung:** JavaScript parst die JSON-Antwort (`response.json()`)
7. **DOM-Manipulation:** Die Daten werden in HTML-Elemente eingefügt und angezeigt

Die Kommunikation erfolgt asynchron über HTTP, typischerweise mit JSON als Datenformat.