# KM6 — GUI, parallele Abläufe + Projektmanagement

**Klasse/Semester:** 3HWII, 6. Semester (SS 2027)
**Wochenstunden (Lehrplan):** 4 — davon **Georg 2 h** (1 DS/Woche) + **Kollege 2 h (PRE)**
**Zeitmodell:** 13 echte UE + 2 PLF-DS
**Bereiche:** OOP/GUI + Architektur (**Georg**) · Projektmanagement (**Kollege**, nur Soll)
**Konkreter Semesterplan:** `3HWII/semesterplan-ss.md` · **Verbund:** `3HWII/README.md`

## Worum geht es?

KM6 hat zwei Gesichter:

1. **Erweiterbare, wartbare Programme mit grafischer Oberfläche** (Georgs Teil):
   Die OOP-Modelle aus KM5 bekommen ein Gesicht — über **Deno Desktop** (offiziell seit
   Deno 2.9) wird eine native Desktop-App gebaut, deren UI aus dem bereits bekannten
   HTML/CSS (Jg II) besteht und deren Logik die KM5-Klassen wiederverwendet.
   Damit rücken Architekturfragen ins Zentrum: **Repository-Pattern** (die Brücke zu INFI),
   **MVC/Schichtentrennung** und **parallele Abläufe** (async/await on top, bekannt aus Jg II).
2. **Projektmanagement in der Softwareentwicklung** (Kollegens Teil, Soll):
   PM-Grundlagen (Definition, Team/Rollen, Planungselemente, Dokumente) und die methodische
   Begleitung des Teamprojekts.

Das Semester mündet in das **Verbundprojekt mit INFI** („eine App, zwei Noten"):
SWP liefert Domäne (KM5) + Desktop-GUI + Repository-Vertrag (KM6), INFI liefert die
Prisma-Persistenz — die PM-Rahmung kommt vom Kollegen. Details: `3HWII/README.md`.

## Wofür braucht man das in der Praxis?

- **Desktop-Apps ohne zweiten Stack:** Web-UI-Kenntnisse (Jg II) + OOP-Logik (KM5) =
  vollwertige App; genau das Muster von Electron/Tauri, hier deno-nativ.
- **Schichtentrennung ist *die* Überlebensregel** größerer Codebasen: Model/View/Controller
  sauber zu trennen entscheidet, ob ein Projekt in Jg IV/V noch wartbar ist.
- **Schnittstellen denken:** das Repository-Interface ist derselbe Vertragsgedanke wie KM5-
  Interfaces — nur eine Ebene höher (und der eigentliche Dreh- und Angelpunkt des
  INFI-Verbunds: SWP definiert, INFI implementiert).
- **Nebenläufigkeit ohne Chaos:** parallele Datenbank-/Repository-Abfragen, `Promise.all`,
  Race-Vermeidung — Alltag jeder echten Anwendung.

## Inhalte

### Wissen (Fakten & Begriffe)
- Deno Desktop: `deno desktop`, Webview-Architektur, `Deno.serve`, `Deno.BrowserWindow`
- Bindings: Aufruf von Deno-Code aus dem Webview (`bindings.<name>()`)
- Events: DOM-Events im Webview; Deno-seitige Fenster-Lebenszyklus-Events
- GUI-Elemente: Forms, Listen, Dialoge; Multi-Window, State pro Fenster
- **Repository-Pattern:** Interface als Persistenz-Vertrag, In-Memory- vs. Prisma-Implementierung
- **MVC:** Model (OOP-Klassen) – View (Webview-HTML/CSS) – Controller (Bindings)
- Parallele Abläufe: `async`/`await` (Repetition), `Promise.all`, Nebenläufigkeit vs. Races,
  Ausblick Web Workers
- Laufzeitanalyse in der Praxis: GUI-Performance, Repository-Benchmarks

### Verstehen (Zusammenhänge)
- Warum die UI „dumm" bleiben soll und die Domäne nichts von HTML weiß (und umgekehrt)
- Warum das Repository-Interface das Team entkoppelt: SWP/INFI arbeiten gegen denselben Vertrag
- Warum Event-Driven-Programmierung ein OOP-Muster ist (Observer informell, formal in KM7)
- Warum Nebenläufigkeit ohne gemeinsamen mutable State harmlos ist — und mit ihm gefährlich
- Warum Prisma keine Vererbung kennt und das Repository die Polymorphie „hineinpfriemelt"
  (O/R-Impedance-Mismatch, TPH — siehe `3HWII/README.md`)

### Können (mit Deno/TypeScript umsetzen)
- Eine Deno-Desktop-App mit Fenster, Formularen und Events bauen
- KM5-Objekte (z. B. `Bruch`) als Handler hinter Bindings wiederverwenden
- Ein `interface MediumRepository` definieren, eine In-Memory-Implementierung testgetrieben
  bauen und später gegen INFIs Prisma-Implementierung tauschen
- Eine App nach MVC schichten und die Trennung in Tests nachweisen
- Zwei Repositories parallel abfragen (`Promise.all`) und das Ergebnis zusammenführen
- Eine langsame Operation mit `Deno.bench` identifizieren und begründet optimieren

## PRE-Soll (Kollege — nicht ausgearbeitet)

Lehrplan-Soll KM6, Bereich SWP/PRE (Sichtbarkeit für die Klassenführung):

- **Grundlagen des Projektmanagements:** Definition, Projektteam und Rollen,
  Planungselemente, Dokumente
- **Angewandte Softwareentwicklung und Projektmanagement:** Durchführung eines
  Softwareprojekts im Team unter Einsatz von Projektmanagementmethoden
- **Koordination (offener Punkt):** Das Verbundprojekt mit INFI wird vom Kollegen
  PM-methodisch gerahmt (Rollen, Issues, PM-Dokumente) — Abstimmung mit Georg/INFI
  erforderlich; vermerkt in `3HWII/README.md`.

## Ressourcen & Stack

| Strang | Werkzeug/Anker |
|---|---|
| GUI | **Deno Desktop** (Deno ≥ 2.9; Webview + HTML/CSS aus Jg II) |
| Architektur | Repository-Pattern, MVC — bewusst *informell* (Patterns formal erst KM7) |
| Persistenz | Prisma/SQLite **via INFI** (SWP-Seite bleibt DB-frei bis zum Verbund) |
| Tests/Benchmarks | `Deno.test`, `Deno.bench` |
| Verbund | `3HWII/README.md` — Schichten-Aufteilung, TPH/O-R-Mapping, Domänenwahl |

**Mitgenommen aus KM5:** Vererbung/Polymorphismus, Interfaces, Generics, UML, Testdisziplin.
**Mitnahme nach KM7/KM8:** Repository/MVC → wiederverwendbare Komponenten; informelle
Pattern (Observer, Strategy) → GoF-Kanon; GUI-Erfahrung → serverbasierte Webapps (KM8).
