# Metadaten zum Lehrplan – SWP (Wirtschaftsingenieure Betriebsinformatik)

## Rechtliche Grundlage

| Feld | Wert |
|------|------|
| **Kundmachungsorgan** | **BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019** |
| **Datum der Kundmachung** | 17. September 2015 (235/2019: 9. August 2019, nur Deutschförderklasse-Anhang) |
| **Titel** | Lehrplanpaket der Höheren technischen und gewerblichen Lehranstalten 2015 |
| **Spezifischer Lehrplan** | Anlage 1.24 — Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik |
| **Fach in diesem Repo** | Softwareentwicklung und Projektmanagement (SWP) |
| **Zweig** | HWII (Wirtschaftsingenieure – Betriebsinformatik) — einziger unterrichteter Zweig |
| **Geltungs-Check** | **aktuell, nicht obsolet** — Recherche, Novellen-Historie, RIS-Links: [`swp-hwii/RIS.md`](swp-hwii/RIS.md) |

> Gleiche Rechtsgrundlage wie INFI (gleiche Anlage 1.24, gleiche Kohorte). Die rechtlichen
> Details und die Abgrenzung zur Anlage 1.28 (Technisches Management) siehe im INFI-Repo:
> [`GRG-INFI/lehrplan/METADATA.md`](https://github.com/georgernstgraf/GRG-INFI/blob/main/lehrplan/METADATA.md).

## Stundentafel (HTL Spengergasse)

| Fach | I. | II. | III. | IV. | V. | Summe |
|------|----|-----|------|-----|-----|-------|
| **Softwareentwicklung und Projektmanagement** | 2 | 2 | 4 | 4 | 6 | 18 |

Quellen: <https://www.spengergasse.at/?page_id=2085> und identisch die offizielle Stundentafel
der Anlage 1.24 (dort mit Fußnote 4: *„Mit Übungen in elektronischer Datenverarbeitung im
Ausmaß der in Klammern angeführten Wochenstunden"* — daher im RIS als 2(2)/2(2)/4(4)/4(4)/6(6)
dargestellt; Lehrverpflichtungsgruppe I).

> SWP ist mit **18 Wochenstunden Gesamt** das höchst-dotierte Informatik-Fach der WII und in
> Jg V mit 6 Std. am stärksten.

## Lehrer-Aufteilung (ab Jg III): 2 + 2

| Wer | Anteil | Bereiche |
|-----|--------|----------|
| **Georg** | 2 h/Woche (1 DS) | **OOP + Webtechnologien + UML-Klassendiagramm** |
| **Kollege** | 2 h/Woche | **PRE (Projektmanagement) + übrige Modellierung/UML-Diagrammtypen** |

Der PRE-Lehrstoff ist in den KM-Steckbriefen und Semesterplänen als **„Soll (Kollege)"**
sichtbar, wird hier aber **nicht ausgearbeitet**. In Jg I/II unterrichtet Georg die
2 Wochenstunden allein.

## Kompetenzmodule und Bereiche (Fach: SWP)

Das Fach verschränkt **drei Bereiche**, die über die Jahrgänge verteilt sind (Matrix mit
Unterrichtet-Status: [`swp-hwii/kompetenzmodule/README.md`](swp-hwii/kompetenzmodule/README.md)):

| Jahrgang | Semester | KM | Bereiche (Schuladaption ②) | Wer |
|----------|----------|----|-----------------------------|-----|
| I. | 1. + 2. | — | **Strukturierte Programmierung** | nein (Vorjahr) |
| II. | 3. | KM3 | **Webtechnologien** – statische Webseiten, HTML/CSS, Datenformate | Georg (SJ 2025/26) |
| II. | 4. | KM4 | **Webtechnologien** – clientseitige Logik, komplexes Styling, Responsive | Georg (SJ 2025/26) |
| III. | 5. | KM5 | **OOP** (Vererbung, Polymorphismus, Collections) + **Modellierung/UML** | **Georg** (+ Kollege: übrige Modellierung) |
| III. | 6. | KM6 | **OOP** (GUI, parallele Abläufe) + **PRE** (PM-Basics, Teamprojekt) | **Georg + Kollege (PRE)** |
| IV. | 7. | KM7 | **OOP** (Komponenten, Standardalgorithmen) + **PRE** (Entwurfsmuster, Vorgehensmodelle) | Georg + Kollege (voraussichtl.) |
| IV. | 8. | KM8 | **Webtechnologien** (serverbasierte Internetanwendungen) + **PRE** (Testen, QM, Projekt) | Georg + Kollege (voraussichtl.) |
| V. | 9. + 10. | KM9 | **Webtech** (Webservices, dynamische Webapps) + **OOP** (Patterns, Komponenten) + **PRE** (Refactoring, Projekt) | Georg + Kollege (voraussichtl.) |

> Die Bereiche **OOP**, **Webtechnologien** und **PRE** laufen ab Jg III parallel und bauen
> aufeinander auf. „PRE" = der Projektmanagement-Anteil im Fach (Kollege).

## Planungskonvention

- **Zeitmodell (Georgs Anteil, ab Jg III):** 1 DS/Woche à 2 h → **13 echte UE + 2 PLF-DS**
  pro Semester (Netto nach Abzug administrativer Termine und Ferien; 2 PLFs pro Semester).
- **Dokumente:** Klassen-Drehscheibe `swp-hwii/3HWII/README.md` + Semesterpläne
  `unterricht/HWII-SWP/jg3-semesterplan-{ws,ss}.md` (PMM-Format), Klassenextrakt
  `swp-hwii/3HWII/3HWII.lehrplan.md`, konzeptionelle
  Steckbriefe in `swp-hwii/kompetenzmodule/kmN.md`.
- **Selbsttragend:** [`swp-hwii/LEHRPLAN.md`](swp-hwii/LEHRPLAN.md) enthält den offiziellen Lehrstoff (Schicht ①)
  aller Jahrgänge plus Schuladaption (Schicht ②) und eine Generierungs-Anleitung (Schicht ③).

## Technologie-Stack (pädagogische Entscheidung SJ 2026/27)

| Schicht | Werkzeug |
|---------|----------|
| Sprache | **TypeScript** (Lehrplan ist sprach-agnostisch; Nachfolger von C#/.NET) |
| Runtime | **Deno** |
| Persistenz | **Prisma + SQLite** (in Koordination mit INFI) |
| Web/GUI | Hono (Jg II) → **Deno Desktop** ab Jg III KM6 (≥ 2.9; Fallback: Hono+Vite) |
| Tests | `Deno.test` (+ `Deno.bench` für Laufzeitanalysen) |

> **Wichtige Entscheidung ab SJ 2026/27:** Jg III (OOP, KM5+KM6) wird durchgehend mit
> **Deno/TypeScript** unterrichtet (nicht mehr C#/.NET). Damit bleibt der Stack über alle
> Jahrgänge einheitlich und die OOP baut nahtlos auf Jg II (Web/TS) auf. Die C#-basierte
> Variante liegt archiviert unter `ARCHIV/2025-26-3ahwii/` (und im Repo GRG-CS) als Referenz.

## Klassen-Zuordnung

| Zweig | Jahrgang | Kompetenzmodule | Klassenname | Status |
|-------|----------|-----------------|-------------|--------|
| HWII | I. | — | `1HWII` | nicht unterrichtet (Vorwissen StruktProg) |
| HWII | II. | KM3 + KM4 | `2HWII` (generisch) | unterrichtet SJ 2025/26 (archiviert) |
| HWII | III. | KM5 + KM6 | `3HWII` (generisch, deckt 3AHWII ab) | **aktiv SJ 2026/27** |
| HWII | IV. | KM7 + KM8 | `4HWII` (generisch) | Stub (Einheiten-Gerüst) |
| HWII | V. | KM9 | `5HWII` (generisch) | Stub (Einheiten-Gerüst) |

> **RIS-Status abgefragt am 2026-07-26:** Recherche gegen die konsolidierte Fassung der
> Anlage 1.24 (BGBl. II Nr. 262/2015 idF 235/2019) — Ergebnis: **aktuell, nicht obsolet**;
> Novellen-Historie geprüft bis 2026-07-26 (Details: [`swp-hwii/RIS.md`](swp-hwii/RIS.md)).
>
> **Layout seit 2026-09-07:** alles unter `lehrplan/` (Skill-Standard-Layout); zuvor lag
> die Rechtsquelle unter `docs/lehrplan/` und die Umsetzung am Root. Repo-GLOSSAR.md (Domänenbegriffe) liegt am Repo-Root.
>
> **Layout-Retrofit 2026-09-10** (lehrplan-Skill v2): Zweig-Ordner `swp-hwii/` angelegt —
> `LEHRPLAN.md`, `RIS.md`, `kompetenzmodule/` und die ②-PDFs (`HWII_SWP.pdf`,
> `HWII_INFI.pdf`) dorthin verschoben; Einheiten (`jg2/jg4/jg5-einheiten.md`) und
> Semesterpläne (`jg3-semesterplan-{ws,ss}.md`) wanderten nach `unterricht/HWII-SWP/`
> (Unterrichts-Ebene, Repo-Root).

## Dateien in diesem Verzeichnis

| Datei | Beschreibung |
|-------|--------------|
| `METADATA.md` | Diese Datei |
| `swp-hwii/LEHRPLAN.md` | Lehrstoff **dreischichtig**: ① offizieller Extrakt (RIS) · ② Schuladaption · ③ Didaktik/Stack — die QUELLE |
| `swp-hwii/RIS.md` | **Rechtsstand & Recherche** (Novellen-Historie, RIS-Links, Schichten-Vergleich) |
| `swp-hwii/HWII_SWP.pdf` / `swp-hwii/HWII_INFI.pdf` | Original-PDFs der Schule (Quellen der Schicht ②; letztere INFI-Referenz für Vorwissen) |
| `swp-hwii/kompetenzmodule/` | KM-Matrix (`README.md`) + Steckbriefe `km3.md`–`km9.md` (PMM-Format) |
| `swp-hwii/3HWII/` | Drehscheibe SJ 2026/27: `README.md` (Rahmen + INFI-Verbund), Klassenextrakt `3HWII.lehrplan.md` |
| `swp-hwii/4HWII/4HWII.lehrplan.md` | Klassenextrakt 4. Klasse (KM7+KM8) — Stub |
| `swp-hwii/5HWII/5HWII.lehrplan.md` | Klassenextrakt 5. Klasse (KM9) — Stub |
| `unterricht/HWII-SWP/jg2-einheiten.md` | 2. Klasse (KM3+KM4 Webtechnologien) – Rückpflege aus SJ 2025/26 |
| `unterricht/HWII-SWP/jg4-einheiten.md` | 4. Klasse (KM7+KM8) – Stub/Gerüst |
| `unterricht/HWII-SWP/jg5-einheiten.md` | 5. Klasse (KM9) – Stub/Gerüst |
| `unterricht/HWII-SWP/jg3-semesterplan-{ws,ss}.md` | Semesterpläne 3. Klasse (KM5/KM6, aktiv SJ 2026/27) |

> **Erläuterungs-Ebene 2026-09-14:** `LEHRPLAN.md` und alle Klassenextrakte tragen jetzt
> die vollständige Annotations-Ebene (`> **Überblick:**` pro KM, `> **Erläuterung:**` pro
> Lernziel/Lehrstoff-Bereich) gemäß lehrplan-Skill (Aufgabe 2); Substanz aus den
> KM-Steckbriefen.
>
> Das frühere `jg3-einheiten.md` wurde nach `3HWII/` (Semesterpläne) und
> `kompetenzmodule/` (Abdeckung) migriert (kein Informationsverlust) und gelöscht.
