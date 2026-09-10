# Project State

Current status as of 2026-09-07.

## Current Focus
Skill-Standard-Layout umgesetzt: alles unter `lehrplan/` (LEHRPLAN/RIS/METADATA/PDFs/
jgN-einheiten + kompetenzmodule/ + 3HWII/ mit Klassenextrakt), Repo-GLOSSAR.md angelegt,
alle Referenzen und docs/ai-Pfade aktualisiert. Lehrplan-Werk SJ 2026/27 zuvor (Issue #7).
Tracking-Issue: **#7** (offen).

## Completed (this cycle)
- [x] RIS-Recherche: Anlage 1.24 = BGBl. II Nr. 262/2015 idF 235/2019, aktuell → `lehrplan/swp-hwii/RIS.md`
- [x] Offizieller SWP-Extrakt aus RIS-Dump `NOR40217058` verifiziert
- [x] `lehrplan/swp-hwii/kompetenzmodule/README.md` (Matrix) + km3–km9 Steckbriefe (km5/km6 voll)
- [x] `lehrplan/swp-hwii/3HWII/README.md` (Rahmen + INFI-Verbund komplett) + Semesterpläne `unterricht/HWII-SWP/jg3-semesterplan-{ws,ss}.md`
- [x] `LEHRPLAN.md` dreischichtig; `METADATA.md` (idF 235/2019, 2+2-Split, 13+2-Modell)
- [x] jg2/jg4/jg5 Minimal-Updates; Root-README Links + „Betriebsinformatik"-Fix
- [x] `jg3-einheiten.md` nach verlustfreier Migration gelöscht (git rm)
- [x] Verifikation: interne Links OK; beide Pläne exakt 13 UE + 2 PLF; KM5/KM6-Soll abgedeckt
- [x] HANDOFF für INFI-Spiegel-Session: `../GRG-INFI/docs/ai/HANDOFF.md`
- [x] `docs/ai/` in diesem Repo neu etabliert
- [x] Umzug in `lehrplan/` (git mv, History bewahrt): docs/lehrplan → lehrplan/, 3HWII + kompetenzmodule → lehrplan/
- [x] Klassenextrakt `lehrplan/swp-hwii/3HWII/3HWII.lehrplan.md` erzeugt (Jg III, KM5+KM6, Schicht ①)
- [x] Repo-`GLOSSAR.md` angelegt; alle internen Links geprüft (Link-Check grün)

## Pending
- [ ] Spiegel-Session GRG-INFI durchführen (Auftrag liegt fertig: `../GRG-INFI/docs/ai/HANDOFF.md`; INFI-Repo hat Issues deaktiviert → Tracking dort per HANDOFF-Datei)
- [ ] PM-Koordination mit PRE-Kollegen klären (menschlich, vor SS-Start; TBD in `lehrplan/swp-hwii/3HWII/README.md`)
- [ ] Deno-Desktop-Versionsstand (≥ 2.9) vor SS-Start verifizieren; Fallback Hono+Vite

## Blockers
- Keine (agentenseitig). PM-Koordination erfordert Kollegen-Gespräch.

## Next Session Suggestion
1. Wenn INFI-Spiegel ansteht: Session aus `../GRG-INFI/` starten, dortiges
   `docs/ai/HANDOFF.md` zuerst lesen und abarbeiten.
2. Wenn 3HWII-Detailmaterial ansteht: UE-Ordner zu `unterricht/HWII-SWP/jg3-semesterplan-ws.md`
   UE 1–3 aufbauen (Bruch-Repetition, Kapselung, Interfaces; Git-Disziplin mitführen).
