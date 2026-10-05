# HANDOFF

Branch: `main` (GRG-SWP) · Aktueller Workstream: **#10** (Prepared Lessons KM5-01–03 + teach-Auflösung)

## Offene Tasks

1. [ ] **Domänen-Rework UE 4–10 (Klassenfassung)**: `3ahwii/semesterplan-ws.md` ist ab UE 1
   auf die 5-Domänen-Strategie umgestellt, aber die HÜ-Spalten UE 4–10 sind noch Bruch-basiert
   (`GemischterBruch`, polymorphes `Bruch[]`, `abstract Tier`, UML der Bruch-Hierarchie,
   `BruchFehler`). Umstellen auf die 5 Domänen (Unterricht `Konto`, HÜ `Tier`/`Fahrzeug`/
   `Produkt`, Test `Person`; Zuordnung im Log `3ahwii/README.md`, 2026-09-14);
   Gerüst `unterricht/HWII-SWP/` bleibt unverändert.
2. [ ] **Prepared Lessons UE 4+** unter `unterricht/` nachziehen (KM5-04 …): Vererbung,
   Polymorphismus, abstract, Collections, Laufzeit, Exceptions, UML. Learning-Record je
   gehaltener UE festhalten (Zone of Proximal Development).
3. [ ] **PM-Koordination mit PRE-Kollegen** (Erinnerung an Georg):
   PM-Rahmung Verbundprojekt, PM-Rubrik, Verteilung seiner 2 h — siehe
   `lehrplan/swp-hwii/3HWII/README.md` → „Offene Punkte (TBD)".
4. [ ] **Deno Desktop ≥ 2.9 vor SS-Start verifizieren** — sonst GUI-Einheiten auf
   Fallback Hono+Vite umstellen.

## Kontext für den nächsten Agenten

- **Domänen-Strategie (2026-09-14):** 5 voll declinierbare Domänen — Unterricht `Konto`,
  HÜ 1–3 `Tier`/`Fahrzeug`/`Produkt`, Test `Person`; `Bruch` nur noch Brücke in UE 1.
  Anti-Copy: Unterricht ≠ HÜ ≠ Test. `Medium` bleibt frei (Verbund-Vorgriff UE 6/12).
- **Prepared Lessons (2026-10-05):** `unterricht/KM5-01-klasse-instanz-zustand/`,
  `KM5-02-kapselung-invarianten/`, `KM5-03-interfaces-vertraege/` — **Lektion = Präsentation**
  (eine beamer-taugliche HTML, create-lesson-Skill; opencode-helpers#104). Je Ordner
  `lesson.html` + `hausaufgabe.md`; Tages-README-Vorlagen flach unter `unterricht/`.
  Zentrale `assets/`, Root-Navigator verlinkt. OO-Fachbegriffe: Root-`GLOSSAR.md`.
- **teach-Workspace aufgelöst (2026-10-05):** `3ahwii/teach/` entfernt; UE-READMEs und
  `semesterplan-ws.md` zeigen auf die Prepared Lessons. UE-Ordner
  (`3ahwii/YYYY-MM-DD__thema/`) sind Übernahme + rot→grün-Starter (rot absichtlich).
- **Abgrenzung:** `unterricht/HWII-SWP/` bleibt generisches Planungsgerüst (ADR 2026-09-14).
- **Stack:** Unterrichtscode in Deno/TypeScript; `deno fmt` (2 Spaces, doppelte Anführungszeichen).
- **Bewusst belassen:** `3ahwii/2026-09-15_agentic-coding-einstieg/` (Sondereinheit liegt in
  GRG-INFI; Ordner bleibt stehen, zwei bekannte tote `windows-debloat.md`-Links).
