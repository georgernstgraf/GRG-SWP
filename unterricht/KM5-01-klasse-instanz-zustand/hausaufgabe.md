# Aufgabe KM5-01 — Klasse, Instanz, Zustand

Name: _____________   Abgabe: _____________

**Lektüre:** [MDN: JavaScript Classes](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)
(Abschnitte `constructor`, Instanzfelder).

> **Setup:** eigenes Deno-Projekt (`deno.json` mit `@std/assert`), Datei
> `konto.ts` + `konto_test.ts`.

---

## 1. Vorhersagen (erst hinschreiben, dann prüfen)

**a)** `const c = a;` — wie viele Konto-Objekte gibt es, wie viele Variablen?
Gilt `c === a`?

**b)** Nach `a.einzahlen(100)`: Was liefert `c.kontostand` — 500 oder 600?
Warum?

---

## 2. Umsetzung

1. Schreibe `class Konto` mit `readonly iban`, privatem `kontostand`,
   `einzahlen()` und `equals(other: Konto): boolean`.
2. `equals()` vergleicht die **IBAN** (Identität), nicht den Kontostand.

## 3. Tests (rot → grün)

- zwei Konten mit gleicher IBAN, verschiedenem Stand → `equals()` ist `true`
- zwei Konten mit verschiedener IBAN, gleichem Stand → `equals()` ist `false`
- `a === b` für zwei `new Konto(…)` ist `false` (Identität ≠ Zustand)

`deno test` muss am Ende grün sein; die Tests dürfen anfangs rot sein.
