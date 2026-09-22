# 3AHWII – UE 2: Kapselung & Sichtbarkeit (22.09.2026)

## lambda function syntax Möglichkeiten

```typescript
> a.filter( _ => _%2===1)
[ 1, 3, 5, 7, 9 ]
> a.filter( wert => wert%2===1)
[ 1, 3, 5, 7, 9 ]
> a.filter( (wert) => wert%2===1)
[ 1, 3, 5, 7, 9 ]
> a.filter( (wert) => {wert%2===1})
[]
> a.filter( (wert) => {wert%2===1; return})
[]
> a.filter( (wert) => {return wert%2===1;})
[ 1, 3, 5, 7, 9 ]
```

## HÜ (bis nächste UE)

Starter ist rot — dein Job ist grün:

1. `fahrzeug.ts`: Invarianten **fail-fast** sichern:
   - `new Fahrzeug(…, kmStand < 0)` wirft eine Exception mit sinnvoller Meldung.
   - `setGeschwindigkeit(v)` wirft, wenn `v > maxGeschwindigkeit` oder `v < 0`.
   - `kmStand` ist `readonly`-artig geschützt: von außen gibt es keinen
     Schreibzugriff (nur `fahre()` erhöht ihn).
2. `fahre(stunden)` erhöht `kmStand` um `geschwindigkeit * stunden`.
3. Alle Tests in `fahrzeug_test.ts` grün: `deno test`.
4. **Git-Disziplin:** pro Regel mindestens ein eigener Commit — nicht alles in
   einem.

Hausübungen stehen immer oben im README.

## Ablauf der UE (50')

1. **Problem am Konto (10')** — `k.kontostand = -1000000`: warum kompiliert das
   und warum ist es Datenmüll?
2. **Drei Schichten Kapselung (15')** — `private`/`readonly` → getter/setter →
   Fail-Fast im Konstruktor; Live-Coding am `konto.ts` dieser UE.
3. **Arbeitsphase (15')** — `konto_test.ts` grün; Review-Frage: Fail-Fast vs.
   Happy Path.
4. **HÜ besprechen (10')** — Fahrzeug: welche Invarianten, wo gesichert, welche
   Tests beweisen sie.

## Setup

```sh
deno test           # grün/rot
```

## Material

- Lesson 2:
  [`teach/lessons/0002-kapselung-invarianten.html`](../teach/lessons/0002-kapselung-invarianten.html)
- Invarianten-Checkliste:
  [`teach/reference/invarianten-checkliste.html`](../teach/reference/invarianten-checkliste.html)
- Syntax-Cheatsheet:
  [`teach/reference/ts-oop-cheatsheet.html`](../teach/reference/ts-oop-cheatsheet.html)

## Wenn du mehr wissen willst (optional)

- [TypeScript Handbook: Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
  – `private`, `readonly`, Accessors
- Unterschied TS-`private` (Kompilierzeit) vs. JS-`#feld` (echte Kapselung) —
  PLF-Wissen.
