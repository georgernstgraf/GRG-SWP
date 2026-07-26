# GRG-SWP – Softwareentwicklung & Projektmanagement

Unterrichtsrepo für das Fach **SWP (Softwareentwicklung und Projektmanagement)** an der
**HTL Spengergasse**, Abteilung **Wirtschaftsingenieure – Betriebsinformatik (WII)**.

---

## Beurteilung

Die Note setzt sich aus drei gleich gewerteten Bereichen zusammen:

| Bereich | Gewicht |
|---|---|
| PLF (Praxis-Leistungs-Feststellung) | 1/3 |
| Hausübungen | 1/3 |
| Mitarbeit | 1/3 |

Mitarbeit umfasst auch Schulübungen und Stundenwiederholungen; deren Qualität und
Intensität werden von der Lehrperson beurteilt.

## Hausübungen

- **Abgabe:** spätestens am nächsten Unterrichtstag **00:00 Uhr** (in der Regel eine Woche später).
- **Nachreichung:** jederzeit möglich – die erreichte Punktezahl zählt **75 %**.
- **Cutoff:** Genau **eine Woche vor dem Notenschluss, 00:00 Uhr**, ist Endtermin.
  Danach werden die Repos automatisiert ausgewertet.

## Organisatorisches

- **Toilettengang:** wortlos aufstehen, Blickkontakt mit der Lehrperson.
- **Rückmeldung** zu automatisierten E-Mails und nachgereichten Arbeiten bitte als
  Antwort auf das Roboter-E-Mail.

---

## Übersicht

> Unterricht SJ 2025/26 ist archiviert unter [`ARCHIV/`](ARCHIV/). Der Rahmenlehrplan und die Einheitenplanung liegen unter [`docs/lehrplan/`](docs/lehrplan/).

| Kohorte (SJ 2025/26) | archiviert unter | Schwerpunkte |
|--------|------|--------------|
| **2AHWII** | [`ARCHIV/2025-26-2ahwii/`](ARCHIV/2025-26-2ahwii/) | HTML/CSS, JavaScript, TypeScript, DOM, Promises, Fetch, Hono, Prisma-Vertiefung |
| **3AHWII** | [`ARCHIV/2025-26-3ahwii/`](ARCHIV/2025-26-3ahwii/) | C#/.NET, OOP, xUnit-Tests, Prisma-Intro, opencode |
| **5AHWII X/Y** | [`ARCHIV/2025-26-5ahwii_X/`](ARCHIV/2025-26-5ahwii_X/), [`…_Y/`](ARCHIV/2025-26-5ahwii_Y/) | Prisma ORM, Deno, REST-APIs, Full-Stack-Web, Regex, Agentic Coding |
| 5AHWII (alle) | [`ARCHIV/2025-26-5ahwii_alle/`](ARCHIV/2025-26-5ahwii_alle/) | Maturavorbereitung, PLF-Übungen (Parkhaus, Non-Decided) |

