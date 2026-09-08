# 3AHWII – OOP in TypeScript: Die Bruch-Klasse

Erste UE, SJ 2026/27. Wir denken die Brüche aus der 2. Klasse neu – diesmal objektorientiert.

## HÜ (bis nächste UE)

1. GitHub-Repo erstellen (falls nötig) und URL an grafg@ schicken.
2. Bruch-Klasse erweitern, bis `deno test` komplett grün ist:
   - Brüche immer gekürzt speichern (`ggt`, Euklid)
   - `toString()` liefert gemischte Form: `"3 7/11"`, aber auch `"3/4"` und `"5"`
   - `new Bruch(1, 0)` wirft eine Exception mit sinnvoller Meldung

Hausübungen stehen immer oben im README.

## Ablauf der UE (50')

1. **Orga (10')** – Beurteilung: Test, Hausübungen, Schulübungen/Stundenwiederholung, Projekt (je 1/4, 3 Bereiche müssen positiv sein). Toilettengang: ohne Worte, Blickkontakt.
2. **Vom Objekt-Literal zur Klasse (15')** – `{ zähler: 6, nenner: 4 }` ist nur Daten: nichts hindert `nenner = 0`, nichts hält die Invariante „immer gekürzt". Eine `class` bündelt **Zustand + Verhalten** und schützt die Invariante im Konstruktor (`private`!).
3. **Live-Coding (15')** – `class Bruch` mit Konstruktor, `addiere()`, `toString()`. Ergebnis sofort mit `deno test` prüfen.
4. **HÜ besprechen (10')** – grün/rot: die Tests unten in `bruch_test.ts` sind die HÜ.

## Setup

```sh
deno run main.ts    # Demo
deno test           # grün/rot
```

## Wenn du mehr wissen willst (optional)

- [beginners-typescript-tutorial](https://github.com/mattpocock/beginners-typescript-tutorial) – TypeScript-Übungen im selben Format: Test schreiben, rot → grün
- [Total TypeScript Free Tutorials](https://www.totaltypescript.com/tutorials) – kostenlose Mini-Kurse mit Editor im Browser
