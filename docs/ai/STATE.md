# Project State

Current status as of 2026-09-14.

## Current Focus
Klassen-Hub **`3ahwii/`** für SJ 2026/27 (SWP): Hub-README + Log, Klassen-Semesterplan
(`semesterplan-ws.md`, Vollkopie des Gerüsts). `unterricht/HWII-SWP/` bleibt generisches
Gerüst (ADR 2026-09-14). Die **Agentic-Coding-Sondereinheit** wurde ins Schwester-Repo
**GRG-INFI** verschoben (dort `3ahwii/2026-09-15_agentic-coding-einstieg/`, Issue
[GRG-INFI#2](https://github.com/georgernstgraf/GRG-INFI/issues/2)) — sie findet im
INFI-Unterricht statt.

## Completed (this cycle)
- [x] Klasse 3ahwii: Hub `3ahwii/README.md` + Log (Eintrag 2026-09-08 aus ARCHIV-Log herübergezogen)
- [x] Klassenplan `3ahwii/semesterplan-ws.md` (Vollkopie des WS-Gerüsts; Sondereinheit wieder entfernt)
- [x] Agentic-Coding-Sondereinheit + `windows-debloat.md` nach GRG-INFI verschoben (Move + Querverweis; SWP-Kopie `git rm`)
- [x] `ARCHIV/2025-26-3ahwii/README.md` auf C#-History reduziert; laufende Klasse verweist auf `3ahwii/`
- [x] `docs/ai/`: ARCHITECTURE (Gerüst vs. Klassenordner), DECISIONS (ADR 2026-09-14), STATE, HANDOFF
- [x] Spiegel-Session GRG-INFI (lehrplan-Skill) — Details `../GRG-INFI/docs/ai/HANDOFF.md`

## Pending
- [ ] 3HWII-Detailmaterial UE 1–3 (Bruch-Repetition, Kapselung, Interfaces) aufbauen
- [ ] PM-Koordination mit PRE-Kollegen klären (menschlich, vor SS-Start; TBD in `../lehrplan/swp-hwii/3HWII/README.md`)
- [ ] Deno-Desktop-Versionsstand (≥ 2.9) vor SS-Start verifizieren; Fallback Hono+Vite

## Blockers
- Keine (agentenseitig). PM-Koordination erfordert Kollegengespräch.

## Next Session Suggestion
1. Falls 3HWII-Detailmaterial ansteht: UE-Ordner zur Klassenfassung
   `3ahwii/semesterplan-ws.md` (UE 1–3) aufbauen; Git-Disziplin mitführen.
2. Agentic Coding liegt jetzt in `../GRG-INFI/3ahwii/` (dortige `docs/ai` zuerst lesen).
