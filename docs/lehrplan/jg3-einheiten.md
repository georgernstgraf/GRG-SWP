# 3. Klasse – Einheitenplan (KM5 + KM6)

> **Status:** Einheitenplanung für das Schuljahr 2026/27 (Klasse 3AHWII). **Priorität.**
> **Stack-Entscheidung:** OOP mit **Deno/TypeScript** (nicht C#/.NET); GUI (KM6) via **Deno Desktop** (Deno ≥ 2.9). Siehe [`METADATA.md`](METADATA.md).
> **Offizieller Lehrstoff:** siehe [`LEHRPLAN.md`](LEHRPLAN.md) – III. Jahrgang, Bereiche OOP + SWP.
> **Vorwissen:** [`jg2-einheiten.md`](jg2-einheiten.md) – TS, OO-Vorgriff (`class Bruch`), HTML/CSS, DOM, Promises/async/await, Fetch, Hono+SQLite+REST, Prisma-Vertiefung.
> **Wochenstunden:** 4 → **~12 Einheiten/Semester** (Netto).

> **Wichtig:** Diese Kohorte hat **parallel INFI** (Jg III Datenbanken). Beide Fächer sind als Verbund geführt – siehe Abschnitt [„3ahwii-Verbund mit INFI"](#3ahwii-verbund-mit-infi-eine-app--zwei-noten) unten.

---

## 5. Semester – Kompetenzmodul 5 (Bereich OOP + Modellierung)

**Bildungs- und Lehraufgabe:** die Konzepte der OOP **mit Vererbung und Polymorphismus** anwenden; Problemlösungen in grafischer Notation darstellen und erweiterbare Modelle entwickeln.

**Lehrstoff:** OOP-Elemente (Klasse, Instanz, Schnittstelle, Methode, Zustand, Attribut, Sichtbarkeit, grafische Darstellung, Vererbung, Polymorphismus); Alternativen zu Arrays (Collections); Laufzeitanalysen. SWP: Modellierung (Modellierungssprachen, Darstellungen).

Das 5. Semester bringt die **formalen OOP-Konzepte** on top des flüssigen TS-Stacks. Rein TypeScript, **DB-frei**, testgetrieben (`Deno.test`). Domäne für Übungszwecke: `Bruch` (bekannt aus Jg II) und eine erste kleine Hierarchie (z. B. `Medium`/`Spiel`).

### Einheit 5.1 – OO-Repetition & Klasse/Instanz/Zustand formalisiert
- Bereich: OOP
- KM-Bezug: KM5 „Klasse, Instanz, Zustand, Attribut"
- Vorwissen: `class Bruch` aus Jg II
- Inhalt: Repetition Bruch-Klasse; Begriffe schärfen: Klasse vs. Instanz vs. Objekt, Zustand (= Feldwerte), Identität
- HÜ: Bruch-Klasse um `equals()` erweitern + Tests

### Einheit 5.2 – Kapselung & Sichtbarkeit
- Bereich: OOP
- KM-Bezug: KM5 „Attribut und Sichtbarkeit"
- Vorwissen: 5.1
- Inhalt: `public`/`private`/`protected` (TS-Konventionen), Kapselung, getter/setter, `readonly`, Invarianten im Konstruktor sichern
- HÜ: Bruch invariant-gesichert (Nenner ≠ 0, gekürzt)

### Einheit 5.3 – Schnittstellen (interface) als Vertrag
- Bereich: OOP
- KM-Bezug: KM5 „Schnittstelle"
- Inhalt: `interface` deklarieren und implementieren; Schnittstelle als Vertrag („was", nicht „wie"); mehrere Interfaces pro Klasse; structural typing von TS
- HÜ: `interface Comparable<T> { vergleiche(other: T): number }` für `Bruch`

### Einheit 5.4 – Vererbung (extends)
- Bereich: OOP
- KM-Bezug: KM5 „Vererbung"
- Inhalt: `extends`, `super`, is-a-Beziehung, Methoden erben, `protected` für Subklassen
- HÜ: `GemischterBruch extends Bruch` (z. B. 1½)

### Einheit 5.5 – Polymorphismus & dynamische Bindung
- Bereich: OOP
- KM-Bezug: KM5 „Polymorphismus"
- Inhalt: `override`, zur Laufzeit gebundene Methoden; „Bruch-Array" mit `Bruch`- und `GemischterBruch`-Objekten → gleicher Aufruf, unterschiedliches Verhalten; `instanceof`
- HÜ: `toString()` polymorph – Array gemischt ausgeben

### Einheit 5.6 – Abstrakte Klassen & abstrakte Methoden
- Bereich: OOP
- KM-Bezug: KM5 „Vererbung, Polymorphismus" vertieft
- Inhalt: `abstract class`, abstrakte Methoden; „keine Instanzen davon"; Vorgriff auf die Verbund-Domäne: abstrakte Basis `Medium`
- HÜ: `abstract class Tier { abstract laut(): string }` + 3 Subklassen

### Einheit 5.7 – Collections & Generics
- Bereich: OOP
- KM-Bezug: KM5 „Alternativen zu Arrays (Collections)"
- Inhalt: TS-Generics; `Map<K,V>`, `Set<T>`, `Array<T>`-Methoden; eigene generische Klasse `Stack<T>` / `Queue<T>`
- HÜ: generische `Stack<T>` mit Tests

### Einheit 5.8 – Laufzeitanalyse (O-Notation)
- Bereich: OOP
- KM-Bezug: KM5 „Laufzeitanalysen"
- Inhalt: O(1), O(n), O(n²); lineare vs. binäre Suche; `Deno.bench` zum Messen; Array vs. Set bei `contains`
- HÜ: zwei Such-Implementierungen benchmarken

### Einheit 5.9 – Exceptions als Klassenhierarchie
- Bereich: OOP
- KM-Bezug: KM5 „Vererbung" angewendet
- Inhalt: `Error`-Hierarchie; eigene Fehler-Klasse `extends Error`; `try/catch` mit typisierten Fehlern; Ausnahmen als OOP-Showcase
- HÜ: `BruchFehler extends Error` für Nenner=0

### Einheit 5.10 – UML-Klassendiagramm (grafische Darstellung)
- Bereich: SWP (Modellierung)
- KM-Bezug: KM5 „Modellierungssprachen, Darstellungen, grafische Darstellung"
- Inhalt: UML-Klassendiagramm-Notation (Klasse, Sichtbarkeit +/-/#, Vererbungspfeil, abstract = kursiv); Skizze per Hand und Tool (PlantUML/Mermaid)
- HÜ: UML der Bruch-Hierarchie (5.4–5.6) in Mermaid

### Einheit 5.11 – Vom UML-Modell zum Code (und retour)
- Bereich: SWP (Modellierung)
- KM-Bezug: KM5 „erweiterbare Modelle entwickeln"
- Inhalt: Modell → Code, Code → Modell; „erweiterbar" als Design-Ziel (offen für neue Subklassen ohne bestehenden Code zu ändern – Vorgriff OCP)
- HÜ: kleines Modell einer Verbund-Domäne (z. B. `Medium`/`Buch`/`Film`)

### Einheit 5.12 – Mini-Projekt / Wissensüberprüfung
- Bereich: OOP+SWP Gesamtschau
- KM-Bezug: KM5
- Inhalt: kleine Klassenhierarchie selbst entworfen (UML) und implementiert (Tests); ggf. Knowledge-Check
- HÜ: Mini-Projekt abgeben

> *Optional PLF 5. Sem: als Mock/Knowledge-Check oder Mini-Projekt nutzen.*

---

## 6. Semester – Kompetenzmodul 6 (OOP-GUI + Projektmanagement)

**Bildungs- und Lehraufgabe (OOP):** erweiterbare, wartbare Programme **mit grafischer Oberfläche** erstellen; Laufzeitanalysen; Collections. **(SWP):** Projektmanagement in der Softwareentwicklung anwenden.

**Lehrstoff (OOP):** weitere OOP-Konzepte, parallele Abläufe; **grafische Benutzeroberflächen** (Frameworks, GUI-Elemente, Events). **(SWP):** Grundlagen Projektmanagement (Definition, Team/Rollen, Planungselemente, Dokumente); angewandtes Softwareprojekt im Team.

Das 6. Semester führt die **grafische Oberfläche** über **Deno Desktop** ein und verbindet die OOP-Modelle aus KM5 mit einer GUI. Die **letzte Phase** ist das **gemeinsame Verbundprojekt mit INFI** (eine App, zwei Noten).

### Einheit 6.1 – Deno Desktop: erstes Fenster
- Bereich: OOP/Web
- KM-Bezug: KM6 „grafische Oberflächen, Frameworks"
- Inhalt: `deno desktop main.ts`; `Deno.serve()` + Webview; HTML/CSS (bekannt aus Jg II) als UI; ein Fenster öffnen
- HÜ: „Hello, Desktop"-App

### Einheit 6.2 – Bindings: Webview ↔ Deno-Code
- Bereich: OOP
- KM-Bezug: KM6 „Frameworks"
- Inhalt: `bindings.<name>()` rufen Deno-Code aus dem Webview auf; **OOP-Objekte aus 5.x als Handler** verwenden (Brücke KM5→KM6)
- HÜ: Desktop-Bruch-Rechner (Eingabe → `Bruch`-Objekt → Ergebnis)

### Einheit 6.3 – Events (DOM + Deno-seitig)
- Bereich: OOP
- KM-Bezug: KM6 „Events"
- Inhalt: DOM-Events im Webview (Button-Klick, Form-Submit); Deno-seitige Events (`Deno.BrowserWindow`-Lebenszyklus, Menüs); Event-Driven als OOP-Muster
- HÜ: interaktive GUI mit mehreren Events

### Einheit 6.4 – GUI-Elemente & Fenster-Lebenszyklus
- Bereich: OOP/Web
- KM-Bezug: KM6 „GUI-Elemente"
- Inhalt: `Deno.BrowserWindow` (Öffnen/Schließen/Fokus), mehrere Fenster; Forms, Listen, Dialoge (`alert`/`confirm` nativ); State pro Fenster
- HÜ: Multi-Window-App (z. B. Liste + Detailfenster)

### Einheit 6.5 – Repository-Pattern (Brücke zu INFI)
- Bereich: OOP+SWP (Architektur)
- KM-Bezug: KM6 „erweiterbare, wartbare Programme"
- Inhalt: `interface MediumRepository`; Domäne bleibt DB-frei (SWP); INFI implementiert es mit Prisma → gemeinsames Artefakt. Siehe [Verbund-Abschnitt](#3ahwii-verbund-mit-infi-eine-app--zwei-noten).
- HÜ: Repository-Interface + In-Memory-Implementierung (Tests)

### Einheit 6.6 – MVC / Schichtentrennung
- Bereich: SWP (Architektur)
- KM-Bezug: KM6 „erweiterbare, wartbare Programme"
- Inhalt: Model (OOP-Klassen) – View (Webview-HTML/CSS) – Controller (bindings); warum Schichten trennen? Testbarkeit, Austauschbarkeit
- HÜ: MVC-Skizze der eigenen App

### Einheit 6.7 – Parallele Abläufe
- Bereich: OOP
- KM-Bezug: KM6 „parallele Abläufe"
- Inhalt: `async`/`await` in Desktop (bekannt aus Jg II), `Promise.all`; Nebenläufigkeit ohne Races; kurzer Ausblick Web Workers
- HÜ: zwei Repositories parallel abfragen

### Einheit 6.8 – Projektmanagement-Basics
- Bereich: PRE
- KM-Bezug: KM6 „Definition, Projektteam und Rollen, Planungselemente, Dokumente"
- Inhalt: Was ist ein Projekt? Rollen (PL, Dev, QA), Planungselemente (Issues, Meilensteine), Doku (README, Issue-Templates); GitHub-Issues/PRs
- HÜ: Projekt-Steckbrief + Issue-Backlog für das Verbundprojekt

### Einheit 6.9 – Laufzeitanalyse in der Praxis
- Bereich: OOP
- KM-Bezug: KM6 „Laufzeitanalysen"
- Inhalt: GUI-Performance; `Deno.bench` für Repositories; O(n) vs. O(log n) an der App
- HÜ: eine langsame Operation identifizieren und optimieren

### Einheit 6.10 – Verbundprojekt: Konzept & Modell
- Bereich: PRE+OOP (gemeinsam mit INFI)
- KM-Bezug: KM6 „angewandtes Softwareprojekt im Team"
- Inhalt: Domäne (siehe [5 Vorschläge](#domäne--5-vorschläge-schüler-co-decided)) ist gewählt; UML-Domänenmodell, Repository-Interface, Use Cases; Team-Bildung + Rollen
- HÜ: UML + Interface committed

### Einheit 6.11 – Verbundprojekt: Implementation (GUI + Anbindung)
- Bereich: OOP+SWP Gesamtschau
- Inhalt: Desktop-GUI auf Repository (nutzt INFIs Prisma-Schicht); Events, Bindings, parallele Abläufe; Tests
- HÜ: Team-Arbeit (Issues, PRs)

### Einheit 6.12 – Verbundprojekt: Präsentation & Reflexion
- Bereich: PRE
- Inhalt: Demo (5 Min); Code-Review (Schichtentrennung, OOP-Qualität); Retrospektive; Brücke zu Jg IV
- HÜ: keine (Projektabschluss)

> *Optional PLF 6. Sem: Verbundprojekt-Teil als PLF-Äquivalent (Doppelbenotung INFI+SWP).*

---

## 3ahwii-Verbund mit INFI (eine App – zwei Noten)

> **Querverweis:** Dieselbe Kohorte hat parallel **INFI** (Jg III Datenbanken). INFI-Plan: [`GRG-INFI/docs/lehrplan/jg3-einheiten.md`](https://github.com/georgernstgraf/GRG-INFI/blob/main/docs/lehrplan/jg3-einheiten.md).

Beide Fächer laufen im **selben Deno/TypeScript/Prisma/SQLite-Stack** bei **derselben Kohorte**. Sie werden als **ein** Spiralcurriculum mit **gemeinsamem Abschlussprojekt** geführt: *eine* App, in beiden Fächern mit unterschiedlicher Rubrik benotet.

### Schichten-Aufteilung (wer lehrt was)

| Schicht | Fach / KM | Inhalt |
|---|---|---|
| Domäne (pure OOP) | **SWP KM5** | TS-Klassen, Vererbung, Polymorphismus, Interfaces, Generics – **DB-frei**, testgetrieben |
| Präsentation + Architektur | **SWP KM6** | Deno-Desktop-GUI, Bindings, Events, MVC, Projektmanagement |
| Persistenz & Abfragen | **INFI KM5** | komplexe SQL, Normalformen, CTEs, Views, Transaktionen, DDL/Indizes |
| Anbindung | **INFI KM6** | Prisma vertieft, REST-API, Prepared Statements, DB-Schnittstellen |

### Brücke = Repository (gemeinsames Artefakt)

SWP definiert das `interface MediumRepository { finde(id): Promise<Medium>; … }` (Vertrag, OOP, testgetrieben). **INFI implementiert es mit Prisma.** Eine Datei, zwei Fächer, zwei Noten-Rubriken:
- **SWP-Note:** OOP-Design (Vererbung/Schnittstellen sauber?), Schichtentrennung (MVC), GUI/Events, PM (Issues/Commits/Rollen).
- **INFI-Note:** Schema-Qualität, komplexe Abfragen (CTEs/Views), Datenanbindung (Prisma/REST), EXPLAIN/Optimierung.

### O/R-Mapping: Polymorphismus über Prisma (zentraler Knackpunkt)

Prisma kennt **keine Vererbung**. Der Object-Relational-Impedance-Mismatch ist *der* pädagogische Kernpunkt – er wird am Repository greifbar. **Empfehlung: TPH (Single-Table Inheritance) + Mapper.** Prisma/INFI-Seite bleibt flach (ein Modell `Medium` mit Discriminator `type` + nullable Subtyp-Spalten + CHECK); die echte Hierarchie lebt im OOP-Layer (SWP). Das Repository „pfriemelt" die Polymorphismus beim Lesen/Schreiben hinein:

```prisma
// INFI-Seite: flach, bewusst „dumm"
model Medium {
  id        Int     @id @default(autoincrement())
  type      String            // "BUCH" | "FILM" | "SPIEL" – Discriminator
  titel     String
  isbn      String?           // nur BUCH
  dauerMin  Int?              // nur FILM
}
```
```ts
// SWP-Seite: echte Hierarchie, DB-frei, testgetrieben
abstract class Medium { abstract berechneGebuehr(verspaetetTage: number): Geld; }
class Buch extends Medium { berechneGebuehr(t) { return Geld.euro(t * 0.10); } }
class Film extends Medium { berechneGebuehr(t) { return Geld.euro(t * 0.50); } } // teurer

class PrismaMediumRepository implements MediumRepository {  // INFI implementiert SWP-Interface
  async finde(id: number): Promise<Medium> {
    const r = await this.prisma.medium.findUnique({ where: { id } });
    return toDomain(r);   // <- hier wird Polymorphismus „hineingepfriemelt"
  }
}
function toDomain(r: MediumRow): Medium {
  switch (r.type) {
    case "BUCH": return new Buch(r.titel, r.isbn);
    case "FILM": return new Film(r.titel, r.dauerMin);
  }
}
```

**Diskussion wert (INFI↔SWP-Spannung):** INFI KM5 lehrt **Normalisierung** → würde TPT (Tabellen pro Subtyp) bevorzugen. SWP/Prisma will's einfach → TPH. Frage an die Klasse: *„Warum verletzt der OOP-Layer hier bewusst die 3NF?"* → weil das Repository die Integrität übernimmt, nicht die Tabelle.

### Sequenz-Abstimmung

- **5. Sem (parallel, unabhängig):** SWP OOP-Grundlagen am `Bruch`/kleinen Beispiel (DB-frei); INFI komplexe Abfragen/Normalisierung auf bekannter Bibliotheks-DB. Ab ~Dez: gemeinsame Beispieldomäne.
- **6. Sem (Konvergenz):** SWP baut ab 6.5 die Desktop-GUI aufs Repository (nutzt INFIs Prisma-Schicht). **Letzte ~3–4 Wochen:** gemeinsames Verbundprojekt (eine App, zwei Noten).

### Domäne – 5 Vorschläge (Schüler co-decided)

Die Domäne wird bewusst mit **Hierarchie + Zustandsautomat + reichen Abfragen** gewählt, weil dort die O/R-Pfriemelei am lehrreichsten ist:

| # | Domäne | Vererbung (Beispiel) | State / Events |
|---|--------|----------------------|----------------|
| 1 | **Bibliothek/Mediathek** | `Medium`→`Buch`/`Film`/`Spiel` | Ausleihe: offen/überfällig/zurück |
| 2 | **Online-Shop** | `Produkt`→`Physisch`/`Digital`/`Abo` | Bestellung: Warenkorb→bezahlt→versendet→storniert |
| 3 | **Musik-Streaming** | `Playable`→`Track`/`Podcast` | Wiedergabe: spielt/pausiert/beendet |
| 4 | **Schulverwaltung/Noten** | `Person`→`SchülerIn`/`LehrerIn` | Note: offen/eingetragen/berufen |
| 5 | **Tierpension/Tierheim** | `Tier`→`Hund`/`Katze`/`Vogel` | Aufenthalt: angemeldet/anwesend/abgemeldet |

Die Schüler wählen mit (z. B. Abstimmung in der ersten 6.-Sem-Stunde); dann gilt die gewählte Domäne in **beiden** Fächern.

---

## Abdeckungstabelle (Soll vs. Plan)

| Lehrstoffpunkt KM5/KM6 | Geplant in | Status |
|------------------------|------------|--------|
| Klasse, Instanz, Zustand, Attribut (KM5) | 5.1, 5.2 | ✓ |
| Methode, Sichtbarkeit (KM5) | 5.2 | ✓ |
| Schnittstelle (KM5) | 5.3 | ✓ |
| Vererbung (KM5) | 5.4, 5.6, 5.9 | ✓ |
| Polymorphismus (KM5) | 5.5, 5.6 | ✓ |
| grafische Darstellung / Modellierung (KM5) | 5.10, 5.11 | ✓ (UML/Mermaid) |
| Collections / Alternativen zu Arrays (KM5) | 5.7 | ✓ |
| Laufzeitanalysen (KM5+KM6) | 5.8, 6.9 | ✓ |
| weitere OOP-Konzepte (KM6) | 6.5, 6.6 | ✓ (Repository/MVC) |
| parallele Abläufe (KM6) | 6.7 | ✓ |
| grafische Oberfläche: Frameworks (KM6) | 6.1, 6.2 | ✓ (Deno Desktop) |
| GUI-Elemente (KM6) | 6.4 | ✓ |
| Events (KM6) | 6.3 | ✓ |
| Projektmanagement-Basics (KM6) | 6.8 | ✓ |
| Team-Projekt (KM6) | 6.10–6.12 | ✓ (Verbund mit INFI) |

---

## Vorbereitung auf Jg IV (→ `jg4-einheiten.md`)

- Jg IV KM7: OOP (wiederverwendbare Komponenten) + SWP (**Entwurfsmuster**, Vorgehensmodelle).
- Mitnehmbar aus KM5/KM6: OOP-Werkzeugkasten (Vererbung, Polymorphismus, Schnittstellen, MVC), UML, Repository-Pattern, Deno-Desktop-GUI.
- In Jg IV kommen **Design Patterns** (Singleton, Factory, Observer, Strategy) als systematische Vertiefung der in KM5/KM6 informell genutzten Ideen.
- Auch Jg IV weiter mit Deno/TS (Stack-Konsistenz).