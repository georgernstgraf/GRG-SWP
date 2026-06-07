# 12. HTMX und HATEOAS

## Die Geschichte des Frontends
Früher (frühe 2000er) generierten Webserver (wie PHP, Java, oder heute Hono) komplettes HTML und schickten es an den Browser. Wenn man auf einen Link klickte, wurde die komplette Seite neu geladen. Das war sicher und einfach zu bauen, fühlte sich für den User aber oft langsam an ("White Screen of Death" beim Laden).

Als Reaktion darauf entstanden **Single Page Applications (SPAs)** mit Frameworks wie React, Angular oder Vue. Hier schickt der Server beim ersten Laden nur eine leere HTML-Hülle und viel JavaScript. Danach kommuniziert das JavaScript (via `fetch()` oder tRPC) mit dem Backend, holt reine Daten (JSON) und baut das HTML im Browser selbst zusammen. Das fühlt sich extrem schnell an, bringt aber immense Komplexität, riesige JavaScript-Bundles und "Double-Typing"-Probleme mit sich.

---

## Was ist HATEOAS?
**HATEOAS** steht für *Hypermedia as the Engine of Application State*.
Das ist ein komplizierter Begriff für eine sehr einfache, radikale Idee:
Warum schickt das Backend nicht einfach direkt das *fertige Stück HTML*, das sich ändern soll, anstatt nackter JSON-Daten?

Wenn ich einen Button klicke, um ein Essen zu löschen, muss das Frontend nicht erst JSON (`{ success: true }`) verarbeiten und dann manuell das DOM aktualisieren (`li.remove()`). Das Backend könnte einfach antworten: "Hier ist die aktualisierte Liste der Essen als fertiges HTML, tausch sie einfach aus!"

---

## Die Kern-Attribute von HTMX
**HTMX** ist eine winzige Bibliothek, die genau das ermöglicht. Anstatt JavaScript zu schreiben, geben wir HTML-Elementen die Fähigkeit, selbstständig Netzwerk-Requests zu machen.

Alles dreht sich um spezielle Attribute:

### 1. Auslöser (`hx-get`, `hx-post`, etc.)
Sagt dem Element, welche URL es aufrufen soll und mit welcher HTTP-Methode.
```html
<!-- Ein Button, der einen POST-Request sendet, wenn er geklickt wird -->
<button hx-post="/api/essen/kaufen">Kaufen</button>
```

### 2. Das Ziel (`hx-target`)
Das Backend antwortet mit HTML. Wo soll HTMX dieses HTML einfügen?
Wenn kein Target angegeben ist, wird das Element selbst ersetzt.
```html
<!-- Holt die Wetterdaten und fügt sie in das Div mit der ID "wetter" ein -->
<button hx-get="/wetter" hx-target="#wetter">Wetter laden</button>
<div id="wetter">Hier erscheint das Wetter...</div>
```

### 3. Die Art des Einfügens (`hx-swap`)
Wie soll das neue HTML in das Ziel eingefügt werden?
*   `innerHTML` (Standard): Setzt den *Inhalt* des Ziels auf das neue HTML.
*   `outerHTML`: Ersetzt das *gesamte Ziel-Element* durch das neue HTML.
*   `beforeend`: Fügt das neue HTML am *Ende* (innerhalb) des Ziels an (z.B. für "Mehr laden..." Buttons).

---

## Templating: Client vs. Server
Da HTMX HTML erwartet, unser Backend aber manchmal (z.B. bei tRPC oder aus historischen Gründen) JSON liefert, gibt es zwei Lösungsansätze:

### Ansatz 1: Client-Side Templates (JSON API + Handlebars)
Wenn du eine reine JSON-API behalten willst (wie in unserem Projekt `ldapauth2rest`), kannst du HTMX beibringen, das JSON auf dem Client in HTML zu übersetzen.
Dafür nutzen wir die HTMX-Extension `client-side-templates` und eine Template-Sprache wie **Handlebars**.

1. Das Backend sendet JSON: `{"essen": [{"name": "Pizza"}]}`
2. HTMX fängt das JSON ab.
3. Ein `<template>` im HTML-Dokument definiert das Aussehen:
```html
<template id="mein-template">
  <ul>
    {{#each essen}}
      <li>{{name}}</li>
    {{/each}}
  </ul>
</template>
```
4. HTMX mischt das JSON mit dem Template und fügt das fertige HTML in die Seite ein.

### Ansatz 2: Server-Side Rendering (SSR mit Hono JSX)
Der klassischere (und oft bessere) HTMX-Ansatz ist das **Server-Side Rendering**.
Hier nutzt du die volle Typsicherheit deines Backends (z.B. mit JSX in Hono), um HTML-Fragmente direkt am Server zu bauen.

Das Backend (z.B. Hono) antwortet nicht mit `c.json()`, sondern mit `c.html()`:
```tsx
// Im Hono Backend:
app.get('/api/essen', async (c) => {
  const essenListe = await prisma.essen.findMany();
  
  // Wir geben direkt JSX (HTML) zurück!
  return c.html(
    <ul>
      {essenListe.map(e => <li>{e.gericht}</li>)}
    </ul>
  );
})
```
Das Frontend ist dadurch extrem dumm und leichtgewichtig. Es braucht nur noch:
```html
<div hx-get="/api/essen" hx-trigger="load">Wird geladen...</div>
```
Das ist extrem schnell, benötigt fast kein JavaScript im Client und bietet 100% Typsicherheit vom Datenbankaufruf bis zum fertig gerenderten HTML.