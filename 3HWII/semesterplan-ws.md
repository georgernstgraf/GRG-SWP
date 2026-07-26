# Semesterplan 3HWII — Wintersemester 2026/27

Softwareentwicklung und Projektmanagement (SWP) — KM5
(BGBl. II Nr. 262/2015 idF 235/2019, Anlage 1.24; Schichten: `docs/lehrplan/LEHRPLAN.md`)

**Zeitmodell:** 13 echte UE (1 DS/Woche à 2 h = Georgs Anteil am 2+2-Split) + 2 PLF-DS.
Offiziell 18 Schulwochen — Ausfälle durch Feiertage/Krankheit sind einkalkuliert;
bei Glücksfall Bonus-UE (siehe unten).
**Werkzeug:** Deno / TypeScript · **Didaktik:** testgetrieben (`Deno.test`), DB-frei,
Domäne `Bruch` (aus Jg II bekannt) → kleine Hierarchien → Verbund-Vorgriff
**KM-Steckbrief:** `kompetenzmodule/km5.md` · **Verbund mit INFI:** `3HWII/README.md`

> **Vorwissen aus Jg II (KM3/KM4):** TS-Grundlagen, `class Bruch` (constructor/this/static)
> mit Tests, HTML/CSS, DOM, Promises/async/await, Fetch, Hono+SQLite+REST, Prisma-Berührung.
> Details: `docs/lehrplan/jg2-einheiten.md`. **UE 1 startet mit Diagnostik-Rep** (ohne
> eigene Reserve-DS — Einstieg ist Teil der UE).

---

## UE 1–3: OO-Fundament (Formalismus auf bekanntem Terrain)

