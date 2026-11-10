---
type: State
title: Project State (GRG-SWP)
description: Kurzstatus des Unterrichts-Repos — Fokus, abgeschlossene und offene Lessons.
tags: [grg-swp, unterricht, lessons]
generated: { by: opencode/knowledge-persistence, at: 2026-11-10T07:18:53Z }
status: stable
sources:
  - id: issue-14
    resource: https://github.com/georgernstgraf/GRG-SWP/issues/14
    title: 3AHWII: Prepared Lesson SA-01 — Security Awareness (Video-Fallstudien)
---

# Project State

Current status as of 2026-11-10.

## Current Focus
**3AHWII Security Awareness (#14):** Mit
`unterricht/SA-01-security-awareness/` liegt die erste **SA**-Prepared Lesson
vor (schulautonom; kein KM des Jg III deckt Security Awareness ab, Themenlinie
setzt sich in KM9 fort). Grundlage: Video „HAHAHA (You deserve it)"
(The PrimeTime, 2026-11-09, youtube.com/watch?v=KMOyP_ArDMo), das als
Knowledge-Check-Grundlage in 3ahwii diente. Die Lesson erklärt die Technik:
CDN/DNS-Supply-Chain + SRI/Pinning, Malvertising + `curl | bash`, Social
Engineering + Ausführungsrechte (Deno-Permissions als Kontrast),
Deploy-Token + 4-Augen-Prinzip, Hardware-Wallet-Lieferkette, X.509-Entropie +
Revocation. 9 Lernquizze (Format 2.1, 22 Fragen) sind über die Lesson verzahnt.
Mit demselben Commit wurde `assets/quiz.js` auf Format 2.1 gehoben (Port aus
GRG-PMM, Radio-Altmodus bleibt) und `.quiz--lern` in `assets/lesson.css`
ergänzt — Vorlage für künftige Lessons.

## Completed (this cycle)
- [x] #14 CLOSED 2026-11-10 — Prepared Lesson `unterricht/SA-01-security-awareness/`
      (`lesson.html` + `aufgabe.md`, Beispiel 1–3 je ≥ 2 Teilaufgaben),
      Navigator-Block „Jg III · SA" im Root-`index.html`, 14 Glossar-Begriffe
      (SA-01), `docs/ai/CONVENTIONS.md` auf `aufgabe.md` korrigiert;
      SRI-Beispiel mit real berechnetem Hash (openssl, `hallo.js`, 28 Bytes);
      Quiz-Init per Headless-Chrome gegen `./serve.sh` verifiziert
      (9 Quiz-Blöcke, 22 Überprüfen-Buttons, Infokugeln, Badge)
- [x] #12 CLOSED 2026-10-06 — Prepared Lesson KM6-06 (Schichtentrennung)
- [x] #11 CLOSED 2026-10-05 — `assets/quiz.js` readyState-Guard
- [x] #10 CLOSED 2026-10-05 — Prepared Lessons KM5-01…03
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
