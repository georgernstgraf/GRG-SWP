# Project State

Current status as of 2026-10-05.

## Current Focus
**3AHWII OO-Fundament (#10):** UE 1–3 liegen als kohortenagnostische **Prepared Lessons**
unter `unterricht/KM5-01…03/` — **Lektion = Präsentation** (beamer-taugliche Einzel-HTML,
zentrale `assets/`, kein CDN), im Root-Navigator `index.html` verlinkt. Der kohortengebundene
`3ahwii/teach/`-Workspace wurde aufgelöst; die UE-Ordner (`3ahwii/YYYY-MM-DD__thema/`) sind
Übernahme-Ablage + rot→grün-Starter. OO-Fachbegriffe im Root-`GLOSSAR.md`. Domänen:
Unterricht `Konto`, HÜ `Tier`/`Fahrzeug`/`Produkt`, Test `Person` (Anti-Copy).

## Completed (this cycle)
- [x] _opencode-helpers#104_ — create-lesson: „Lektion und Präsentation in einem"
      (eine beamer-taugliche HTML, kein separater Foliensatz/CDN)
- [x] Prepared Lessons `unterricht/KM5-01-klasse-instanz-zustand/` (Inhalt stabil),
      `KM5-02-kapselung-invarianten/` (erweitert), `KM5-03-interfaces-vertraege/` (erweitert)
      — je `lesson.html` + `hausaufgabe.md` + Tages-README-Vorlage
- [x] Root-`index.html` (KM5-Block) + `GLOSSAR.md` (OO-Begriffe mit KM-Verweis)
- [x] `3ahwii/teach/` entfernt; UE-READMEs und `semesterplan-ws.md` auf Prepared Lessons umgebogen
- [x] UE-Ordner auf `YYYY-MM-DD__thema` umbenannt; Schema in `docs/ai/CONVENTIONS.md` festgeschrieben
- [x] `docs/ai/`: ADR 2026-10-05 (+ HISTORY-Supersede), ARCHITECTURE, HANDOFF, STATE
- [x] #9 CLOSED 2026-10-05 — Lernplattform-Infrastruktur
- [x] #8 CLOSED — Klassen-Hub + Agentic-Coding-Einstieg (Vorarbeit)

## Pending
- [ ] Domänen-Rework UE 4–10 in `3ahwii/semesterplan-ws.md` (HÜ-Spalten noch Bruch-basiert)
- [ ] Prepared Lessons UE 4+ (KM5-04 …) + Learning-Record je gehaltener UE
- [ ] PM-Koordination mit PRE-Kollegen klären (menschlich, vor SS-Start)
- [ ] Deno-Desktop-Versionsstand (≥ 2.9) vor SS-Start verifizieren; Fallback Hono+Vite

## Blockers
- Keine (agentenseitig). PM-Koordination erfordert Kollegengespräch.

## Hinweise
- `3ahwii/2026-09-15_agentic-coding-einstieg/` bewusst belassen (Einheit liegt in GRG-INFI;
  zwei bekannte tote `windows-debloat.md`-Links).
- Agentic Coding in `../GRG-INFI/3ahwii/` (dortige `docs/ai` zuerst lesen).
