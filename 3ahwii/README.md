# 3AHWII – SWP (SJ 2026/27)

Klassenordner der **3AHWII** für das Fach **SWP** (HTL Spengergasse,
WII–Betriebsinformatik), Schuljahr 2026/27.

**Stack:** Unterrichtsbeispiele in **Deno + TypeScript** (siehe
[`../docs/ai/CONVENTIONS.md`](../docs/ai/CONVENTIONS.md)). **Node/npm** kommt
ausschließlich als **Host für opencode** zum Einsatz (Agentic Coding) – nicht als
Übungssprache.

> **Konkrete Klassenfassung.** Das generische Gerüst (klassen- und jahrgangsübergreifend)
> liegt unter [`../unterricht/HWII-SWP/`](../unterricht/HWII-SWP/). Klassenspezifische
> Abweichungen werden **hier** gepflegt – das Gerüst bleibt unangetastet.

## Semesterplan

- **Wintersemester 2026/27:** [`semesterplan-ws.md`](semesterplan-ws.md) –
  Klassenfassung, konkretisiert aus
  [`../unterricht/HWII-SWP/jg3-semesterplan-ws.md`](../unterricht/HWII-SWP/jg3-semesterplan-ws.md).

## Unterrichtseinheiten

| Datum | UE | Thema |
|-------|----|-------|
| 2026-09-08 | 1 | [OOP in TypeScript – Die Bruch-Klasse](2026-09-08_intro/) |
| 2026-09-15 | S | [Agentic Coding – Einstieg (Sondereinheit, beide Gruppen)](2026-09-15_agentic-coding-einstieg/) |

## Log SJ 2026/27

### 2026-09-15 – Sondereinheit: Agentic Coding (Einstieg)

Auftakt des Semesters, beide Gruppen gemeinsam. Einstieg ins agentic coding mit
opencode: Workflow Node-Setup (winget) + `opencode` + erster Agent-Loop.
Details und HÜ: [`2026-09-15_agentic-coding-einstieg/README.md`](2026-09-15_agentic-coding-einstieg/README.md).

HÜ: Node + opencode installiert (Nachweis `opencode --version`), freien Provider
verbunden, im eigenen Repo `/init` → `AGENTS.md` committen.

### 2026-09-08 – Erste UE: OOP in TypeScript

OOP heuer in TypeScript/Deno (nicht mehr C#). Einstieg: Bruch-Klasse
([`2026-09-08_intro/`](2026-09-08_intro/)), Domäne bekannt aus der 2. Klasse.

HÜ:

- GH Repo erstellen wenn nötig, URL an grafg@ schicken.
- Bruch-Klasse: immer kürzen (`ggt`), `toString` in gemischter Form
  (`"3 7/11"`, `"3/4"`, `"5"`), `throw` bei Nenner 0. `deno test` muss grün sein.

### Lehrer-Quellen für kommende OOP-UEs (Vererbung, Polymorphismus, Collections)

- Total TypeScript, Workshop **Pro Essentials** – Kapitel „OOP with classes"
  (bezahlt; als Inspirationsquelle für Übungen, nicht Schüler-Pflichtmaterial)
- Buch: *Total TypeScript* (Pocock/Bell, No Starch Press, 2026) – Nachschlagewerk
- Gratis für Schüler: <https://github.com/mattpocock/beginners-typescript-tutorial>,
  <https://www.totaltypescript.com/tutorials>
- Agentic Coding: <https://github.com/ai-hero-dev>
