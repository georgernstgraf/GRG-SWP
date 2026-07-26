# Decisions

Active architectural and technical decisions still in force.
Superseded decisions are relocated to HISTORY.md.

## 2026-07-26: 2+2-Lehrer-Split ab Jahrgang III
- **Choice**: Von 4 SWP-Wochenstunden (Jg V: 6) unterrichtet Georg 2 h (Bereiche OOP + Web + UML-Klassendiagramm), ein Kollege 2 h (Bereich PRE/Projektmanagement + übrige Modellierung).
- **Reason**: Kollege übernimmt den Projektmanagement-Teil; Georg die Softwareentwicklung.
- **Considered**: Alles bei Georg (Stand SJ 2025/26 in Jg II).
- **Tradeoff**: PRE-Lehrstoff wird im Repo nur als „Soll (Kollege)" sichtbar gemacht, nicht ausgearbeitet; Koordinationsbedarf beim Verbundprojekt (offener Punkt in `3HWII/README.md`).

## 2026-07-26: Zeitmodell 13 echte UE + 2 PLF-DS pro Semester
- **Choice**: Georgs Anteil = 1 Doppelstunde/Woche; Semesterplan = 13 echte Unterrichtseinheiten + 2 reservierte PLF-Doppelstunden; keine Einstiegstest-Reserve (Diagnostik in UE 1 integriert); 2 PLFs pro Semester.
- **Reason**: PMM-Modell (bewährt in GRG-PMM): 18 Schulwochen → ~15 DS netto.
- **Considered**: ~12 thematische Doppelstunden ohne explizite Reserve (altes jg3-Modell); 1 PLF + Einstiegstest.
- **Tradeoff**: Weniger thematische UE als das naive 18-Wochen-Maximum; Ausfälle sind einkalkuliert.

## 2026-07-26: Planungs-Ablage PMM-Stil im Root
- **Choice**: `kompetenzmodule/` (Matrix + kmN.md-Steckbriefe) und `3HWII/` (README + semesterplan-ws/ss.md) als Top-Level-Ordner; Klassenordner groß geschrieben (Parallelklassen 3a/3b möglich).
- **Reason**: Bewährtes Format aus GRG-PMM; Root bleibt navigierbar.
- **Considered**: Alles unter `docs/lehrplan/` belassen.
- **Tradeoff**: Zwei Orte mit Lehrplan-Bezug (docs/lehrplan = Quelle/Rahmen, kompetenzmodule+3HWII = Umsetzung); durch Verlinkung gelöst.

## 2026-07-26: Lehrplan-Doku dreischichtig
- **Choice**: `docs/lehrplan/LEHRPLAN.md` = ① getreuer RIS-Extrakt (verbindlich) + ② Schuladaption (`HWII_SWP.pdf`) + ③ Didaktik/Stack; Abweichungen in `docs/lehrplan/RIS.md` tabelliert.
- **Reason**: Der bisherige Extrakt folgte ungekennzeichnet der Schuladaption, die vom offiziellen Text abweicht (Web ab Jg I, StruktProg bis KM4).
- **Considered**: Nur Schuladaption als alleinige Wahrheit.
- **Tradeoff**: Längeres Dokument; Abdeckungstabellen beziehen sich auf ② mit Rückverweis auf ①.

## 2026-07-26: jg3-einheiten.md nach Migration gelöscht
- **Choice**: Inhalte verlustfrei verteilt (Einheiten → `3HWII/semesterplan-*.md`, INFI-Verbund → `3HWII/README.md`, Abdeckung → `kompetenzmodule/km5.md`/`km6.md`, Jg-IV-Ausblick → km7/km8-Gerüste), dann Datei gelöscht.
- **Reason**: Doppelte Wahrheit vermeiden; 13-UE-Format ersetzt das 12-Einheiten-Format.
- **Considered**: jg3 als Verweis-Stub behalten.
- **Tradeoff**: Historischer Plan nur noch in der Git-History.

## 2026-07-26: UML-Aufteilung Georg/Kollege
- **Choice**: UML-**Klassendiagramm** unterrichtet Georg (untrennbar von OOP); andere UML-Diagrammtypen (Workflows, Flussdiagramme) der Kollege.
- **Reason**: Georg will das Klassendiagramm explizit unterrichten; Rest gehört fachlich zu PRE/Modellierung.
- **Considered**: Ganz bei Georg; ganz beim Kollegen.

## 2026-07-26: INFI-Verbund beibehalten, PM dem Kollegen
- **Choice**: Gemeinsames Abschlussprojekt mit INFI („eine App, zwei Noten") bleibt; PM-Rahmung (Rollen, Issues, PM-Dokumente) kommt vom PRE-Kollegen.
- **Reason**: Verbund ist didaktischer Kern (Repository-Brücke, TPH/O-R-Mapping); PM ist Lehrstoff des Kollegen.
- **Considered**: Verbund ohne PM-Rahmen; Verbund streichen.
- **Tradeoff**: Koordination mit Kollegen erforderlich (TBD in `3HWII/README.md`).

## 2026-07-26: Spiegel-Session für GRG-INFI vorgesehen
- **Choice**: Dieselbe Lehrplan-Arbeit wird in `../GRG-INFI` in einer eigenen Session (aus dem INFI-Repo heraus) durchgeführt; Auftrag + RIS-Befund liegen fertig in `GRG-INFI/docs/ai/HANDOFF.md`.
- **Reason**: INFI-Repo hat eigene AGENTS.md-Konventionen; RIS-Recherche (gleiche Anlage 1.24) muss nicht wiederholt werden.
- **Considered**: Sofort in derselben Session von GRG-SWP aus.
- **Tradeoff**: Zwei Sessions nötig.
