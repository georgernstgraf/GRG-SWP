# Semesterplan 3HWII — Sommersemester 2027

Softwareentwicklung und Projektmanagement (SWP) — KM6
(BGBl. II Nr. 262/2015 idF 235/2019, Anlage 1.24; Schichten: `docs/lehrplan/LEHRPLAN.md`)

**Zeitmodell:** 13 echte UE (1 DS/Woche à 2 h = Georgs Anteil am 2+2-Split) + 2 PLF-DS.
Offiziell 18 Schulwochen — Ausfälle einkalkuliert; bei Glücksfall Bonus-UE (siehe unten).
**Werkzeug:** Deno / TypeScript · **Deno Desktop** (GUI, ≥ 2.9 — Stand vor SS-Start
verifizieren, Fallback: Hono+Vite-Web-UI) · Prisma/SQLite **via INFI**
**KM-Steckbrief:** `kompetenzmodule/km6.md` · **Verbund mit INFI:** `3HWII/README.md`

> **Vorwissen aus KM5 (WS):** Vererbung, Polymorphismus, Interfaces, abstrakte Klassen,
> Generics/Collections, Laufzeitanalyse, UML-Klassendiagramm, Testdisziplin.
> **Parallel beim Kollegen (PRE-Soll):** PM-Grundlagen (Definition, Team/Rollen,
> Planungselemente, Dokumente) — Rahmung des Verbundprojekts, Abstimmung TBD.

---

## UE 1–4: Deno Desktop — die OOP-Modelle bekommen ein Gesicht

| UE | Thema | KM-Bezug (Schuladaption ②) | Inhalt / HÜ |
|----|-------|-----------------|--------------|
| 1 | **Deno Desktop: erstes Fenster** | Grafische Oberflächen, Frameworks | `deno desktop main.ts`; `Deno.serve()` + Webview; HTML/CSS (aus Jg II) als UI. HÜ: „Hello, Desktop"-App |
| 2 | **Bindings: Webview ↔ Deno-Code** | Frameworks | `bindings.<name>()` ruft Deno-Code; **KM5-Objekte als Handler** (Brücke KM5→KM6). HÜ: Desktop-Bruch-Rechner (Eingabe → `Bruch`-Objekt → Ergebnis) |
| 3 | **Events (DOM + Deno-seitig)** | Events | DOM-Events (Klick, Submit); `Deno.BrowserWindow`-Lebenszyklus, Menüs; Event-Driven als OOP-Muster (Observer informell). HÜ: interaktive GUI, mehrere Events |
| 4 | **GUI-Elemente & Fenster-Lebenszyklus** | GUI-Elemente | `Deno.BrowserWindow` (Öffnen/Schließen/Fokus), mehrere Fenster; Forms, Listen, Dialoge; State pro Fenster. HÜ: Multi-Window-App (Liste + Detail) |

## UE 5–7: Architektur — Repository, MVC, Nebenläufigkeit

| UE | Thema | KM-Bezug ② | Inhalt / HÜ |
|----|-------|------------|--------------|
| 5 | **Repository-Pattern (Brücke zu INFI)** | erweiterbare, wartbare Programme | `interface MediumRepository`; Domäne bleibt DB-frei (SWP); INFI implementiert mit Prisma → gemeinsames Artefakt (`3HWII/README.md`). HÜ: Interface + In-Memory-Implementierung (Tests) |
| 6 | **MVC / Schichtentrennung** | erweiterbare, wartbare Programme | Model (OOP) – View (Webview) – Controller (Bindings); warum trennen? Testbarkeit, Austauschbarkeit. HÜ: MVC-Skizze der eigenen App |
| 7 | **Parallele Abläufe** | parallele Abläufe | `async`/`await` in Desktop (Rep Jg II), `Promise.all`; Nebenläufigkeit ohne Races; Ausblick Web Workers. HÜ: zwei Repositories parallel abfragen |

> **PLF 1 (R1)** im Anschluss an UE 7 — Stoff: UE 1–7 (Deno Desktop + Architektur).

