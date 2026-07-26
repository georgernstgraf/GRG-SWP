# 3HWII — Klassen-Drehscheibe (SJ 2026/27)

> Kohorte: **2AHWII (SJ 2025/26) → 3AHWII (SJ 2026/27)** · Fach SWP, Jg III (KM5 + KM6).
> **Neu ab SJ 2026/27:** OOP mit **Deno/TypeScript** (Nachfolger der C#-Variante, archiviert
> unter `ARCHIV/2025-26-3ahwii/` bzw. Repo GRG-CS).

## Rahmen

| Punkt | Wert |
|---|---|
| **Wochenstunden SWP (Jg III)** | 4 = **2 h Georg** (OOP + Web + UML-Klassendiagramm) + **2 h Kollege** (PRE/Projektmanagement + übrige Modellierung) |
| **Zeitmodell (Georg)** | 1 DS/Woche → **13 echte UE + 2 PLF-DS** pro Semester |
| **Beurteilung** | PLF / Hausübungen / Mitarbeit je 1/3 (Details: Root-`README.md`) |
| **Stack** | Deno · TypeScript · `Deno.test` · Deno Desktop (GUI, KM6) · Prisma/SQLite (via INFI) |
| **KM-Steckbriefe** | [`kompetenzmodule/km5.md`](../kompetenzmodule/km5.md) · [`kompetenzmodule/km6.md`](../kompetenzmodule/km6.md) |
| **Semesterpläne** | [`semesterplan-ws.md`](semesterplan-ws.md) (KM5) · [`semesterplan-ss.md`](semesterplan-ss.md) (KM6) |
| **Vorwissen** | [`docs/lehrplan/jg2-einheiten.md`](../docs/lehrplan/jg2-einheiten.md) — TS, OO-Vorgriff (`class Bruch` + Tests), HTML/CSS, DOM, Promises/async/await, Fetch, Hono+SQLite+REST, Prisma-Berührung, tRPC/htmx |

---

## 3HWII-Verbund mit INFI (eine App – zwei Noten)

