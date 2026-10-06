# HANDOFF

Branch: `main` (GRG-SWP) · **#12 CLOSED 2026-10-06** (Prepared Lesson KM6-06
Schichtentrennung); offen: UE 4+ (KM5) / restliches KM6 / Domänen-Rework

## Offene Tasks

1. [ ] **Prepared Lessons UE 4+ (KM5-04 …)** unter `unterricht/` nachziehen: Vererbung,
   Polymorphismus, abstract, Collections, Laufzeit, Exceptions, UML. Learning-Record je
   gehaltener UE festhalten (Zone of Proximal Development).
2. [ ] **Prepared Lessons KM6 nachziehen** (Nummer = UE, siehe `docs/ai/CONVENTIONS.md`):
   `KM6-06` (Schichtentrennung, UE 6) ist gebaut; offen sind UE 1–4 (Deno Desktop,
   Bindings/Events, GUI-Elemente), UE 5 (Repository-Pattern) und UE 7–8
   (parallele Abläufe, Performance) + Verbund-UEs.
3. [ ] **Domänen-Rework UE 4–10 (Klassenfassung)**: `3ahwii/semesterplan-ws.md` ist ab UE 1
   auf die 5-Domänen-Strategie umgestellt, aber die HÜ-Spalten UE 4–10 sind noch Bruch-basiert
   (`GemischterBruch`, polymorphes `Bruch[]`, `abstract Tier`, UML der Bruch-Hierarchie,
   `BruchFehler`). Umstellen auf die 5 Domänen (Unterricht `Konto`, HÜ `Tier`/`Fahrzeug`/
   `Produkt`, Test `Person`; Zuordnung im Log `3ahwii/README.md`, 2026-09-14);
   Gerüst `unterricht/HWII-SWP/` bleibt unverändert.
4. [ ] **PM-Koordination mit PRE-Kollegen** (Erinnerung an Georg):
   PM-Rahmung Verbundprojekt, PM-Rubrik, Verteilung seiner 2 h — siehe
   `lehrplan/swp-hwii/3HWII/README.md` → „Offene Punkte (TBD)".
5. [ ] **Deno Desktop ≥ 2.9 vor SS-Start verifizieren** — sonst GUI-Einheiten auf
   Fallback Hono+Vite umstellen.

## Kontext für den nächsten Agenten

- **KM6-06 (2026-10-06):** `unterricht/KM6-06-schichtentrennung-applikation/` — die erste
  KM6-Prepared-Lesson. Durchgehendes Beispiel `Konto` (KM5) über die Schichten
  View → Endpoint → Controller → Service → Repository/DB. **Endpoint-Framework: Hono**
  (`jsr:@hono/hono`), `Deno.serve` als Unterbau; Fehler-Thread Domäne `throw` → `FehlerArt`
  → HTTP-Status (404/409/400); Atomarität über `repo.transaktion(...)` (In-Memory-Rollback)
  bzw. `prisma.$transaction`. Snippets sind mit Deno 2.9.7 verifiziert (kein lauffähiger
  Code unter `unterricht/`).
- **Domänen-Strategie (2026-09-14):** 5 voll declinierbare Domänen — Unterricht `Konto`,
  HÜ 1–3 `Tier`/`Fahrzeug`/`Produkt`, Test `Person`; `Bruch` nur noch Brücke in UE 1.
  Anti-Copy: Unterricht ≠ HÜ ≠ Test. `Medium` bleibt frei (Verbund-Vorgriff UE 6/12).
- **Prepared Lessons (2026-10-05):** `unterricht/KM5-01-klasse-instanz-zustand/`,
  `KM5-02-kapselung-invarianten/`, `KM5-03-interfaces-vertraege/` — **Lektion = Präsentation**
  (eine beamer-taugliche HTML, create-lesson-Skill; opencode-helpers#104). Je Ordner
  `lesson.html` + `hausaufgabe.md`; Tages-README-Vorlagen flach unter `unterricht/`.
  Zentrale `assets/`, Root-Navigator verlinkt. OO-Fachbegriffe: Root-`GLOSSAR.md`.
- **teach-Workspace aufgelöst (2026-10-05):** `3ahwii/teach/` entfernt; UE-READMEs und
  `semesterplan-ws.md` zeigen auf die Prepared Lessons.
- **Abgrenzung:** `unterricht/HWII-SWP/` bleibt generisches Planungsgerüst (ADR 2026-09-14).
- **Stack:** Unterrichtscode in Deno/TypeScript; `deno fmt` (2 Spaces, doppelte Anführungszeichen).
  Deno-Binary: `~/.deno/bin/deno` (nicht auf `PATH`).
- **Bewusst belassen:** `3ahwii/2026-09-15_agentic-coding-einstieg/` (Sondereinheit liegt in
  GRG-INFI; Ordner bleibt stehen, zwei bekannte tote `windows-debloat.md`-Links).
