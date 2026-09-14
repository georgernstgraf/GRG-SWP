# 3AHWII – UE 1: OO-Repetition & Klasse/Instanz/Zustand (15.09.2026)

## HÜ (bis nächste UE)

Starter ist rot — dein Job ist grün:

1. `tier.ts`: Methode `equals(other: Tier)` — vergleicht **Zustand** (Name +
   Gewicht), nicht Identität.
2. `fuettern(kg: number)` — erhöht das Gewicht. Ein negatives `kg` fliegt noch
   **nicht** raus (das ist Thema in UE 2 — denk aber schon mal darüber nach).
3. Alle Tests in `tier_test.ts` grün: `deno test`.
4. **Git-Disziplin:** kleine Commits, sprechende Messages
   (`equals für Tier implementiert`, nicht `asdf`).

Hausübungen stehen immer oben im README.

## Ablauf der UE (50')

1. **Wiederholung Bruch (10')** — Klasse vs. Instanz vs. Zustand am bekannten
   Beispiel; Aufwärmen ist vorbei.
2. **Neue Unterrichts-Domäne: Konto (15')** — IBAN als _Identität_, `kontostand`
   als _Zustand_; warum der Bruch zu dünn war (keine echte Hierarchie, keine
   Invarianten mit Substanz). Live-Coding: `konto.ts`.
3. **Arbeitsphase (15')** — `konto_test.ts` gemeinsam grün machen; danach
   eigener Blick auf `tier.ts`.
4. **HÜ besprechen (10')** — grün/rot, Tests sind die HÜ; Lesson 1 als
   Nachschlage-Quelle.

## Setup

```sh
deno run main.ts    # Demo
deno test           # grün/rot
```

## Material

- Lesson 1:
  [`teach/lessons/0001-klasse-instanz-zustand.html`](../teach/lessons/0001-klasse-instanz-zustand.html)
- Glossar:
  [`teach/reference/glossar-oo.html`](../teach/reference/glossar-oo.html)

## Wenn du mehr wissen willst (optional)

- [MDN: JavaScript Classes](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)
- [beginners-typescript-tutorial](https://github.com/mattpocock/beginners-typescript-tutorial)
  – Übungen im rot→grün-Format
