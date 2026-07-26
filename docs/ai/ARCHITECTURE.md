# Architecture

Living structural map of the system as of 2026-07-26.
Overwritten when structural changes occur during a session.

## Overview

GRG-SWP ist das öffentliche Unterrichts-Repo für das Fach „Softwareentwicklung und
Projektmanagement" (HTL Spengergasse, WII–Betriebsinformatik). Es enthält Unterrichts-
Material und -Archiv sowie seit 2026-07-26 eine lehrplanbasierte Planungs-Schicht:
Rahmenlehrplan (`docs/lehrplan/`), didaktische Kompetenzmodul-Steckbriefe
(`kompetenzmodule/`) und klassenspezifische Semesterpläne (`3HWII/`). Privates
Companion: `GRG-SWP-T` (Tests, Noten). Schwester-Repo mit Verbund: `GRG-INFI`.

## Top-Level-Struktur

| Pfad | Zweck |
|------|-------|
| `README.md` | Repo-Übersicht, Beurteilung (PLF/HÜ/Mitarbeit je 1/3), HÜ-Policy |
| `AGENTS.md` | Knowledge-Bootstrap für Agenten (→ `docs/ai/`) |
| `kompetenzmodule/` | KM-Matrix (`README.md`) + Steckbriefe `km3.md`–`km9.md` (PMM-Format) |
| `3HWII/` | Drehscheibe SJ 2026/27: `README.md` (Rahmen + INFI-Verbund) + `semesterplan-ws.md` (KM5) + `semesterplan-ss.md` (KM6) |
| `docs/lehrplan/` | Lehrplan-Quelle: `LEHRPLAN.md` (dreischichtig ①②③), `RIS.md` (Rechtsstand), `METADATA.md` (Stundentafel/Stack), `HWII_*.pdf` (Schicht ②), `jg2/jg4/jg5-einheiten.md` |
| `docs/ai/` | Agenten-Wissen (HANDOFF/STATE/DECISIONS/ARCHITECTURE/CONVENTIONS/PITFALLS/DOMAIN/HISTORY) |
| `ARCHIV/` | Unterricht vergangener Schuljahre (`2025-26-2ahwii/` = Vorjahr der aktuellen Kohorte, TS; `2025-26-3ahwii/` = C#-Variante Jg III) |
| `Unterlagen/`, `Übungen/`, `Sample_Projects/`, `Coole_Prisma_Schemas/`, `Testdata_(Generators)/` | Unterrichtsmaterial |

## Beziehungen

- `3HWII/semesterplan-*.md` → bezieht Soll aus `docs/lehrplan/LEHRPLAN.md` (②, rückverwiesen auf ①) und Steckbriefe aus `kompetenzmodule/km5|km6.md`.
- `3HWII/README.md` ↔ `GRG-INFI` (Verbundprojekt; Spiegel-Session vorbereitet via `GRG-INFI/docs/ai/HANDOFF.md`).
- `kompetenzmodule/km3|km4.md` → Ist-Rückpflege aus `ARCHIV/2025-26-2ahwii/` + `docs/lehrplan/jg2-einheiten.md`.

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
- RIS (NOR40217058) → `docs/lehrplan/RIS.md` + `LEHRPLAN.md` ①: jährlicher Rechtsstand-Check.
- `ARCHIV/2025-26-2ahwii/` → `jg2-einheiten.md` → Vorwissen-Block der 3HWII-Pläne.
- `3HWII/README.md` (Repository-Interface) → GRG-INFI (Prisma-Implementierung): Verbundprojekt SS 2027.
