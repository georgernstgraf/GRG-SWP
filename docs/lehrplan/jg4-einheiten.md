# 4. Klasse – Einheitenplan (KM7 + KM8) — Stub

> **Status:** Stub / Gerüst. Wird in einer späteren Session aus [`LEHRPLAN.md`](LEHRPLAN.md) befüllt.
> **Bereiche in Jg IV:** OOP (wiederverwendbare Komponenten, Standardalgorithmen) + **Webtechnologien** (server-basierende Internetanwendungen) + **SWP** (Entwurfsmuster, Vorgehensmodelle, Testen, QM).
> **Stack:** Deno/TypeScript weiter; serverseitig Hono/Prisma (aus Jg II/III bekannt).
> **Wochenstunden:** 4 → **~12 Einheiten/Semester**.

---

## 7. Semester – Kompetenzmodul 7

**Lehrstoff (Soll, aus `LEHRPLAN.md`):**
- *OOP:* wiederverwendbare Komponenten (Architektur, Einbindung, Auswahl); Standardalgorithmen objektorientiert implementieren.
- *SWP:* Softwareentwicklungsmodelle (Methoden-Vergleich, Schätzverfahren, Anforderungsanalyse); **Entwurfsmuster** (Anwendungsfälle, Vor-/Nachteile gängiger Patterns).

### Einheiten (zu befüllen)

| # | Themenvorschlag | Bereich | Lehrplan-Bezug |
|---|------------------|---------|-----------------|
| 7.1 | Einführung Design Patterns (Katalog, GoF) | SWP | Entwurfsmuster |
| 7.2 | Strategy / Template-Method (Verhalten) | SWP | Entwurfsmuster |
| 7.3 | Factory / Singleton (Erzeugung) | SWP | Entwurfsmuster |
| 7.4 | Observer / Decorator (Struktur) | SWP | Entwurfsmuster |
| 7.5 | wiederverwendbare Komponenten (Architektur) | OOP | Komponenten |
| 7.6 | Standardalgorithmen OOP (Suchen/Sortieren) | OOP | Standardalgorithmen |
| 7.7 | Vorgehensmodelle (Wasserfall vs. agil vs. …) | SWP | SW-Modelle |
| 7.8 | Schätzverfahren (Story Points, Planning Poker) | SWP | Schätzverfahren |
| 7.9 | Anforderungsanalyse (User Stories, Use Cases) | SWP | Anforderungsanalyse |
| 7.10 | Patterns in der Praxis (Refactoring zu Pattern) | SWP | Entwurfsmuster |
| 7.11 | Übungsprojekt: Patterns einsetzen | OOP+SWP | Gesamtschau |
| 7.12 | PLF / Mock-PLF Patterns+Komponenten | KM7 | Gesamtschau |

---

## 8. Semester – Kompetenzmodul 8

**Lehrstoff (Soll, aus `LEHRPLAN.md`):**
- *Webtechnologien:* server-basierende Internetanwendungen (Client-/Server, serverseitige Programmierung, Datenbankanbindung, Technologie-Vergleich).
- *SWP:* Softwarequalitätsmanagement (Methoden, Testverfahren); Projektmanagement (Verträge, Softskills); Team-Projekt.

### Einheiten (zu befüllen)

| # | Themenvorschlag | Bereich | Lehrplan-Bezug |
|---|------------------|---------|-----------------|
| 8.1 | Client-/Server-Architektur (Repetition) | Web | C/S-Konzept |
| 8.2 | serverseitige Programmierung (Hono vertieft) | Web | serverseitig |
| 8.3 | Datenbankanbindung (Prisma + Repository) | Web | DB-Anbindung |
| 8.4 | Technologie-Vergleich (Deno vs. andere) | Web | Technologie-Vergleich |
| 8.5 | Testverfahren (Unit/Integration/E2E) | SWP | Testverfahren |
| 8.6 | Softwarequalitätsmanagement | SWP | QM-Methoden |
| 8.7 | xUnit-Tests / Deno.test vertieft | SWP | Testen |
| 8.8 | Projektmanagement: Verträge, Softskills | SWP | PM |
| 8.9 | Team-Projekt: Konzept (Issue-Backlog, Rollen) | SWP | Team-Projekt |
| 8.10 | Team-Projekt: Implementation | SWP | Team-Projekt |
| 8.11 | Team-Projekt: Tests + QM | SWP | Team-Projekt |
| 8.12 | PLF / Projektabschluss 8. Sem | KM8 | Gesamtschau |

---

## Notiz für die befüllende Session

Anleitung zum Ausfüllen: siehe [`LEHRPLAN.md`](LEHRPLAN.md) Abschnitt „Anleitung". Vorab zu klären:
1. Mitnahme aus Jg III (OOP-Werkzeugkasten, Repository, Deno Desktop) explizit verankern.
2. Koordination mit INFI Jg IV: Achtung – INFI Jg IV wechselt in **ERP-Domäne**, deshalb entfällt der Verbund mit INFI ab Jg IV. SWP läuft domänentechnisch eigenständig (server-basierte Web-Apps, Patterns).
3. Patterns-Schwerpunkt: welche GoF-Patterns verpflichtend? (Strategy, Factory, Singleton, Observer, Decorator sind der übliche Kanon.)
4. Server-Stack: Hono weiter, oder Vite/SSR-Framework (vgl. `LEHRPLAN.md` Deno-Desktop-Framework-Liste)?