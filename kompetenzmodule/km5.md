# KM5 — OOP: Vererbung, Polymorphismus, Collections + Modellierung/UML

**Klasse/Semester:** 3HWII, 5. Semester (WS 2026/27)
**Wochenstunden (Lehrplan):** 4 — davon **Georg 2 h** (1 DS/Woche) + **Kollege 2 h (PRE)**
**Zeitmodell:** 13 echte UE + 2 PLF-DS
**Bereiche:** Objektorientierte Programmierung (**Georg**) · Modellierung/UML-Klassendiagramm (**Georg**) · übrige Modellierung + PRE (**Kollege**, nur Soll)
**Konkreter Semesterplan:** `3HWII/semesterplan-ws.md` · **Verbund:** `3HWII/README.md`

## Worum geht es?

KM5 bringt die **formalen OOP-Konzepte** on top des flüssigen TypeScript/Deno-Stacks, den die
Kohorte aus der 2. Klasse mitbringt (dort wurde die `class Bruch` mit Tests bereits vorgezogen).
Der Sprung: vom „Programmieren können" zum **„sauber objektorientiert entwerfen"**.

Drei Fragen stehen im Zentrum:

1. **„Wie strukturiere ich Code, der wachsen darf?"** Klasse vs. Instanz vs. Zustand,
   Kapselung und Sichtbarkeit, Invarianten — Code, der neue Anforderungen *ohne Umschreiben*
   verträgt (stille Vorwegnahme des Open-Closed-Prinzips).
2. **„Wie kann dasselbe `berechne()` je nach Objekt etwas anderes tun?"** Vererbung,
   Polymorphismus und dynamische Bindung, abstrakte Klassen und Interfaces als Verträge —
   der konzeptionelle Kern des Semesters und zugleich der Knackpunkt des späteren
   O/R-Mappings (Verbund mit INFI).
3. **„Wie spreche ich über ein Design, ohne Code zu zeigen?"** Das **UML-Klassendiagramm**
   als Denk- und Kommunikationsnotation (Georgs Anteil der Modellierung); Modell ↔ Code
   in beide Richtungen.

Flankierend: **Collections/Generics** (Alternativen zu Arrays), **Laufzeitanalyse**
(O-Notation mit `Deno.bench` messbar gemacht) und **Exceptions als Klassenhierarchie**
(Vererbung unmittelbar angewandt). Rein TypeScript, **DB-frei**, testgetrieben (`Deno.test`).

## Wofür braucht man das in der Praxis?

- **Frameworks lesen können:** Hono, Prisma, Deno-APIs — alles Klassenhierarchien und
  Interfaces; wer Vererbung/Polymorphismus versteht, liest fremde APIs wie Prosa.
- **Domänenmodelle:** jede echte App beginnt mit einer Klassenstruktur (die Verbund-Domäne
  mit INFI wird genau so gebaut: `Medium` → `Buch`/`Film`/`Spiel`).
- **Team-Kommunikation:** UML-Klassendiagramm = die Notation, mit der im Beruf Architektur
  besprochen wird (Code-Reviews, technische Doku, Diplomarbeit).
- **Testbarkeit & Wartung:** Interfaces + Kapselung ermöglichen Mock-Repositories und
  austauschbare Implementierungen (Brücke zum Repository-Pattern in KM6).
- **Performance-Bewusstsein:** O(n) vs. O(log n) an realen Datenstrukturen messen statt raten.

## Inhalte

### Wissen (Fakten & Begriffe)
- Klasse, Instanz, Objekt, **Zustand** (Feldwerte), Identität
- Sichtbarkeit `public`/`private`/`protected`, `readonly`, Kapselung, Invariante
- `interface` als Vertrag; structural typing von TS; mehrere Interfaces pro Klasse
- `extends`, `super`, is-a-Beziehung; `abstract class`/abstrakte Methoden
- Polymorphismus, `override`, dynamische Bindung, `instanceof`
- Generics; `Array<T>`-Methoden, `Map<K,V>`, `Set<T>`; eigene `Stack<T>`/`Queue<T>`
- O-Notation: O(1), O(n), O(log n), O(n²); lineare vs. binäre Suche
- `Error`-Hierarchie, eigene Fehlerklassen, `try/catch` mit typisierten Fehlern
- UML-Klassendiagramm-Notation: Klasse, Sichtbarkeit +/−/#, Vererbungspfeil,
  Assoziation/Multiplizität, abstract = kursiv

