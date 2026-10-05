# Interfaces als Vertrag (YYYY-MM-DD)

Lesson: `lesson.html` im selben Ordner — etabliert `interface` als Vertrag über
„was, nicht wie": mehrere Verträge pro Klasse, structural typing, Verträge als
Funktionsparametertypen.
- Einstieg: „größtes Element" finden, ohne die Klassen zu kennen
- Demo: `Comparable<T>`, `Verzinsbar`, `implements` mehrfach
- Quiz: 4 Fragen (Fähigkeit vs. Abstammung, optional, structural typing, `extends` im Typ-Parameter)
- Aufgabe: Abschnitt „Aufgabe" am Lesson-Ende

## Aufgabe
`hausaufgabe.md` — eigenen Vertrag entwerfen (Methode + `readonly`-Eigenschaft),
zwei Klassen setzen ihn unterschiedlich um, eine Funktion kennt nur den Typ.
Abgabe: Commit im eigenen Repo.

## Housekeeping
- Lehrplan: [`lehrplan/swp-hwii/LEHRPLAN.md`](../lehrplan/swp-hwii/LEHRPLAN.md) (KM5, Schichten ①②)
- KM-Bezug: KM5 — Schnittstelle (interface) als Vertrag (typisch UE 3)
- Runtime: Deno / TypeScript, `Deno.test` + `jsr:@std/assert`
