# Project State

Current status as of 2026-07-26.

## Current Focus
Lehrplan-Werk SJ 2026/27 abgeschlossen: RIS-Recherche, KM-Matrix + Steckbriefe,
3HWII-Semesterpläne (KM5/KM6, je 13 UE + 2 PLF), LEHRPLAN/METADATA dreischichtig
aktualisiert, jg3-einheiten.md migriert & gelöscht. Tracking-Issue: **#7** (offen).

## Completed (this cycle)
- [x] RIS-Recherche: Anlage 1.24 = BGBl. II Nr. 262/2015 idF 235/2019, aktuell → `docs/lehrplan/RIS.md`
- [x] Offizieller SWP-Extrakt aus RIS-Dump `NOR40217058` verifiziert
- [x] `kompetenzmodule/README.md` (Matrix) + km3–km9 Steckbriefe (km5/km6 voll)
- [x] `3HWII/README.md` (Rahmen + INFI-Verbund komplett) + `semesterplan-ws.md` + `semesterplan-ss.md`
- [x] `LEHRPLAN.md` dreischichtig; `METADATA.md` (idF 235/2019, 2+2-Split, 13+2-Modell)
- [x] jg2/jg4/jg5 Minimal-Updates; Root-README Links + „Betriebsinformatik"-Fix
- [x] `jg3-einheiten.md` nach verlustfreier Migration gelöscht (git rm)
- [x] Verifikation: interne Links OK; beide Pläne exakt 13 UE + 2 PLF; KM5/KM6-Soll abgedeckt
- [x] HANDOFF für INFI-Spiegel-Session: `../GRG-INFI/docs/ai/HANDOFF.md`
- [x] `docs/ai/` in diesem Repo neu etabliert

## Pending
- [ ] Spiegel-Session GRG-INFI durchführen (Auftrag liegt fertig: `../GRG-INFI/docs/ai/HANDOFF.md`; INFI-Repo hat Issues deaktiviert → Tracking dort per HANDOFF-Datei)
- [ ] PM-Koordination mit PRE-Kollegen klären (menschlich, vor SS-Start; TBD in `3HWII/README.md`)
- [ ] Deno-Desktop-Versionsstand (≥ 2.9) vor SS-Start verifizieren; Fallback Hono+Vite

## Blockers
- Keine (agentenseitig). PM-Koordination erfordert Kollegen-Gespräch.

## Next Session Suggestion
1. Wenn INFI-Spiegel ansteht: Session aus `../GRG-INFI/` starten, dortiges
   `docs/ai/HANDOFF.md` zuerst lesen und abarbeiten.
2. Wenn 3HWII-Detailmaterial ansteht: UE-Ordner zu `3HWII/semesterplan-ws.md`
   UE 1–3 aufbauen (Bruch-Repetition, Kapselung, Interfaces; Git-Disziplin mitführen).
