# Schichtentrennung in einer Applikation (YYYY-MM-DD)

Lesson: `lesson.html` im selben Ordner — zeigt, wie eine Applikation in
View, Endpoint, Controller, Service und Repository/DB-Layer zerfällt, und
warum Abhängigkeiten nur nach innen zeigen dürfen.
- Einstieg: ein monolithischer Handler (DB + Fachregel + HTTP in einem)
- Demo: `Konto` durch die fünf Schichten — `KontoRepository` (Interface + In-Memory),
  `KontoService`, `KontoController`, Hono-Endpoints; Fehler-Thread `throw` → `FehlerArt` → HTTP-Status
- Demo: Atomarität — zwei Schreibvorgänge in einer Transaktion (Rollback)
- Demo: Verzeichnislayout (Composition Root, Technik- vs. Feature-Ordner, Anti-Tipps)
- Quiz: 7 Fragen (Aufgabe je Schicht, Dependency Rule, Domänenobjekt vs. DB-Zeile, View, Atomarität)
- Aufgabe: Abschnitt „Aufgabe" am Lesson-Ende

## Aufgabe
`hausaufgabe.md` — monolithischen Handler in die fünf Schichten zerlegen,
Repository hinter ein Interface, Service ohne Server/DB testen, Fehlerkette
(`throw` → Controller → HTTP-Status) und Transaktions-Rollback nachweisen.
Abgabe: Commit im eigenen Repo.

## Housekeeping
- Lehrplan: [`lehrplan/swp-hwii/LEHRPLAN.md`](../lehrplan/swp-hwii/LEHRPLAN.md) (KM6, Schichten ①②)
- KM-Bezug: KM6 — MVC / Schichtentrennung (typisch UE 6; Repository-Pattern UE 5)
- Runtime: Deno / TypeScript, Hono (`jsr:@hono/hono`), `Deno.test` + `jsr:@std/assert`