| UE | Thema | KM-Bezug (Schuladaption ②) | Inhalt / HÜ |
|----|-------|-----------------|--------------|
| 1 | **OO-Repetition & Klasse/Instanz/Zustand formalisiert** | Klasse, Instanz, Zustand, Attribut | Rep `class Bruch`; Begriffsschärfung Klasse vs. Instanz vs. Objekt, Zustand = Feldwerte, Identität. **Orga mitgeführt:** Git-Disziplin (kleine Commits, sprechende Messages — Schwachstelle der C#-Kohorte). HÜ: `equals()` + Tests |
| 2 | **Kapselung & Sichtbarkeit** | Attribut und Sichtbarkeit | `public`/`private`/`protected`, `readonly`, getter/setter, Invarianten im Konstruktor sichern. HÜ: Bruch invariant-gesichert (Nenner ≠ 0, gekürzt) |
| 3 | **Schnittstellen (interface) als Vertrag** | Schnittstelle | `interface` deklarieren/implementieren; „was, nicht wie"; mehrere Interfaces; structural typing. HÜ: `interface Comparable<T>` für `Bruch` |

## UE 4–7: Vererbung & Polymorphismus (KM-Kern)

| UE | Thema | KM-Bezug ② | Inhalt / HÜ |
|----|-------|------------|--------------|
| 4 | **Vererbung (extends)** | Vererbung | `extends`, `super`, is-a-Beziehung, `protected`. HÜ: `GemischterBruch extends Bruch` (1½) |
| 5 | **Polymorphismus & dynamische Bindung** | Polymorphismus | `override`, Laufzeitbindung; gemischtes `Bruch[]` → gleicher Aufruf, anderes Verhalten; `instanceof`. HÜ: `toString()` polymorph ausgeben |
| 6 | **Abstrakte Klassen & Methoden** | Vererbung/Polymorphismus vertieft | `abstract class`, keine Instanzen; Vorgriff Verbund-Domäne: `abstract Medium`. HÜ: `abstract Tier { abstract laut(): string }` + 3 Subklassen |
| 7 | **Workshop & Festigung (Puffer)** | KM5 UE 1–6 | Hierarchie selbst entwerfen → implementieren → testen; Code-Review (Fail-Fast vs. Happy Path). HÜ: Workshop-Artefakt fertigstellen |

> **PLF 1 (R1)** im Anschluss an UE 7 — Stoff: UE 1–7.

## UE 8–10: Collections, Laufzeit, Exceptions

| UE | Thema | KM-Bezug ② | Inhalt / HÜ |
|----|-------|------------|--------------|
| 8 | **Collections & Generics** | Alternativen zu Arrays (Collections) | Generics; `Map<K,V>`, `Set<T>`, `Array<T>`-Methoden; eigene `Stack<T>`/`Queue<T>`. HÜ: generischer `Stack<T>` mit Tests |
| 9 | **Laufzeitanalyse (O-Notation)** | Laufzeitanalysen | O(1)/O(log n)/O(n)/O(n²); lineare vs. binäre Suche; **`Deno.bench`**; Array vs. Set bei `contains`. HÜ: zwei Suchen benchmarken |
| 10 | **Exceptions als Klassenhierarchie** | Vererbung (angewandt) | `Error`-Hierarchie; eigene Fehlerklasse `extends Error`; typisierte Fehler; Ausnahmen als OOP-Showcase. HÜ: `BruchFehler extends Error` |

## UE 11–13: UML-Modellierung (Georgs Anteil) & Gesamtschau

| UE | Thema | KM-Bezug ② | Inhalt / HÜ |
|----|-------|------------|--------------|
| 11 | **UML-Klassendiagramm** | Modellierung (grafische Darstellung) | Notation: Klasse, +/−/#, Vererbungspfeil, Assoziation/Multiplizität, abstract kursiv; Hand-Skizze + **Mermaid**. HÜ: UML der Bruch-Hierarchie (UE 4–6) in Mermaid |
| 12 | **Vom UML-Modell zum Code (und retour)** | erweiterbare Modelle | Modell→Code, Code→Modell; „erweiterbar" als Design-Ziel (offen für neue Subklassen — stille OCP-Vorwegnahme). HÜ: kleines Modell der Verbund-Domäne (`Medium`/`Buch`/`Film`) |
| 13 | **Mini-Projekt KM5** | KM5 Gesamtschau | kleine Klassenhierarchie: selbst entworfen (UML) + implementiert + Tests; Abgabe vor PLF 2. HÜ: Mini-Projekt |

> **PLF 2 (R2)** im Anschluss an UE 13 — Stoff: KM5 gesamt (Schwerpunkt UE 8–13).

## Bonus-UE (optional, bei Ausfallfreiheit)

| UE | Thema | Anlass |
|----|-------|--------|
| +1 | **Verbund-Vorgriff:** `interface MediumRepository` + In-Memory-Implementierung | Brücke zum SS früher legen, wenn Zeit bleibt |

## Reservierte DS (keine Lehr-UE)

| DS | Inhalt |
|----|--------|
| R1 | **PLF 1** (nach UE 7; OOP-Kern: Klasse, Kapselung, Interface, Vererbung, Polymorphismus) |
| R2 | **PLF 2** (nach UE 13; KM5 gesamt, Schwerpunkt UE 8–13) |

## PRE-Parallelnotiz (Kollege, nur Soll — nicht Georgs UE)

- **Modellierung, übrige Notationen:** Workflow-/Flussdiagramme, Aktivitäts-/Sequenzdiagramme
  (offizieller SWP-Bereich „Modellierungssprachen, Darstellungen" — UML-**Klassen**diagramm
  liegt bei Georg, UE 11–12).
- Verteilung seiner 2 h (parallel/geblockt): **TBD**, siehe `3HWII/README.md` → Offene Punkte.

---

**Schwerpunkte:** 6 UE OOP-Kern (Klasse→Polymorphismus) · 3 UE Collections/Laufzeit/Exceptions ·
2 UE UML/Modellierung · 2 UE Fundament+Festigung/Projekt
**INFI-Synchronisation:** SWP bleibt im WS DB-frei; ab ~Dez (UE 12) gemeinsame Beispieldomäne
mit INFI andeuten — Details `3HWII/README.md` → Sequenz-Abstimmung.
