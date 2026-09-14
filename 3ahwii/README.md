# 3AHWII – SWP (SJ 2026/27)

Klassenordner der **3AHWII** für das Fach **SWP** (HTL Spengergasse,
WII–Betriebsinformatik), Schuljahr 2026/27.

**Stack:** Unterrichtsbeispiele in **Deno + TypeScript** (siehe
[`../docs/ai/CONVENTIONS.md`](../docs/ai/CONVENTIONS.md)).

> **Konkrete Klassenfassung.** Das generische Gerüst (klassen- und jahrgangsübergreifend)
> liegt unter [`../unterricht/HWII-SWP/`](../unterricht/HWII-SWP/). Klassenspezifische
> Abweichungen werden **hier** gepflegt – das Gerüst bleibt unangetastet.

> **Agentic Coding → INFI:** Die Sondereinheit „Agentic Coding – Einstieg" (Schulübung,
> HÜ nur Gruppe X) findet im **INFI-Unterricht** statt und liegt im Schwester-Repo:
> [`GRG-INFI/3ahwii/2026-09-15_agentic-coding-einstieg/`](https://github.com/georgernstgraf/GRG-INFI/tree/main/3ahwii/2026-09-15_agentic-coding-einstieg/).

## Semesterplan

- **Wintersemester 2026/27:** [`semesterplan-ws.md`](semesterplan-ws.md) –
  Klassenfassung, konkretisiert aus
  [`../unterricht/HWII-SWP/jg3-semesterplan-ws.md`](../unterricht/HWII-SWP/jg3-semesterplan-ws.md).

## Unterrichtseinheiten

| Datum | UE | Thema |
|-------|----|-------|
| 2026-09-08 | Intro | [OOP in TypeScript – Die Bruch-Klasse](2026-09-08_intro/) |
| 2026-09-15 | 1 | [OO-Repetition & Klasse/Instanz/Zustand](2026-09-15_oo-repetition/) |
| 2026-09-22 | 2 | [Kapselung & Sichtbarkeit](2026-09-22_kapselung/) |
| 2026-09-29 | 3 | [Schnittstellen als Vertrag](2026-09-29_interfaces/) |

## Log SJ 2026/27

### 2026-09-14 – Domänen-Strategie OO-Fundament (Planung)

Der `Bruch` ist zu dünn als OO-Träger (keine echte Hierarchie, Invarianten ohne
Substanz) — Abkehr davon in der Klassenfassung. **5 Domänen**, die jede den vollen
OO-Bogen tragen (getter/setter → abstract class, Interfaces, Fehlerklassen):

- **Unterricht:** `Konto` (Bankwesen) — UE 1 ff., Live-Coding-Domäne
- **HÜ 1 (UE 1):** `Tier` · **HÜ 2 (UE 2):** `Fahrzeug` · **HÜ 3 (UE 3):** `Produkt`
- **Test/PLF 1:** `Person` (Schulverwaltung)

Anti-Copy: Unterricht ≠ jede HÜ ≠ Test. Nebenwirkung: Tierpension, Shop und
Schulverwaltung sind 3 der 5 Verbund-Kandidaten → informierte Abstimmung im Dezember.
Unterrichts-/Übungsmaterial im Teach-Workspace [`teach/`](teach/) (Lessons, Glossar,
Cheatsheet, Invarianten-Checkliste, Domänen-Steckbriefe). `semesterplan-ws.md` UE 1–3
umgestellt; **UE 4–10 sind noch Bruch-basiert** → Domänen-Rework offen (HANDOFF).

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
