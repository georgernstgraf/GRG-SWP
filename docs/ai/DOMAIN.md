# Domain Knowledge

Business rules and domain relationships not obvious from code.

## Entities
- **Fach SWP**: „Softwareentwicklung und Projektmanagement", HTL Spengergasse, Abteilung Wirtschaftsingenieure – Betriebsinformatik (WII); 18 Wochenstunden gesamt (2/2/4/4/6 über Jg I–V).
- **Kompetenzmodule (KM)**: semesterweise Lehrplan-Einheiten ab Jg II; SWP deckt KM3–KM9 ab (Jg I ohne KM-Nummer).
- **Bereiche**: OOP · Webtechnologien · PRE (= Softwareentwicklung und Projektmanagement im engeren Sinn, Projektmanagement-Anteil).
- **Lehrer-Aufteilung (ab Jg III)**: Georg 2 h (OOP+Web+UML-Klassendiagramm), PRE-Kollege 2 h (PRE + übrige Modellierung).
- **Kohorte 3HWII**: 2024/25 Jg I (anderer Lehrer) → 2025/26 2AHWII (Georg, TS/Web) → 2026/27 3AHWII (Georg OOP mit Deno/TS + Kollege PRE).
- **INFI-Verbund**: dieselbe Kohorte hat parallel INFI (Jg III = Datenbanken); gemeinsamer Stack (Deno/TS/Prisma/SQLite); Abschlussprojekt „eine App, zwei Noten" (SWP: OOP+GUI+Repository-Interface; INFI: Prisma-Implementierung+Abfragen).

## Rules
- Lehrplan ist sprach-agnostisch; Sprachwahl (TypeScript statt C# ab SJ 2026/27) ist pädagogische/schulautonome Entscheidung, keine Lehrplanvorgabe.
- Schuladaption (`HWII_SWP.pdf`) schichtet offiziellen Lehrstoff um: Web vollständig nach Jg II (offiziell ab Jg I), StruktProg vollständig nach Jg I (offiziell bis KM4); KM5 um Schnittstelle/Zustand/Collections/Laufzeitanalysen angereichert.
- Verbindlich bleibt immer der offizielle RIS-Text (Schicht ①); die Schuladaption (②) ist über die schulautonome Klausel der Anlage 1 gedeckt.
- Verbund-Domäne wird mit Schülern abgestimmt (5 Kandidaten mit Hierarchie + Zustandsautomat: Bibliothek, Online-Shop, Musik-Streaming, Schulverwaltung, Tierpension).
- Prisma kennt keine Vererbung → TPH (Single-Table Inheritance) + Mapper-Funktion im Repository; INFI-Normalisierung (3NF) wird dabei bewusst verletzt — didaktischer Kernpunkt.
- Beurteilung: PLF / Hausübungen / Mitarbeit je 1/3; HÜ-Abgabe nächster Unterrichtstag 00:00; Nachreichung 75 %; Cutoff 1 Woche vor Notenschluss.
