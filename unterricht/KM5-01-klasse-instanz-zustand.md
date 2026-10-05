# Klasse, Instanz, Zustand (YYYY-MM-DD)

Lesson: `lesson.html` im selben Ordner — schärft die Begriffe Klasse vs.
Instanz vs. Zustand vs. Identität am Beispiel `Konto` und stellt `equals()`
gegen `===`.
- Einstieg: zwei Konten mit gleichem Stand — dasselbe?
- Demo: Zustand pro Instanz (`einzahlen()`), Identität über IBAN
- Quiz: 2 Fragen (Identität vs. Zustand; was eine Methode ändert)
- Aufgabe: Abschnitt „Aufgabe" am Lesson-Ende

## Aufgabe
`hausaufgabe.md` — `equals()` identitätsbasiert implementieren (gleiche IBAN =
gleich) und mit rot→grün-Tests absichern.
Abgabe: Commit im eigenen Repo.

## Housekeeping
- Lehrplan: [`lehrplan/swp-hwii/LEHRPLAN.md`](../lehrplan/swp-hwii/LEHRPLAN.md) (KM5, Schichten ①②)
- KM-Bezug: KM5 — Klasse, Instanz, Zustand, Attribut (typisch UE 1)
- Runtime: Deno / TypeScript, `Deno.test` + `jsr:@std/assert`
