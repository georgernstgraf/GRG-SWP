# Pitfalls

Things that do not work, subtle bugs, and non-obvious constraints.
Read this file carefully before making changes in affected areas.

- RIS: Die konsolidierte Gesamt-Rechtsvorschrift (Gesetzesnummer 20009288) ist > 5 MB — nie ganz fetchen. Stattdessen das Einzel-Dokument `NOR40217058` (Anlage 1.24) holen; ELI-URLs ohne NOR (z. B. `/eli/bgbl/ii/2015/262/ANL1_24`) liefern 404.
- RIS-Dump ist plattes HTML ohne Struktur: „I. Jahrgang" wird zu „I", „II. Jahrgang" wird zum Trenner „II" — beim Parsen immer auch den Folgetext prüfen (Jahrgang vs. römische Zahl des nächsten Abschnitts).
- Stundentafel-Serialisierung im RIS („4.Softwareentwicklung und Projektmanagement42(2)2(2)…18I"): die führende 4 nach dem Fachnamen ist die **Fußnotenmarke 4** (EDV-Übungen), nicht eine Stundenzahl. Wirklich: 2(2)/2(2)/4(4)/4(4)/6(6) = 18.
- `docs/lehrplan/HWII_SWP.pdf` ist das schulinterne Kuratieren (Schicht ②), **nicht** der offizielle Lehrplan — beim Zitieren immer kennzeichnen, aus welcher Schicht ein Lehrstoffpunkt stammt.
- PDFs in diesem Repo nicht mit dem Read-Tool lesen (kein PDF-Support): `pdftotext -layout <file> -` verwenden.
- Relative Links zwischen `docs/lehrplan/`, `kompetenzmodule/` und `3HWII/` brauchen `../../` — nach dem Verschieben/Löschen von Dateien Link-Check laufen lassen (siehe Verifikation in STATE.md).
- Links mit Umlauten/Klammern (`Testdata_(Generators)/`, `...%20übung...`) schlagen naive Link-Checker fehl — Fehlalarme, Ziele existieren.