**Geplant für SJ 2026/27:** 3AHWII (aus 2AHWII) – OOP mit **Deno/TypeScript** (nicht C#), GUI via **Deno Desktop**; in Verbundführung mit INFI; 2+2-Split mit PM-Kollegen. Siehe [`3HWII/`](3HWII/) (Semesterpläne) und [`kompetenzmodule/`](kompetenzmodule/) (KM-Matrix + Steckbriefe).

---

## 2AHWII – Grundlagen Web & JavaScript *(archiviert SJ 2025/26)*

Ordnername: [`ARCHIV/2025-26-2ahwii/`](ARCHIV/2025-26-2ahwii/)

Im ersten Jahr SWP werden die Grundlagen der Webentwicklung und
Programmierung mit JavaScript / TypeScript vermittelt.

**Themen:**
- HTML, CSS (Boxmodell, Flexbox, Grid, Selektoren)
- JavaScript: Datentypen, Kontrollstrukturen, Funktionen, Arrays, Objekte
- Debugging in VSCode
- Lambda-Funktionen
- DOM-Manipulation
- Promises, `async`/`await`
- Transpilierung (TypeScript)
- Fetch-API, REST-Clients
- Hono mit SQLite

Enthaltene Übungsbeispiele: Brüche, Bruchrechnen, Noten-Sampling,
HTML-Seiten, Todo-Apps, Fetch-Übungen u.v.m.

---

## 3AHWII – C#/.NET & OOP *(archiviert SJ 2025/26; C#-Variante)*

Ordnername: [`ARCHIV/2025-26-3ahwii/`](ARCHIV/2025-26-3ahwii/)

Im zweiten Jahr liegt der Fokus auf **C# und dotnet** sowie auf
**objektorientierter Programmierung**.

**Themen:**
- .NET Console-Apps
- OOP: Klassen, Instanzen, Konstruktoren, Vererbung
- Bruchklasse mit Operatoren
- xUnit-Tests, Debugger-Konfiguration
- Exception-Handling (`throw`, `try`/`catch`)
- CLI-Argumente parsen
- Später im Jahr: Deno, TypeScript, Prisma ORM

Danach geht es im Repo [GRG-CS](https://github.com/georgernstgraf/GRG-CS) weiter.

---

## 5AHWII – Full-Stack-Webentwicklung

In der 5. Klasse wird mit **Prisma ORM, Deno und TypeScript**
full-stack entwickelt. Die Klasse ist in zwei Gruppen geteilt:

### Gruppe X – [`ARCHIV/2025-26-5ahwii_X/`](ARCHIV/2025-26-5ahwii_X/)

- Prisma-Schema-Design, Migrationen, Seeding
- Quiz-Projekt mit opentdb.com-Daten
- REST-APIs mit Hono
- Regex, CSS Grid/Flexbox, Exceptions
- Agentic Coding mit opencode
- Tooltips, Router

### Gruppe Y – [`ARCHIV/2025-26-5ahwii_Y/`](ARCHIV/2025-26-5ahwii_Y/)

- Prisma Recap, Airline-Datenmodell
- Lift Kata (Samman Coaching)
- Flug-API mit Repository-Schicht
- CSS Positioning, Grid Garden
- Parkhaus-Aufgabe

### Gemeinsam – [`ARCHIV/2025-26-5ahwii_alle/`](ARCHIV/2025-26-5ahwii_alle/)

- PLF-Übungen und Maturavorbereitung

---

## Beispielprojekte – [`Sample_Projects/`](Sample_Projects/)

Komplette Anwendungen als Referenz für die Schüler:

- **[Game of Life](Sample_Projects/gameoflife/)** – Vanilla JS, Canvas
- **[John's Bar](Sample_Projects/JohnsBar/)** – Deno + Prisma + SQLite (Full-Stack)
- **[Mastermind](Sample_Projects/Mastermind/)** – Spielelogik in JS
- **[Ticketautomat](Sample_Projects/Ticketautomat/)** – Zustandslogik
- **[Taschenrechner WDS](Sample_Projects/Taschenrechner_WDS/)** – Web-Calculator
- **[Todo App (styled)](Sample_Projects/todo_app_styled/)** – Stylishe Todo-Liste
- **[Todo App WZR](Sample_Projects/Todo_App_WZR_Style/)** – Alternativer Todo-Stil

---

## Prisma-Demos – [`Coole_Prisma_Schemas/`](Coole_Prisma_Schemas/)

Datenbank-Schema-Entwürfe und vollständige Mini-Apps:

- **ZOO** – Express + EJS + Prisma (vollständige Web-App)
- **Airline** / **Bank** / **Watchlist** / **Game-Player-Score**
- **Person_Mutter_Vater** – Vererbung im Datenmodell

---

## Unterrichtsmaterialien – [`Unterlagen/`](Unterlagen/)

- PDF-Folien zu HTML, CSS (Boxmodell, Flexbox, Grid, Bootstrap)
- CSS Selector Cheat Sheets
- C#-Skriptum
- HTTP-Folien und Open-APIs-Listen
- Vanilla-JS-Frontend-Leitfaden (7 Punkte für GRG / 8 Punkte für WZR)
- opencode-Befehlsreferenz

---

## Übungen & Testdaten

- [`Übungen/`](Übungen/) – Aufgabenblätter (z. B. Fibonacci)
- [`Testdata_(Generators)/`](Testdata_(Generators)/) – Skripte zum Erzeugen von
  Testdaten: Labyrinthe (JSON), Personendaten, Spielkarten

---

## Organisatorisches

- [`PROJECT_CONTRIBUTIONS.md`](PROJECT_CONTRIBUTIONS.md) – Leitfaden für Issues und PRs
- [`docs/lehrplan/`](docs/lehrplan/) – Rahmenlehrplan (Anlage 1.24, dreischichtig) + Rechtsstand-Recherche ([`RIS.md`](docs/lehrplan/RIS.md)) + Einheitenplanung pro Jahrgang; Quelle: [`LEHRPLAN.md`](docs/lehrplan/LEHRPLAN.md), Metadaten: [`METADATA.md`](docs/lehrplan/METADATA.md)
- [`kompetenzmodule/`](kompetenzmodule/) – KM-Matrix (Semester↔Klasse↔KM↔Wer) + didaktische Steckbriefe
- [`3HWII/`](3HWII/) – Drehscheibe + Semesterpläne SJ 2026/27 (KM5/KM6, 13 UE + 2 PLF, INFI-Verbund)

---

## Sonstiges

- [`deno-prisma7-kaputt/`](deno-prisma7-kaputt/) – Experimentelles Setup
  Deno + Prisma 7 („kaputt“ = Work-in-Progress)
- `GRG-SWP.sln` – Visual Studio Solution (für C#-Teile)

---

*HTL Spengergasse, Abteilung Wirtschaftsingenieure – Betriebsinformatik (WII)*