## UE 8: Laufzeitanalyse in der Praxis

| UE | Thema | KM-Bezug ② | Inhalt / HÜ |
|----|-------|------------|--------------|
| 8 | **Performance-Messung an der App** | Laufzeitanalysen | GUI-Performance; `Deno.bench` für Repositories; O(n) vs. O(log n) im realen Kontext. HÜ: eine langsame Operation identifizieren und optimieren |

## UE 9–13: Verbundprojekt mit INFI (eine App, zwei Noten)

> Lehrplan-Soll ①/②: **„Durchführung eines Softwareprojekts im Team unter Einsatz von
> Projektmanagementmethoden"** — PM-Rahmung (Teams, Rollen, Issues, PM-Dokumente):
> **Kollege** (PRE), Koordination siehe `3HWII/README.md` → Offene Punkte.
> Domänenwahl per Abstimmung in UE 9 (5 Vorschläge: `3HWII/README.md`).

| UE | Thema | KM-Bezug ② | Inhalt / HÜ |
|----|-------|------------|--------------|
| 9 | **Verbund: Domänenwahl, Konzept & Modell** | Teamprojekt (mit Kollege) | Abstimmung Domäne; UML-Domänenmodell, Repository-Interface, Use Cases. HÜ: UML + Interface committed |
| 10 | **Verbund: Implementation I** | Teamprojekt | Desktop-GUI auf Repository (zunächst In-Memory); Events, Bindings. HÜ: Team-Arbeit (Issues, PRs) |
| 11 | **Verbund: Implementation II** | Teamprojekt | Integration der INFI-Prisma-Schicht (`PrismaMediumRepository`); parallele Abfragen; Tests. HÜ: Team-Arbeit |
| 12 | **Verbund: Qualität & Feinschliff** | Teamprojekt | Code-Review (Schichtentrennung, OOP-Qualität); Performance-Check (UE 8 anwenden); Bugfix-Runde. HÜ: Release-Stand |
| 13 | **Verbund: Präsentation & Reflexion** | Teamprojekt | Demo (5 Min/Team); Retrospektive; Brücke zu Jg IV (Patterns formal, Komponenten). HÜ: keine |

> **PLF 2 (R2)** im Anschluss an UE 13 — Verbundprojekt-Beitrag des/der Einzelnen als
> PLF-Äquivalent (Doppelbenotung SWP+INFI nach getrennten Rubriken; PM-Rubrik Kollege).

## Bonus-UE (optional, bei Ausfallfreiheit)

| UE | Thema | Anlass |
|----|-------|--------|
| +1 | **Design-Pattern-Vorgriff:** Observer/Strategy am Verbundprojekt benennen und umsetzen | ebnet KM7; falls Projekt schneller fertig |

## Reservierte DS (keine Lehr-UE)

| DS | Inhalt |
|----|--------|
| R1 | **PLF 1** (nach UE 7; Deno Desktop, Bindings/Events, Repository, MVC, Nebenläufigkeit) |
| R2 | **PLF 2** (nach UE 13; Verbundprojekt-Anteil als PLF-Äquivalent) |

## PRE-Parallelnotiz (Kollege, nur Soll — nicht Georgs UE)

- **Grundlagen des Projektmanagements:** Definition, Projektteam und Rollen,
  Planungselemente, Dokumente.
- **Angewandte Softwareentwicklung und Projektmanagement:** methodische Begleitung des
  Teamprojekts (UE 9–13 nutzen die PM-Artefakte des Kollegen — Abstimmung TBD).

---

**Schwerpunkte:** 4 UE Deno Desktop · 3 UE Architektur (Repository/MVC/Nebenläufigkeit) ·
1 UE Laufzeit-Praxis · 5 UE Verbundprojekt
**INFI-Synchronisation:** INFI liefert ab ~UE 10 die Prisma-Implementierung des
Repository-Interfaces — Sequenz: `3HWII/README.md`.
