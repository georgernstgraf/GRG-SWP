# HANDOFF

Branch: `main` (GRG-SWP) · Tracking-Issue: **#8** (Klassen-Hub SWP; Agentic Coding → GRG-INFI#2)

## Offene Tasks

1. [ ] **Domänen-Rework UE 4–10 (Klassenfassung)**: `3ahwii/semesterplan-ws.md` ist ab UE 1
   auf Konto/5-Domänen-Strategie umgestellt, aber die HÜ-Spalten UE 4–10 sind noch Bruch-basiert
   (`GemischterBruch`, polymorphes `Bruch[]`, `abstract Tier`, UML der Bruch-Hierarchie,
   `BruchFehler`). Umstellen auf die 5 Domänen (Steckbriefe:
   `3ahwii/teach/reference/domaenen-steckbriefe.html`); Gerüst `unterricht/HWII-SWP/`
   bleibt unverändert (ADR 2026-09-14).
2. [ ] **Lessons UE 4+ im Teach-Workspace** nachziehen, sobald UE 1–3 gehalten sind
   (Learning-Records nach jeder gehaltenen UE erfassen — Zone of Proximal Development).
3. [ ] **PM-Koordination mit PRE-Kollegen** (kein Agenten-Task, Erinnerung an Georg):
   PM-Rahmung Verbundprojekt, PM-Rubrik, Verteilung seiner 2 h — siehe
   `lehrplan/swp-hwii/3HWII/README.md` → „Offene Punkte (TBD)".
4. [ ] **Deno Desktop ≥ 2.9 vor SS-Start verifizieren** — sonst GUI-Einheiten auf
   Fallback Hono+Vite umstellen.

## Kontext für den nächsten Agenten

- **Domänen-Strategie (2026-09-14, mit Georg abgestimmt):** `Bruch` als OO-Träger verworfen
  (zu dünn). 5 voll declinierbare Domänen: **Konto** (Unterricht) · **Tier/Fahrzeug/Produkt**
  (HÜ 1–3) · **Person** (Test/PLF 1). Anti-Copy: Unterricht ≠ HÜ ≠ Test. Tierpension/Shop/
  Schulverwaltung sind 3 der 5 Verbund-Kandidaten → gezieltes Vorwärmen. `Medium` bewusst frei
  (Verbund-Vorgriff UE 6/12). Details: `3ahwii/teach/NOTES.md` + Domänen-Steckbriefe.
- **Teach-Workspace** `3ahwii/teach/` (Skill-Layout: MISSION/RESOURCES/NOTES/learning-records/
  assets/reference/lessons) — Lessons 0001–0003 für UE 1–3 stehen; UE-Ordner mit rot→grün
  Startern: `2026-09-15_oo-repetition/` (Tier), `2026-09-22_kapselung/` (Fahrzeug),
  `2026-09-29_interfaces/` (Produkt). Starter-Tests sind **absichtlich rot**.
- **Abgrenzung (ADR 2026-09-14):** `unterricht/HWII-SWP/` bleibt generisch und unangetastet;
  Domänen-Abweichungen nur in `3ahwii/`.
- **Stack:** Unterrichtscode in Deno/TypeScript; `deno fmt` (2 Spaces, doppelte Anführungszeichen).
- Tracking-Issue **#7** (Lehrplan-Werk) inhaltlich abgeschlossen; **#8** ist der aktuelle
  SWP-Workstream.

(End of file)