> **Querverweis:** Dieselbe Kohorte hat parallel **INFI** (Jg III Datenbanken). INFI-Plan:
> [`GRG-INFI/docs/lehrplan/jg3-einheiten.md`](https://github.com/georgernstgraf/GRG-INFI/blob/main/docs/lehrplan/jg3-einheiten.md)
> (wird im Zuge der Spiegelarbeit ebenfalls auf das KM-/3HWII-Format umgestellt — siehe
> `GRG-INFI/docs/ai/HANDOFF.md`).

Beide Fächer laufen im **selben Deno/TypeScript/Prisma/SQLite-Stack** bei **derselben Kohorte**.
Sie werden als **ein** Spiralcurriculum mit **gemeinsamem Abschlussprojekt** geführt: *eine* App,
in beiden Fächern mit unterschiedlicher Rubrik benotet.

### Schichten-Aufteilung (wer lehrt was)

| Schicht | Fach / KM | Inhalt |
|---|---|---|
| Domäne (pure OOP) | **SWP KM5** | TS-Klassen, Vererbung, Polymorphismus, Interfaces, Generics — **DB-frei**, testgetrieben |
| Präsentation + Architektur | **SWP KM6** | Deno-Desktop-GUI, Bindings, Events, MVC |
| Projektmanagement | **SWP PRE (Kollege)** | PM-Grundlagen, Rollen, Planung, PM-Begleitung des Teamprojekts |
| Persistenz & Abfragen | **INFI KM5** | komplexe SQL, Normalformen, CTEs, Views, Transaktionen, DDL/Indizes |
| Anbindung | **INFI KM6** | Prisma vertieft, REST-API, Prepared Statements, DB-Schnittstellen |

### Brücke = Repository (gemeinsames Artefakt)

SWP definiert das `interface MediumRepository { finde(id): Promise<Medium>; … }` (Vertrag, OOP,
testgetrieben). **INFI implementiert es mit Prisma.** Eine Datei, zwei Fächer, zwei Noten-Rubriken:

- **SWP-Note:** OOP-Design (Vererbung/Schnittstellen sauber?), Schichtentrennung (MVC),
  GUI/Events, (PM: Issues/Commits/Rollen — Rubrik mit Kollege abstimmen).
- **INFI-Note:** Schema-Qualität, komplexe Abfragen (CTEs/Views), Datenanbindung (Prisma/REST),
  EXPLAIN/Optimierung.

### O/R-Mapping: Polymorphismus über Prisma (zentraler Knackpunkt)

Prisma kennt **keine Vererbung**. Der Object-Relational-Impedance-Mismatch ist *der* pädagogische
Kernpunkt — er wird am Repository greifbar. **Empfehlung: TPH (Single-Table Inheritance) + Mapper.**
Prisma/INFI-Seite bleibt flach (ein Modell `Medium` mit Discriminator `type` + nullable
Subtyp-Spalten + CHECK); die echte Hierarchie lebt im OOP-Layer (SWP). Das Repository „pfriemelt"
die Polymorphismus beim Lesen/Schreiben hinein:

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

**Diskussion wert (INFI↔SWP-Spannung):** INFI KM5 lehrt **Normalisierung** → würde TPT (Tabellen
pro Subtyp) bevorzugen. SWP/Prisma will's einfach → TPH. Frage an die Klasse: *„Warum verletzt
der OOP-Layer hier bewusst die 3NF?"* → weil das Repository die Integrität übernimmt, nicht die
Tabelle.

### Sequenz-Abstimmung

- **5. Sem (parallel, unabhängig):** SWP OOP-Grundlagen am `Bruch`/kleinen Beispielen (DB-frei);
  INFI komplexe Abfragen/Normalisierung auf bekannter Beispiel-DB. Ab ~Dez: gemeinsame
  Beispieldomäne.
- **6. Sem (Konvergenz):** SWP baut ab UE 5 die Desktop-GUI aufs Repository (nutzt INFIs
  Prisma-Schicht). **Letzte ~4–5 UE:** gemeinsames Verbundprojekt (eine App, zwei Noten).

### Domäne — 5 Vorschläge (Schüler co-decided)

Die Domäne wird bewusst mit **Hierarchie + Zustandsautomat + reichen Abfragen** gewählt, weil
dort die O/R-Pfriemelei am lehrreichsten ist:

| # | Domäne | Vererbung (Beispiel) | State / Events |
|---|--------|----------------------|----------------|
| 1 | **Bibliothek/Mediathek** | `Medium`→`Buch`/`Film`/`Spiel` | Ausleihe: offen/überfällig/zurück |
| 2 | **Online-Shop** | `Produkt`→`Physisch`/`Digital`/`Abo` | Bestellung: Warenkorb→bezahlt→versendet→storniert |
| 3 | **Musik-Streaming** | `Playable`→`Track`/`Podcast` | Wiedergabe: spielt/pausiert/beendet |
| 4 | **Schulverwaltung/Noten** | `Person`→`SchülerIn`/`LehrerIn` | Note: offen/eingetragen/berufen |
| 5 | **Tierpension/Tierheim** | `Tier`→`Hund`/`Katze`/`Vogel` | Aufenthalt: angemeldet/anwesend/abgemeldet |

Die Schüler wählen mit (Abstimmung zu Verbundprojekt-Start im SS); die gewählte Domäne gilt in
**beiden** Fächern.

---

## Offene Punkte (TBD)

1. **PM-Koordination mit Kollege:** PM-Rahmung des Verbundprojekts (Rollen, Issues,
   PM-Dokumente) und PM-Rubrik in der SWP-Note — vor SS-Start abstimmen.
2. **PM-Rubrik des Kollegen:** wie der Kollege seine 2 h auf die Semester verteilt
   (wöchentlich parallel oder geblockt) — beeinflusst, wann PM-Methoden im Projekt greifen.
3. **Deno-Desktop-Version:** vor SS-Start den aktuellen Stand (≥ 2.9) verifizieren;
   Fallback: Web-UI via Hono+Vite statt Desktop.
