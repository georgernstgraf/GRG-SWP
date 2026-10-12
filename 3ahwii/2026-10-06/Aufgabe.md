# Aufgabe 2026-10-06 — OOP in TypeScript: `equals` & Verträge

## 1. Folie Interfaces studieren

Lies dir die Interfaces-Folie aus [KM5-03 — Interfaces als Verträge](../../unterricht/KM5-03-interfaces-vertraege/lesson.html) durch und beantworte dir dabei:

- Was passiert, wenn eine Klasse `implements Verzinsbar` schreibt, aber `jahresZins()` vergisst?
- Warum akzeptiert TypeScript auch ein Objekt **ohne** `implements`, wenn es die passende Form hat (structural typing)?

## 2. KM5 Hausübung 1 — Klasse, Instanz, Zustand

[hausaufgabe.md KM5-01](../../unterricht/KM5-01-klasse-instanz-zustand/hausaufgabe.md):
`class Konto` mit `readonly iban`, privatem `kontostand`, `einzahlen()` und
`equals()` (Vergleich über die IBAN — Identität, nicht Kontostand). Vorhersagen
zu `c === a` und Referenzsemantik zuerst schriftlich, dann prüfen.
`deno test` muss am Ende grün sein.

## 3. KM5 Hausübung 2 — Kapselung & Invarianten

[hausaufgabe.md KM5-02](../../unterricht/KM5-02-kapselung-invarianten/hausaufgabe.md):
Klasse mit mindestens einem veränderlichen Feld, **zwei** Invarianten,
gesichert per `throw` im Konstruktor und in jeder mutierenden Methode.
Je Invariante ein Test, der die Verletzung beweist.

## 4. KM5 Hausübung 3 — Interfaces als Vertrag

[hausaufgabe.md KM5-03](../../unterricht/KM5-03-interfaces-vertraege/hausaufgabe.md):
Eigener Vertrag (z. B. `Versendbar` mit Methode + `readonly`-Eigenschaft),
zwei Klassen setzen ihn unterschiedlich um, eine Funktion kennt nur den
Vertragstyp.

**Abgabe:** Commit im eigenen Repo.
