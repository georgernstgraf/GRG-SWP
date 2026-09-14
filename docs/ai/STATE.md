# Project State

Current status as of 2026-09-14.

## Current Focus
Erläuterungs-Ebene (lehrplan-Skill Aufgabe 2) vervollständigt: `LEHRPLAN.md` (Jg I–V) und
alle Klassenextrakte (3HWII/4HWII/5HWII) annotiert (Überblick pro KM, Erläuterung pro
Lernziel/Lehrstoff-Bereich); Stub-Klassenextrakte 4HWII/5HWII neu; defekte Relativ-Links
nach dem Layout-Retrofit repariert. Tracking-Issue: **#7** (offen).

## Completed (this cycle)
- [x] RIS-Recherche: Anlage 1.24 = BGBl. II Nr. 262/2015 idF 235/2019, aktuell → `lehrplan/swp-hwii/RIS.md`
- [x] Offizieller SWP-Extrakt aus RIS-Dump `NOR40217058` verifiziert
- [x] `lehrplan/swp-hwii/kompetenzmodule/README.md` (Matrix) + km3–km9 Steckbriefe (km5/km6 voll)
- [x] `lehrplan/swp-hwii/3HWII/README.md` (Rahmen + INFI-Verbund komplett) + Semesterpläne `unterricht/HWII-SWP/jg3-semesterplan-{ws,ss}.md`
- [x] Erläuterungs-Ebene in `lehrplan/swp-hwii/LEHRPLAN.md` (Jg I–V, alle KM3–KM9 + Jg I) — 2026-09-14
- [x] Erläuterungs-Ebene in `lehrplan/swp-hwii/3HWII/3HWII.lehrplan.md` (KM5+KM6) — 2026-09-14
- [x] Klassenextrakte `4HWII/4HWII.lehrplan.md` + `5HWII/5HWII.lehrplan.md` (Stub, annotiert) — 2026-09-14
- [x] Relativ-Links repariert (LEHRPLAN/RIS/3HWII-README/jgN-einheiten nach Retrofit) — 2026-09-14
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
