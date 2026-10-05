# History

Chronological archive of superseded decisions and pruned entries.
Entries here are no longer active truth. Never delete from this file.

## 2026-07-26 (SUPERSEDED 2026-07-26, origin: docs/lehrplan/, reason: #7): 12-Einheiten-Modell und einschichtiger LEHRPLAN.md
- `docs/lehrplan/jg3-einheiten.md` (12 thematische Doppelstunden/Semester, INFI-Verbund, Deno Desktop) wurde verlustfrei migriert nach `3HWII/` (13 UE + 2 PLF-DS) und `kompetenzmodule/km5|km6.md`, danach gelöscht.
- `LEHRPLAN.md` war bisher einschichtig der Schuladaption ② gefolgt; ersetzt durch dreischichtige Fassung (① RIS offiziell · ② Schuladaption · ③ Didaktik/Stack).
- `METADATA.md` kannte Rechtsgrundlage nur als „BGBl. II Nr. 262/2015"; präzisiert auf „idF BGBl. II Nr. 235/2019".
- **Origin**: docs/lehrplan/
- **Reason**: Lehrplan-Werk SJ 2026/27 (Issue #7) — 13+2-Zeitmodell, Schichten-Trennung, RIS-Verifizierung

## 2026-07-26 (SUPERSEDED 2026-09-07): Planungs-Ablage PMM-Stil im Root
- **Choice**: `kompetenzmodule/` (Matrix + kmN.md-Steckbriefe) und `3HWII/` (README + semesterplan-ws/ss.md) als Top-Level-Ordner; Klassenordner groß geschrieben (Parallelklassen 3a/3b möglich).
- **Reason**: Bewährtes Format aus GRG-PMM; Root bleibt navigierbar.
- **Considered**: Alles unter `docs/lehrplan/` belassen.
- **Tradeoff**: Zwei Orte mit Lehrplan-Bezug (docs/lehrplan = Quelle/Rahmen, kompetenzmodule+3HWII = Umsetzung); durch Verlinkung gelöst.
- **Superseded by**: ADR 2026-09-07 — alles unter `lehrplan/` (Skill-Standard-Layout).

## 2026-09-14 (SUPERSEDED 2026-10-05): Teach-Workspace im Klassenordner
- **Choice**: Schülermaterial nach Teach-Skill-Layout in `3ahwii/teach/` (MISSION/RESOURCES/NOTES, learning-records/, assets/, reference/, lessons/); UE-Ordner verlinken die Lessons und halten Deno-Starter mit rot→grün-Tests.
- **Reason**: Ein Workspace pro Klasse deckt künftige UE ab (Assets/Glossar wiederverwendbar); klassenspezifisch pflegbar.
- **Considered**: `teach/` am Repo-Root (klassenunabhängig); Lessons direkt in UE-Ordnern (kein geteiltes Glossar/Assets).
- **Tradeoff**: Zweites Layout neben den UE-Ordnern; Bewirtschaftung (Learning-Records) diszipliniert nötig.
- **Superseded by**: ADR 2026-10-05 — Prepared Lessons unter `unterricht/`, teach-Workspace aufgelöst.
- **Note**: Der Lern-Record und die Domänen-Steckbriefe dieses Workspaces sind nur noch über die Git-History erreichbar.
