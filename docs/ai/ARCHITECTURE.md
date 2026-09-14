# Architecture

Living structural map of the system as of 2026-09-07.
Overwritten when structural changes occur during a session.

## Overview

GRG-SWP ist das öffentliche Unterrichts-Repo für das Fach „Softwareentwicklung und
Projektmanagement" (HTL Spengergasse, WII–Betriebsinformatik). Es enthält Unterrichts-
Material und -Archiv sowie seit 2026-07-26 eine lehrplanbasierte Planungs-Schicht:
Rahmenlehrplan (`lehrplan/`), didaktische Kompetenzmodul-Steckbriefe
(`lehrplan/swp-hwii/kompetenzmodule/`), das generische Unterrichtsgerüst
(`unterricht/HWII-SWP/`) und die klassenspezifischen Konkretisierungen im
Klassenordner (`3ahwii/`). Privates
Companion: `GRG-SWP-T` (Tests, Noten). Schwester-Repo mit Verbund: `GRG-INFI`.

## Top-Level-Struktur

| Pfad | Zweck |
|------|-------|
| `README.md` | Repo-Übersicht, Beurteilung (PLF/HÜ/Mitarbeit je 1/3), HÜ-Policy |
| `AGENTS.md` | Knowledge-Bootstrap für Agenten (→ `docs/ai/`), Repo-GLOSSAR.md (Domänenbegriffe) |
| `lehrplan/` | Lehrplan nach Skill-Standard mit Zweig-Ebene (Retrofit 2026-09-10): `swp-hwii/LEHRPLAN.md` (dreischichtig ①②③), `swp-hwii/RIS.md` (Rechtsstand), `METADATA.md` (Stundentafel/Stack), `swp-hwii/HWII_*.pdf` (Schicht ②), `swp-hwii/kompetenzmodule/` (KM-Matrix + Steckbriefe `km3.md`–`km9.md`), `swp-hwii/3HWII/` (Drehscheibe + Klassenextrakt `3HWII.lehrplan.md`) |
| `unterricht/HWII-SWP/` | **Generisches Unterrichts-Gerüst** (klassen-/jahrgangsübergreifend, wird für Klassen-Abweichungen **nicht** angefasst): `jg3-semesterplan-{ws,ss}.md` (KM5/KM6), `jg2/jg4/jg5-einheiten.md` |
| `3ahwii/` | **Klassenordner SJ 2026/27** (konkrete Klasse): Hub `README.md` (+ Log), Klassen-Semesterplan `semesterplan-ws.md` (Vollkopie des Gerüsts + Abweichungen), UE-Ordner `YYYY-MM-DD_thema/`, Teach-Workspace `teach/` (Lessons/Reference für Schüler, Domänen-Steckbriefe) |
| `docs/ai/` | Agenten-Wissen (HANDOFF/STATE/DECISIONS/ARCHITECTURE/CONVENTIONS/PITFALLS/DOMAIN/HISTORY) |
| `ARCHIV/` | Unterricht vergangener Schuljahre (`2025-26-2ahwii/` = Vorjahr der aktuellen Kohorte, TS; `2025-26-3ahwii/` = C#-Variante Jg III) |
| `Unterlagen/`, `Übungen/`, `Sample_Projects/`, `Coole_Prisma_Schemas/`, `Testdata_(Generators)/` | Unterrichtsmaterial |

## Beziehungen

- `unterricht/HWII-SWP/jg3-semesterplan-*.md` → bezieht Soll aus `lehrplan/swp-hwii/LEHRPLAN.md` (②, rückverwiesen auf ①) und Steckbriefe aus `lehrplan/swp-hwii/kompetenzmodule/km5|km6.md`.
- `3ahwii/semesterplan-ws.md` → **Vollkopie/Konkretisierung** von `unterricht/HWII-SWP/jg3-semesterplan-ws.md`; klassenspezifische Abweichungen (z. B. Sondereinheit Agentic Coding, Domänen-Strategie UE 1–3) werden **nur hier** gepflegt.
- `3ahwii/teach/` → Teach-Skill-Workspace (MISSION/lessons/reference/assets): erzeugt das Schülermaterial für UE 1–3; UE-Ordner verlinken die Lessons. Unterrichts-Domäne `Konto`, HÜ-Domänen `Tier`/`Fahrzeug`/`Produkt`, Test-Domäne `Person` (Anti-Copy-Strategie, Steckbriefe in `teach/reference/`).
- `3ahwii/README.md` → Klassen-Hub: UE-Übersicht, Klassen-Semesterplan, Log SJ 2026/27.
- `lehrplan/swp-hwii/3HWII/README.md` ↔ `GRG-INFI` (Verbundprojekt; Spiegel-Session vorbereitet via `GRG-INFI/docs/ai/HANDOFF.md`).
- `lehrplan/swp-hwii/kompetenzmodule/km3|km4.md` → Ist-Rückpflege aus `ARCHIV/2025-26-2ahwii/` + `unterricht/HWII-SWP/jg2-einheiten.md`.

## Knowledge Files (`docs/ai/`)
| File | Purpose | Update mode |
|------|---------|------------|
| HANDOFF.md | Open tasks for next session | Overwrite |
| DECISIONS.md | Active decisions still in force | Append; prune superseded → HISTORY.md |
| ARCHITECTURE.md | Living structural map | Overwrite |
| CONVENTIONS.md | Ongoing rules to follow | Append |
| PITFALLS.md | Hard-won failure knowledge | Append |
| DOMAIN.md | Business/domain rules | Append |
| STATE.md | Current project status | Overwrite |
| HISTORY.md | Superseded entries archive | Append-only |

## Data Flows
- RIS (NOR40217058) → `lehrplan/swp-hwii/RIS.md` + `swp-hwii/LEHRPLAN.md` ①: jährlicher Rechtsstand-Check.
- `ARCHIV/2025-26-2ahwii/` → `unterricht/HWII-SWP/jg2-einheiten.md` → Vorwissen-Block der 3HWII-Pläne.
- `lehrplan/swp-hwii/3HWII/README.md` (Repository-Interface) → GRG-INFI (Prisma-Implementierung): Verbundprojekt SS 2027.