### Verstehen (Zusammenhänge)
- Warum Kapselung + Invarianten Fehler *zur Compilezeit* statt zur Laufzeit verlagern
- Warum ein Interface „was, nicht wie" festlegt — und wann `interface` vs. `abstract class`
- Warum Polymorphismus Erweiterbarkeit ohne Änderung bestehenden Codes ermöglicht
- Warum Vererbung sparsam („favor composition"), aber bei echter is-a-Hierarchie richtig ist
- Warum O(n²) bei kleinen Daten egal und bei großen fatal ist — Messung schlägt Intuition
- Warum das UML-Diagramm und der Code *zwei Ansichten desselben Modells* sind

### Können (mit Deno/TypeScript umsetzen)
- Klassen mit gesicherten Invarianten schreiben (Konstruktor-Validierung, `throw`)
- Interfaces deklarieren, implementieren und als Funktionsparameter-Typen nutzen
- Vererbungshierarchien mit `extends`/`super`/`override` bauen; polymorphe Collections
- Generische Datenstrukturen (`Stack<T>`) implementieren und mit `Deno.test` absichern
- Zwei Implementierungen mit `Deno.bench` vergleichen und das Messergebnis deuten
- Eigene Exception-Hierarchie (`class BruchFehler extends Error`) entwerfen
- Ein UML-Klassendiagramm (Mermaid/PlantUML) zu gegebenem Code zeichnen — und umgekehrt
  aus einem Diagramm compilierfähigen Code erzeugen

## PRE-/Modellierungs-Soll (Kollege — nicht ausgearbeitet)

Lehrplan-Soll, das **nicht** in Georgs 13 UE fällt (Sichtbarkeit für die Klassenführung):

- **Modellierung, übrige Notationen:** Workflow-/Flussdiagramme, Aktivitäts- und
  Sequenzdiagramme (offizieller SWP-Bereich „Modellierungssprachen, Darstellungen")
- Ab 6. Semester: Projektmanagement-Grundlagen (siehe `km6.md`)

## Ressourcen & Stack

| Strang | Werkzeug/Anker |
|---|---|
| Sprache/Runtime | **TypeScript auf Deno** (sprach-agnostischer Lehrplan → schulautonome Wahl TS, Nachfolger von C#/.NET) |
| Tests | `Deno.test` + `jsr:@std/assert` (Kohorte kennt das aus Jg II) |
| Benchmarks | `Deno.bench` |
| UML | Mermaid (rendert in GitHub-Markdown), PlantUML optional |
| Übungsdomänen | `Bruch` (Dauerbrenner aus Jg II) → kleine Hierarchien (`Tier`, `Medium`-Vorgriff) |
| Verbund-Domäne | ab ~Dezember: gemeinsame Wahl mit INFI (5 Vorschläge: `3HWII/README.md`) |
| C#-Referenz (archiviert) | `ARCHIV/2025-26-3ahwii/` + Repo GRG-CS (Skriptum, xUnit-Variante) |

**Mitgenommen aus KM3/KM4 (Vorwissen):** TS-Grundlagen, `class Bruch` mit
constructor/this/static, Tests, HTML/CSS/DOM, Promises/async/await, Fetch, Hono+SQLite+REST,
Prisma-Berührung — Details: `docs/lehrplan/jg2-einheiten.md`.

**Mitnahme nach KM6/KM7:** OOP-Werkzeugkasten (Vererbung, Interfaces, Generics), UML,
Testdisziplin → GUI (Deno Desktop), Repository-Pattern, MVC in KM6; Design Patterns in KM7.

**Schwachstellen-Watchlist (aus C#-Kohorte 2025/26):** Git-Disziplin (aussagekräftige
Commit-Messages, kleine Commits), Interface-Syntax, Fail-Fast vs. Happy Path — wird ab UE 1
als Organisations- bzw. Code-Review-Thema mitgeführt.
