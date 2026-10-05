# Kapselung & Invarianten (YYYY-MM-DD)

Lesson: `lesson.html` im selben Ordner — macht die Klasse zur Herrin ihres
Zustands: Sichtbarkeiten, kontrollierte Türen und Fail-Fast.
- Einstieg: öffentliches Feld → jeder kann die Invariante brechen
- Demo: `Sparkonto`/`Konto` mit geprüften Methoden, getter statt setter
- Quiz: 4 Fragen (setter, `private` vs. `#feld`, Prüf-Ort, Fail-Fast)
- Aufgabe: Abschnitt „Aufgabe" am Lesson-Ende

## Aufgabe
`hausaufgabe.md` — zwei Invarianten formulieren, mit Fail-Fast im Konstruktor
und in jeder mutierenden Methode sichern, je einen Verletzungs-Test schreiben.
Abgabe: Commit im eigenen Repo.

## Housekeeping
- Lehrplan: [`lehrplan/swp-hwii/LEHRPLAN.md`](../lehrplan/swp-hwii/LEHRPLAN.md) (KM5, Schichten ①②)
- KM-Bezug: KM5 — Attribut und Sichtbarkeit, Zustand (typisch UE 2)
- Runtime: Deno / TypeScript, `Deno.test` + `jsr:@std/assert`
