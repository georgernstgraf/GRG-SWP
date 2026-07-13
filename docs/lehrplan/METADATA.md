# Metadaten zum Lehrplan – SWP (Wirtschaftsingenieure Betriebsinformatik)

## Rechtliche Grundlage

| Feld | Wert |
|------|------|
| **Kundmachungsorgan** | BGBl. II Nr. 262/2015 |
| **Datum der Kundmachung** | 17. September 2015 |
| **Titel** | Lehrplanpaket der Höheren technischen und gewerblichen Lehranstalten 2015 |
| **Spezifischer Lehrplan** | Anlage 1.24 — Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik |
| **Fach in diesem Repo** | Softwareentwicklung und Projektmanagement (SWP) |

> Gleiche Rechtsgrundlage wie INFI (gleiche Anlage 1.24, gleiche Kohorte). Die rechtlichen Details, RIS-Verweise und die Abgrenzung zur Anlage 1.28 (Technisches Management) siehe im INFI-Repo: [`GRG-INFI/docs/lehrplan/METADATA.md`](https://github.com/georgernstgraf/GRG-INFI/blob/main/docs/lehrplan/METADATA.md).

## Stundentafel (HTL Spengergasse, schulautonom)

| Fach | I. | II. | III. | IV. | V. | Summe |
|------|----|-----|------|-----|-----|-------|
| **Softwareentwicklung und Projektmanagement** | 2 | 2 | 4 | 4 | 6 | 18 |

Quelle: https://www.spengergasse.at/?page_id=2085 (schulautonome Stundentafel „Betriebsinformatik").

> SWP ist mit **18 Wochenstunden Gesamt** das höchst-dotierte Informatik-Fach der WII und in Jg V mit 6 Std. am stärksten.

## Kompetenzmodule und Bereiche (Fach: SWP)

Das Fach verschränkt **drei Bereiche**, die über die Jahrgänge verteilt sind:

| Jahrgang | Semester | KM | Bereiche (laut Lehrplan) |
|----------|----------|----|---------------------------|
| I. | 1. + 2. | — | **Strukturierte Programmierung** (Datentypen, Kontrollstrukturen, Algorithmus, Modularisierung, zusammengesetzte Datentypen) |
| II. | 3. | KM3 | **Webtechnologien** – statische Webseiten, HTML/CSS, Datenformate |
| II. | 4. | KM4 | **Webtechnologien** – clientseitige Logik, komplexes Styling, Responsive |
| III. | 5. | KM5 | **Objektorientierte Programmierung** (Vererbung, Polymorphismus, Collections) + **SWP** (Modellierung/UML) |
| III. | 6. | KM6 | **OOP** (GUI, parallele Abläufe) + **SWP** (Projektmanagement-Basics, erstes Teamprojekt) |
| IV. | 7. | KM7 | **OOP** (wiederverwendbare Komponenten, Standardalgorithmen) + **SWP** (Entwurfsmuster, Vorgehensmodelle) |
| IV. | 8. | KM8 | **Webtechnologien** (serverbasierende Internetanwendungen) + **SWP** (Testen, QM, Projekt) |
| V. | 9. | KM9 | **Webtech** (Webservices) + **OOP** (Design-Pattern-Umsetzung) + **SWP** (Refactoring, Projekt) |
| V. | 10. | KM9 | **Webtech** (dynamische Webanwendungen) + **OOP** (Komponenten) + **SWP** (Projekt) |

> Die Bereiche **OOP**, **Webtechnologien** und **Softwareentwicklung/Projektmanagement (PRE)** laufen ab Jg III parallel und bauen aufeinander auf. „PRE" = der Projektmanagement-Anteil im Fach.

## Planungskonvention

- **Einheiten pro Semester:** ca. **12 thematische Doppelstunden** (Netto nach Abzug administrativer Termine, Tests, PLF, Ferien).
- **Dokumente pro Jahrgang:** jeweils `jgN-einheiten.md` mit ~12 Einheiten pro Semester, verknüpft mit dem offiziellen Lehrstoffpunkt und dem archivierten Unterricht.
- **Selbsttragend:** [`LEHRPLAN.md`](LEHRPLAN.md) enthält den vollständigen offiziellen Lehrstoff aller Jahrgänge, sodass eine spätere Session nur diese Datei benötigt, um weitere `jgN-einheiten.md` zu generieren.

## Technologie-Stack (pädagogische Entscheidung SJ 2026/27)

| Schicht | Werkzeug |
|---------|----------|
| Sprache | **TypeScript** (statt C#/.NET wie in früheren Jahrgängen) |
| Runtime | **Deno** |
| Persistenz | **Prisma + SQLite** (in Koordination mit INFI) |
| Web/GUI | Hono (Jg II) → **Deno Desktop** ab Jg III KM6 |
| Tests | `Deno.test` |

> **Wichtige Entscheidung ab SJ 2026/27:** Jg III (OOP, KM5+KM6) wird durchgehend mit **Deno/TypeScript** unterrichtet (nicht mehr C#/.NET). Damit bleibt der Stack über alle Jahrgänge einheitlich und die OOP baut nahtlos auf Jg II (Web/TS) auf. Für die GUI-Komponente (KM6 „grafische Oberflächen") kommt **Deno Desktop** (offiziell seit Deno 2.9) zum Einsatz. Die C#-basierte Variante liegt archiviert unter `ARCHIV/2025-26-3ahwii/` als Referenz.

## Dateien in diesem Verzeichnis

| Datei | Beschreibung |
|-------|--------------|
| `METADATA.md` | Diese Datei |
| `LEHRPLAN.md` | Offizieller Lehrstoff SWP für alle Jahrgänge (I–V) – die QUELLE |
| `HWII_SWP.pdf` / `HWII_INFI.pdf` | Original-PDFs der Schule (Quellen) |
| `jg2-einheiten.md` | 2. Klasse (KM3+KM4 Webtechnologien) – Rückpflege aus SJ 2025/26 |
| `jg3-einheiten.md` | 3. Klasse (KM5+KM6 OOP+PM) – **Priorität SJ 2026/27, OOP mit Deno/TS** |
| `jg4-einheiten.md` | 4. Klasse (KM7+KM8) – Stub |
| `jg5-einheiten.md` | 5. Klasse (KM9) – Stub |