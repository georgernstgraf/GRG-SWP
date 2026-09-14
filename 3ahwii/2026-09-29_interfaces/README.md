# 3AHWII – UE 3: Schnittstellen als Vertrag (29.09.2026)

## HÜ (bis nächste UE)

Starter ist rot — dein Job ist grün:

1. `produkt.ts`: `Produkt implements Comparable<Produkt>, Versendbar`:
   - `compareTo(other)`: vergleicht nach `preisCent` (&lt;0 / 0 / &gt;0).
   - `versandkosten()`: `400` Cent Grundgebühr + `200` Cent je kg (`gewichtKg`).
2. Structural typing schriftlich ausgedruckt: Warum kompiliert
   `akzeptiereVersendbar({ versandkosten: () => 0 })` ohne `implements` und ohne
   `class`? (Antwort als Kommentar über `akzeptiereVersendbar`.)
3. Alle Tests in `produkt_test.ts` grün: `deno test`.
4. **Git-Disziplin:** ein Commit pro Vertrag (`compareTo`, `versandkosten`),
   nicht alles in einem.

Hausübungen stehen immer oben im README.

## Ablauf der UE (50')

1. **Drehung (10')** — Klassen sagen „ich bin ein Sparkonto"; Interfaces sagen
   „egal was du bist — wenn du `compareTo` kannst, bin ich im Geschäft". „Was,
   nicht wie."
2. **Live-Coding (15')** — `interface Comparable<Konto>` + `Verzinsbar` am
   Unterrichts-`konto.ts`; mehrere Interfaces einer Klasse.
3. **Arbeitsphase (15')** — `konto_test.ts` grün; structural typing am
   Objekt-Literal ausprobieren.
4. **HÜ besprechen (10')** — Produkt: zwei Verträge, eine Klasse; warum
   Interfaces und nicht Vererbung.

## Setup

```sh
deno test           # grün/rot
```

## Material

- Lesson 3:
  [`teach/lessons/0003-interfaces-vertraege.html`](../teach/lessons/0003-interfaces-vertraege.html)
- Domänen-Steckbriefe (was aus Tier/Fahrzeug/Produkt/Person noch wird):
  [`teach/reference/domaenen-steckbriefe.html`](../teach/reference/domaenen-steckbriefe.html)
- Glossar + Syntax-Cheatsheet wie in UE 1/2.

## Wenn du mehr wissen willst (optional)

- [TypeScript Handbook: Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
- [TypeScript Handbook: Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
  – structural typing im Detail
