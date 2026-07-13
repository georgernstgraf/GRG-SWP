# 4. Einheit: HTMX, Handlebars & Semesterausklang
**Datum:** 29. Juni 2026

## 1. HTMX & HATEOAS (20 Min)
Wir haben in diesem Jahr viel mit Vanilla JS `fetch()` gearbeitet, um JSON vom Backend zu holen und dann mühsam das DOM (die HTML-Struktur) per Hand zu manipulieren (`document.createElement()`, `.innerHTML`, etc.).

**HTMX dreht das Konzept um:**
Was wäre, wenn HTML-Elemente selbst Netzwerkanfragen machen könnten und direkt mit dem HTML antworten würden, das sie anzeigen sollen?
Das nennt sich **HATEOAS** (Hypermedia as the Engine of Application State).

Anstatt viel JavaScript zu schreiben, fügen wir einfach Attribute zu HTML hinzu:
```html
<button hx-post="/essen/löschen/1" hx-target="#essens-liste" hx-swap="outerHTML">
  Löschen
</button>
```

---

## 2. Zwei Ansätze für Modernes Frontend (30 Min)
Wie generieren wir das HTML, das HTMX in die Seite einfügt? Wir sehen uns zwei Architektur-Ansätze an:

### Ansatz 1: Client-Side Templates (JSON + Handlebars)
Ideal, wenn das Backend weiterhin als reine JSON-API (wie bei REST oder tRPC) bestehen soll.
*Beispiel aus dem Projekt `ldapauth2rest`:*
HTMX holt das JSON. Die Extension `client-side-templates` nimmt dieses JSON und füttert damit ein `<template>` im Browser, das mit **Handlebars** (`{{variable}}`) geschrieben ist.
```html
<template id="essen-template">
  {{#each essen}}
    <tr><td>{{id}}</td><td>{{gericht}}</td></tr>
  {{/each}}
</template>
```

### Ansatz 2: Server-Side Rendering (SSR mit Hono JSX)
Ideal, wenn wir die volle Typsicherheit von TypeScript und Prisma nutzen wollen, um HTML zu bauen.
Das Hono-Backend (z.B. mit JSX, dem HTML-Dialekt von React) baut das fertige HTML direkt auf dem Server zusammen und schickt nur die fertigen `<tr>` oder `<li>` Tags an den Browser.
*Vorteil:* Der Browser muss nichts mehr rendern, er fügt nur noch ein.

---

## 3. Klassenübung: Frontend-Umbau (40 Min)
Mach deine "Lieblingsessen"-App HTMX-kompatibel!

**Aufgabe:**
1. Binde die `htmx.org` Bibliothek in deine `index.html` ein.
2. Entferne den alten `fetch()` Code aus deinem Frontend-JavaScript.
3. **Wähle einen Ansatz:**
   * *Entweder:* Nutze Handlebars (`hx-ext="client-side-templates"`), um die JSON-Antwort deines Backends direkt im HTML-File zu rendern.
   * *Oder:* Schreibe eine neue Route in Hono (z.B. `app.get('/html/essen', ...)`), die mit JSX oder Template-Strings direkt HTML-Snippets zurückgibt, und nutze einfaches `hx-get` in deinem Frontend.

---

## 4. Semesterabschluss (10 Min)
* "Show & Tell" der fertigen, HTMX-optimierten Apps.
* Klären letzter Fragen zum Stoff.

## 📝 Hausübung
Keine Hausübung. Wir wünschen schöne, erholsame Sommerferien! ☀️🌴