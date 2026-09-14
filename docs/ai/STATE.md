# Project State

Current status as of 2026-09-14.

## Current Focus
Klassen-Hub **`3ahwii/`** für SJ 2026/27 (SWP): Hub-README + Log, Klassen-Semesterplan
(`semesterplan-ws.md`, Vollkopie des Gerüsts). **Neu (2026-09-14): Domänen-Strategie
OO-Fundament** — `Bruch` als Träger verworfen; 5 voll declinierbare Domänen (Konto =
Unterricht, Tier/Fahrzeug/Produkt = HÜ 1–3, Person = Test). Teach-Workspace `3ahwii/teach/`
mit Lessons UE 1–3; UE-Ordner mit rot→grün-Startern. UE 4–10 HÜ-Spalten brauchen noch
Domänen-Rework. `unterricht/HWII-SWP/` bleibt generisches Gerüst (ADR 2026-09-14).

## Completed (this cycle)
- [x] 3HWII-Detailmaterial UE 1–3: Teach-Workspace `3ahwii/teach/` (MISSION/RESOURCES/NOTES,
      Learning-Record 0001, assets, 4 Reference-Docs, Lessons 0001–0003 auf Domäne Konto)
- [x] UE-Ordner `2026-09-15_oo-repetition/` (HÜ Tier), `2026-09-22_kapselung/` (HÜ Fahrzeug),
      `2026-09-29_interfaces/` (HÜ Produkt) — jeweils README (Ablauf 50', HÜ oben) +
      Deno-Starter mit absichtlich roten Tests
- [x] Domänen-Steckbriefe (5 Domänen mit vollem OO-Bogen) als Planungs-/Schüler-Referenz
- [x] Klassenplan UE 1–3 auf Domänen-Strategie umgestellt; Hub-Tabelle + Log-Eintrag 2026-09-14
- [x] Klasse 3ahwii: Hub `3ahwii/README.md` + Log (Eintrag 2026-09-08 aus ARCHIV-Log herübergezogen)
- [x] Klassenplan `3ahwii/semesterplan-ws.md` (Vollkopie des WS-Gerüsts; Sondereinheit wieder entfernt)
- [x] Agentic-Coding-Sondereinheit + `windows-debloat.md` nach GRG-INFI verschoben (Move + Querverweis; SWP-Kopie `git rm`)
- [x] `ARCHIV/2025-26-3ahwii/README.md` auf C#-History reduziert; laufende Klasse verweist auf `3ahwii/`
- [x] `docs/ai/`: ARCHITECTURE (Gerüst vs. Klassenordner), DECISIONS (ADR 2026-09-14), STATE, HANDOFF
- [x] Spiegel-Session GRG-INFI (lehrplan-Skill) — Details `../GRG-INFI/docs/ai/HANDOFF.md`

## Pending
- [ ] Domänen-Rework UE 4–10 in `3ahwii/semesterplan-ws.md` (HÜ-Spalten noch Bruch-basiert)
- [ ] Lessons UE 4+ + Learning-Records je gehaltener UE (Teach-Workspace nachziehen)
- [ ] PM-Koordination mit PRE-Kollegen klären (menschlich, vor SS-Start; TBD in `../lehrplan/swp-hwii/3HWII/README.md`)
- [ ] Deno-Desktop-Versionsstand (≥ 2.9) vor SS-Start verifizieren; Fallback Hono+Vite

## Blockers
- Keine (agentenseitig). PM-Koordination erfordert Kollegengespräch.

## Next Session Suggestion
1. **Domänen-Rework UE 4–10**: HÜ-Spalten in `3ahwii/semesterplan-ws.md` von Bruch auf
   die 5 Domänen umstellen (Steckbriefe: `3ahwii/teach/reference/domaenen-steckbriefe.html`);
   danach Lessons UE 4+ im Teach-Workspace nachziehen.
2. Agentic Coding liegt in `../GRG-INFI/3ahwii/` (dortige `docs/ai` zuerst lesen).
