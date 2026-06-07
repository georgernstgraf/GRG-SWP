# 3. Einheit: Full-Stack Type Safety mit tRPC (ft. Matt Pocock)
**Datum:** 22. Juni 2026

## 1. Das REST-Dilemma & Der Deno Live-Bundler (15 Min)

**Das Problem mit REST APIs:**
Wenn wir mit `fetch('/essen')` JSON vom Backend laden, müssen wir im Frontend manuell raten (oder mühsam Interfaces schreiben), welche Struktur die Daten haben. Ändert das Backend den Namen einer Spalte, bricht das Frontend leise, ohne dass der Compiler warnt. Das nennt man **"Double-Typing"**.

**Unser Geheimtipp für heute:**
Erinnerst du dich an unsere Hono-Route aus dem letzten Projekt?
```typescript
app.get("/:path{.+\\.ts$}", async (c) => { /* Deno.bundle magic */ })
```
Dieser *Live-Bundler* erlaubt es uns, echtes TypeScript direkt in den Ordner `src/` zu schreiben und vom Browser als JavaScript laden zu lassen – ohne mühsames Vite oder Webpack Setup! Wir haben also ein TypeScript-Backend und ein TypeScript-Frontend im selben Ordner. Perfekte Voraussetzungen für tRPC!

---

## 2. tRPC: Das Ende der API-Rate-Spiele (15 Min)
**tRPC** steht für *TypeScript Remote Procedure Call*.
Anstatt URLs und HTTP-Methoden zu erraten, rufen wir Funktionen auf. Wenn das Backend sagt, eine Route gibt ein Array aus `Essen` zurück, weiß das Frontend das automatisch.

*(📺 Zur Vorbereitung: [Learn tRPC in 5 minutes von Matt Pocock](https://youtu.be/S6rcrkbsDI0))*

**Input-Validierung mit Zod (Matt Pocock Style):**
Traue niemals dem Frontend! Mit der Library `Zod` definieren wir im Backend genau, wie Daten aussehen müssen, die reinkommen.
```typescript
z.object({ gericht: z.string().min(3) })
```

---

## 3. Klassenübung: tRPC Setup & Video-Aufzeichnung (70 Min)
*Wir zeichnen heute unsere Session mit den Insights von Matt Pocock auf!*

**Schritt-für-Schritt Aufbau:**
1. **Zod & tRPC installieren:** Wir fügen die nötigen npm-Packages zu unserem Deno-Projekt hinzu.
2. **Den tRPC Router bauen:** Wir erstellen im Backend einen Router und definieren eine `query` (um Daten über Prisma zu holen).
3. **Den Hono-Adapter einklinken:** Wir binden den tRPC-Router an einen Hono-Endpoint (z.B. `/trpc`).
4. **Den tRPC Client im Frontend nutzen:** In unserer `src/script.ts` (die dank Live-Bundler direkt im Browser läuft) importieren wir nur den **Typ** unseres Routers und richten den tRPC-Client ein.
5. **Magie erleben:** Tippe im Frontend `client.`, und lass dir von der Autocompletion exakt zeigen, welche Routen dein Backend anbietet!

---

## 📝 Hausübung
1. Erstelle in deinem neuen tRPC Router eine `mutation` (vergleichbar mit einem POST/DELETE Request in REST), um ein Essen aus der Datenbank zu löschen.
2. Sorge dafür, dass diese Mutation über `z.object({ id: z.number() })` strikt validiert, dass auch wirklich eine gültige ID übergeben wird.
3. Baue einen Button in dein Frontend (`static/index.html` & `src/script.ts`), der diese Mutation beim Klicken typsicher aufruft.