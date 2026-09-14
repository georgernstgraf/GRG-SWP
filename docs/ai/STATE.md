# Project State

Current status as of 2026-09-14.

## Current Focus
Klassen-Hub **`3ahwii/`** für SJ 2026/27 (Issue **#8**): Hub-README + Log,
Klassen-Semesterplan (`semesterplan-ws.md`) und die Sondereinheit **„Agentic Coding –
Einstieg"** (`2026-09-15_agentic-coding-einstieg/`) als **Schulübung** (HÜ-Rest
**nur Gruppe X**). Zusätzlich optionaler Windows-Debloat (`windows-debloat.md`,
von opencode gesteuert). `unterricht/HWII-SWP/` bleibt generisches Gerüst (ADR 2026-09-14).

## Completed (this cycle)
- [x] Klasse 3ahwii: Hub `3ahwii/README.md` + Log (Eintrag 2026-09-08 aus ARCHIV-Log herübergezogen)
- [x] Sondereinheit `3ahwii/2026-09-15_agentic-coding-einstieg/README.md` (Node/opencode-Setup via winget, freie Provider, Agent-Loop) — als Schulübung mit HÜ nur Gruppe X; `Set-ExecutionPolicy … RemoteSigned` ergänzt
- [x] `3ahwii/windows-debloat.md` — optionaler Semester-/Jahresstart, Win11Debloat von opencode gesteuert (Sicherheitsnetz/Undo)
- [x] Klassenplan `3ahwii/semesterplan-ws.md` (Vollkopie des WS-Gerüsts + Sondereinheit vor UE 1, außerhalb 13+2)
- [x] `ARCHIV/2025-26-3ahwii/README.md` auf C#-History reduziert; laufende Klasse verweist auf `3ahwii/`
- [x] `docs/ai/`: ARCHITECTURE (Gerüst vs. Klassenordner), DECISIONS (ADR 2026-09-14), STATE, HANDOFF
- [x] Spiegel-Session GRG-INFI (lehrplan-Skill) — Details `../GRG-INFI/docs/ai/HANDOFF.md`

## Pending
- [ ] Sondereinheit am 2026-09-15 halten; HÜ-Eingang **nur Gruppe X** prüfen
- [ ] 3HWII-Detailmaterial UE 1–3 (Bruch-Repetition, Kapselung, Interfaces) aufbauen
- [ ] PM-Koordination mit PRE-Kollegen klären (menschlich, vor SS-Start; TBD in `../lehrplan/swp-hwii/3HWII/README.md`)
- [ ] Deno-Desktop-Versionsstand (≥ 2.9) vor SS-Start verifizieren; Fallback Hono+Vite

## Blockers
- Keine (agentenseitig). PM-Koordination erfordert Kollegen-Gespräch.

## Next Session Suggestion
1. Falls 3HWII-Detailmaterial ansteht: UE-Ordner zur Klassenfassung
   `3ahwii/semesterplan-ws.md` (UE 1–3) aufbauen; Git-Disziplin mitführen.
2. Wenn INFI-Spiegel ansteht: Session aus `../GRG-INFI/` starten (dortiges `docs/ai/HANDOFF.md` zuerst).
