# Lösungen - Wissensüberprüfung - Woche 3

**Klasse:** 2ahwii  
**Datum:** 2026-02-22

---

## Lösungen zu Multiple Choice Fragen

**1. Welches Framework wurde in den letzten Wochen verwendet, um einen Webserver mit Deno zu erstellen?**

- [ ] Express.js
- [ ] Fastify
- [x] Hono
- [ ] Koa

**2. Wofür wird der Middleware `serveStatic` in Hono verwendet?**

- [x] Um statische Dateien wie HTML, CSS und JS aus einem Ordner auszuliefern
- [ ] Um dynamische Routen zu definieren
- [ ] Um Datenbankverbindungen zu verwalten
- [ ] Um Benutzerauthentifizierung zu implementieren

**3. Welcher Befehl startet den Hono-Server in Deno?**

- [ ] `deno start main.ts`
- [x] `deno run -A main.ts`
- [ ] `deno serve main.ts`
- [ ] `deno dev main.ts`

**4. Welche Methode wird verwendet, um auf dem Canvas-Element zu zeichnen?**

- [x] `canvas.getContext("2d")`
- [ ] `canvas.getRenderer()`
- [ ] `canvas.createContext()`
- [ ] `canvas.getDrawingContext()`

**5. Was bewirkt der Befehl `Deno.serve(app.fetch)`?**

- [x] Er startet einen HTTP-Server, der Requests an die Hono-App weiterleitet
- [ ] Er liest Dateien aus dem Dateisystem
- [ ] Er erstellt eine Datenbankverbindung
- [ ] Er kompiliert TypeScript zu JavaScript

**6. Welche CSS-Eigenschaft wird verwendet, um Elemente horizontal und vertikal zu zentrieren?**

- [ ] `display: flex` und `justify-content: center`
- [x] `display: grid` und `place-items: center`
- [ ] `display: block` und `text-align: center`
- [ ] `position: absolute` und `top: 50%`

**7. Wie fügt man mit JavaScript einem Canvas-Element einen neuen Pfad hinzu?**

- [ ] `ctx.addPath()`
- [x] `ctx.beginPath()`
- [ ] `ctx.createPath()`
- [ ] `ctx.newPath()`

**8. Welche Methode wird verwendet, um einen quadratischen Bogen (Kurve) auf einem Canvas zu zeichnen?**

- [ ] `ctx.bezierCurveTo()`
- [ ] `ctx.arc()`
- [x] `ctx.quadraticCurveTo()`
- [ ] `ctx.curveTo()`

**9. Was bedeutet das Attribut `defer` im script-Tag?**

- [x] Das Skript wird erst ausgeführt, nachdem das HTML vollständig geladen ist
- [ ] Das Skript wird nicht geladen
- [ ] Das Skript wird im Hintergrund asynchron ausgeführt
- [ ] Das Skript wird sofort ausgeführt

**10. Welche Methode des Canvas-Contexts löscht den gesamten Canvas-Inhalt?**

- [ ] `ctx.clean()`
- [ ] `ctx.reset()`
- [ ] `ctx.clear()`
- [x] `ctx.clearRect()`

---

## Lösungen zu Freitext-Fragen

**11. Beschreiben Sie kurz den Aufbau einer Hono-Anwendung und wie statische Dateien ausgeliefert werden.**

Eine Hono-Anwendung beginnt mit dem Import des Hono-Frameworks: `import { Hono } from "hono"`. Danach wird eine neue Instanz erstellt: `const app = new Hono()`. Um statische Dateien auszuliefern, wird der Middleware `serveStatic` aus `hono/deno` importiert und mit `app.use("/*", serveStatic({ root: "./static" }))` für alle Routen aktiviert. Schließlich wird der Server mit `Deno.serve(app.fetch)` gestartet, der Requests an die Hono-App weiterleitet.

**12. Erklären Sie, wie man mit dem Canvas-API einen Graphen zeichnet, der mathematische Funktionen visualisiert. Welche Schritte sind dabei notwendig?**

Zuerst wird der 2D-Context des Canvas-Elements abgerufen: `const ctx = canvas.getContext("2d")`. Dann wird der Canvas mit `ctx.clearRect()` geleert. Die Werte der Funktionen werden in einem Bereich berechnet und auf Canvas-Koordinaten umgerechnet (xRange, yRange). Das Koordinatensystem wird mit Gitterlinien und Achsen gezeichnet. Für jede Funktion werden Punkte berechnet, mit `ctx.lineTo()` verbunden und mit `ctx.stroke()` gezeichnet. Optional werden glatte Kurven mit `ctx.quadraticCurveTo()` erstellt.

**13. Was ist der Unterschied zwischen REST GET und REST POST? Wofür werden sie typischerweise verwendet?**

GET wird verwendet, um Daten vom Server abzurufen. Die Parameter werden in der URL übertragen und sind in der Browserleiste sichtbar. GET-Anfragen sollten keine Seiteneffekte haben (idempotent). POST wird verwendet, um Daten an den Server zu senden (z.B. Formulareingaben). Die Daten werden im Request-Body übertragen, sind nicht sichtbar und können Seiteneffekte haben (z.B. Datenbankänderungen). POST wird oft für das Erstellen neuer Ressourcen verwendet.
