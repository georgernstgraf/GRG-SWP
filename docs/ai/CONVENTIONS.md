# Conventions

Coding patterns, naming rules, and style agreements for this project.
Follow these without question. Do not deviate unless explicitly told.

## Naming
- Klassenordner groß: `3HWII/` (Parallelklassen 3a/3b möglich), Inhalte: `README.md` + `semesterplan-ws.md` + `semesterplan-ss.md`.
- KM-Steckbriefe: `kompetenzmodule/kmN.md` (N = Kompetenzmodul-Nummer; KM9 ein File für Sem. 9+10).
- Unterrichts-Archiv: `ARCHIV/YYYY-YY-<klasse>kleingeschrieben/YYYY-MM-DD_thema/`.

## File Layout
- Lehrplan-Quelle: `docs/lehrplan/` (LEHRPLAN.md dreischichtig ① RIS ② Schuladaption ③ Didaktik; RIS.md = Rechtsstand; METADATA.md = Stundentafel/Stack/Konventionen).
- Umsetzungs-Pläne: Root (`kompetenzmodule/`, `3HWII/`).
- Wissen für Agenten: `docs/ai/` (HANDOFF/STATE/DECISIONS/ARCHITECTURE/CONVENTIONS/PITFALLS/DOMAIN/HISTORY).

## Planungs-Format
- 1 UE = 1 Doppelstunde (2 h). Semesterplan = **13 echte UE + 2 PLF-DS** (+ optionale Bonus-UE).
- UE-Tabellen: `| UE | Thema | KM-Bezug (Schuladaption ②) | Inhalt / HÜ |`, gruppiert in Blöcken mit `## UE a–b: Titel`.
- Reservierte DS als eigene Tabelle (`R1 = PLF 1`, `R2 = PLF 2`); PRE des Kollegen nur als „PRE-Parallelnotiz (Soll)", niemals als UE ausarbeiten.
- KM-Steckbrief-Struktur (voll): Worum geht es? / Wofür in der Praxis? / Inhalte (Wissen-Verstehen-Können) / PRE-Soll (Kollege) / Ressourcen & Stack / Vorwissen-Mitnahme.

## Lehrplan-Regeln
- Verbindlich ist ① (RIS-Extrakt); Abdeckungstabellen beziehen sich auf ② (Schuladaption) mit Rückverweis auf ①.
- RIS-Rechtsstand jährlich (Sommerferien) gegen die konsolidierte Fassung prüfen (Links in `docs/lehrplan/RIS.md`).
- Rechtsgrundlage korrekt zitieren: „BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019, Anlage 1.24".

## Code (Unterrichtsbeispiele)
- Deno + TypeScript; deutsche Kommentare; `deno fmt` (2 Spaces, doppelte Anführungszeichen); Tests mit `Deno.test` + `jsr:@std/assert`; Benchmarks mit `Deno.bench`.
