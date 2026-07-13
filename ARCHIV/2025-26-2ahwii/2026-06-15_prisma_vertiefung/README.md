# 2. Einheit: Prisma Vertiefung & Agentic Refactoring
**Datum:** 15. Juni 2026

## 1. Intro: Agentic Coding live in Action (15 Min)
*Eine kurze Live-Demonstration vom Lehrer.*
Wir sehen uns an, wie ein KI-Agent – ausgestattet mit den Rechten aus unserem `pass` Setup von letzter Woche – autonom auf unsere Datenbank zugreift und Code-Architekturen umbauen kann.

---

## 2. Prisma vs. Raw SQL (20 Min)
Bisher haben wir unsere Datenbank (SQLite) im Backend so abgefragt:
```typescript
const rows = db.prepare(`SELECT id, essen FROM essen;`).all();
```
Das Problem? TypeScript weiß nicht, was `.all()` zurückgibt. Tippfehler bei Spaltennamen fallen erst auf, wenn das Programm abstürzt.

**Die Lösung: PrismaClient**
Mit Prisma sieht der gleiche Befehl so aus:
```typescript
const rows = await prisma.essen.findMany();
```
*Der Vorteil:* Sofortige Autocompletion (`rows[0].essen`). Wenn wir die Datenbankstruktur ändern, warnt uns TypeScript sofort, wenn unser Code nicht mehr passt.

---

## 3. Relationen in Prisma (20 Min)
Datenbanken sind erst mächtig, wenn Tabellen miteinander verknüpft sind.
Wir definieren eine Relation in unserer `schema.prisma`:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  essen Essen[] // Ein User kann mehrere Lieblingsessen haben
}

model Essen {
  id      Int    @id @default(autoincrement())
  gericht String
  userId  Int
  user    User   @relation(fields: [userId], references: [id])
}
```

Wenn wir nun Daten abfragen, können wir verbundene Daten einfach "inkludieren":
```typescript
const alleEssenMitUser = await prisma.essen.findMany({
  include: { user: true }
});
// Zugriff: alleEssenMitUser[0].user.name
```
*(Vergiss nicht `prisma db push` bzw. `prisma migrate dev` auszuführen!)*

---

## 4. Klassenübung: Refactoring (45 Min)
Wir misten unser altes Projekt aus!

**Aufgabe:**
1. Öffne das Projekt aus dem Ordner `2026-06-01_backend`.
2. Initialisiere Prisma für SQLite: `deno run -A npm:prisma init --datasource-provider sqlite`
3. Baue die Tabelle `essen` in deiner `schema.prisma` nach und generiere den Client (`prisma db pull` & `prisma generate`).
4. Ersetze in deiner `main.ts` **alle** `db.prepare(...)` Aufrufe durch Methoden des `PrismaClient` (`findMany`, `findUnique`, `create`).

*(Wenn ihr feststeckt, überlegt wie man den KI-Agenten bitten könnte, diese Routinearbeit zu übernehmen!)*

---

## 📝 Hausübung
1. Erweitere dein Prisma Schema um eine weitere Tabelle (z.B. eine `Kategorie` für das Essen: "Süß", "Scharf", etc.).
2. Baue eine Relation zwischen `Essen` und `Kategorie` auf.
3. Führe die Migration durch (`prisma db push`).
4. Passe die `GET /essen` Route in Hono so an, dass sie über das `include` Statement auch die Kategorie für das Frontend mit ausliefert.