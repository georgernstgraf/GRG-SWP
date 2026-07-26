# Metadaten zum Lehrplan – SWP (Wirtschaftsingenieure Betriebsinformatik)

## Rechtliche Grundlage

| Feld | Wert |
|------|------|
| **Kundmachungsorgan** | **BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019** |
| **Datum der Kundmachung** | 17. September 2015 (235/2019: 9. August 2019, nur Deutschförderklasse-Anhang) |
| **Titel** | Lehrplanpaket der Höheren technischen und gewerblichen Lehranstalten 2015 |
| **Spezifischer Lehrplan** | Anlage 1.24 — Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik |
| **Fach in diesem Repo** | Softwareentwicklung und Projektmanagement (SWP) |
| **Geltungs-Check** | **aktuell, nicht obsolet** — Recherche, Novellen-Historie, RIS-Links: [`RIS.md`](RIS.md) |

> Gleiche Rechtsgrundlage wie INFI (gleiche Anlage 1.24, gleiche Kohorte). Die rechtlichen
> Details und die Abgrenzung zur Anlage 1.28 (Technisches Management) siehe im INFI-Repo:
> [`GRG-INFI/docs/lehrplan/METADATA.md`](https://github.com/georgernstgraf/GRG-INFI/blob/main/docs/lehrplan/METADATA.md).

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
Unterrichtet-Status: [`../../kompetenzmodule/README.md`](../../kompetenzmodule/README.md)):

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
- **Dokumente:** Klassen-Drehscheibe `3HWII/README.md` + `semesterplan-ws.md` /
  `semesterplan-ss.md` (PMM-Format), konzeptionelle Steckbriefe in `kompetenzmodule/kmN.md`.
- **Selbsttragend:** [`LEHRPLAN.md`](LEHRPLAN.md) enthält den offiziellen Lehrstoff (Schicht ①)
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

## Dateien in diesem Verzeichnis

| Datei | Beschreibung |
|-------|--------------|
| `METADATA.md` | Diese Datei |
| `LEHRPLAN.md` | Lehrstoff **dreischichtig**: ① offizieller Extrakt (RIS) · ② Schuladaption · ③ Didaktik/Stack — die QUELLE |
| `RIS.md` | **Rechtsstand & Recherche** (Novellen-Historie, RIS-Links, Schichten-Vergleich) |
| `HWII_SWP.pdf` / `HWII_INFI.pdf` | Original-PDFs der Schule (Quellen der Schicht ②) |
| `jg2-einheiten.md` | 2. Klasse (KM3+KM4 Webtechnologien) – Rückpflege aus SJ 2025/26 |
| `jg4-einheiten.md` | 4. Klasse (KM7+KM8) – Stub/Gerüst |
| `jg5-einheiten.md` | 5. Klasse (KM9) – Stub/Gerüst |

> **Außerhalb dieses Verzeichnisses:** `kompetenzmodule/` (Matrix + Steckbriefe, Root) und
> `3HWII/` (Semesterpläne SJ 2026/27, Root). Das frühere `jg3-einheiten.md` wurde dorthin
> migriert (kein Informationsverlust) und gelöscht.
