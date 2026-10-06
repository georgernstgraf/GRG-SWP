# Project State

Current status as of 2026-10-06.

## Current Focus
**3AHWII Architektur (#12):** Mit
`unterricht/KM6-06-schichtentrennung-applikation/` liegt die erste **KM6**-Prepared
Lesson (Schichtentrennung: View/Endpoint/Controller/Service/Repository, Dependency
Rule, Atomarität). Die Lesson ist **Lektion = Präsentation** (beamer-taugliche
Einzel-HTML, zentrale `assets/`), Endpoint-Framework **Hono**; der Beispielcode ist
mit Deno 2.9.7 verifiziert (5 Tests + Integrationstest 200/409/404). Die Lesson-Nummer
`KM6-06` ist an die **UE 6** des Semesterplans gekoppelt (Konvention siehe
`docs/ai/CONVENTIONS.md`).

## Completed (this cycle)
- [x] #12 — Prepared Lesson `unterricht/KM6-06-schichtentrennung-applikation/`
      (`lesson.html` + `hausaufgabe.md` + Tages-README-Vorlage), Root-`index.html`
      (neuer KM6-Block), `GLOSSAR.md` (Architektur-Begriffe: Schicht, Dependency Rule,
      Repository/Service/Controller/Endpoint/View, Composition Root, Transaktion)
- [x] Erstes KM6-Material des Repos; Code-Blöcke per Deno verifiziert (kein
      lauffähiger Projektcode unter `unterricht/`)
- [x] #11 CLOSED 2026-10-05 — `assets/quiz.js` startet jetzt auch bei asynchroner
      Injektion durch `loader.js` (`document.readyState`-Guard)
- [x] #10 CLOSED 2026-10-05 — Prepared Lessons `KM5-01…03` (kohortenagnostisch,
      Lektion = Präsentation) + `3ahwii/teach/` aufgelöst + Schema/Ordner + docs/ai
- [x] #9 CLOSED 2026-10-05 — Lernplattform-Infrastruktur

## Pending
- [ ] Prepared Lessons **UE 4+ KM5** (KM5-04 …): Vererbung, Polymorphismus, abstract,
      Collections, Laufzeit, Exceptions, UML
- [ ] Prepared Lessons **KM6-01…05** (UE 1–5): Deno Desktop, Bindings/Events,
      GUI-Elemente, Repository-Pattern; UE 7–8 (parallele Abläufe, Performance) + Verbund
- [ ] Domänen-Rework UE 4–10 in `3ahwii/semesterplan-ws.md` (HÜ-Spalten noch Bruch-basiert)
- [ ] PM-Koordination mit PRE-Kollegen klären (menschlich, vor SS-Start)
- [ ] Deno-Desktop-Versionsstand (≥ 2.9) vor SS-Start verifizieren; Fallback Hono+Vite

## Blockers
- Keine (agentenseitig). PM-Koordination erfordert Kollegengespräch.

## Hinweise
- `3ahwii/2026-09-15_agentic-coding-einstieg/` bewusst belassen (Einheit liegt in
  GRG-INFI; zwei bekannte tote `windows-debloat.md`-Links).
- Agentic Coding in `../GRG-INFI/3ahwii/` (dortige `docs/ai` zuerst lesen).
- Deno liegt auf dieser Maschine unter `~/.deno/bin/deno` (nicht auf `PATH`).
