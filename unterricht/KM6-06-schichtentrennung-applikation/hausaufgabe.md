# Aufgabe KM6-06 — Schichtentrennung in einer Applikation

Name: _____________   Abgabe: _____________

**Lektüre:** [Fowler: PresentationDomainDataLayering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
· [Hono: Routing](https://hono.dev/docs/api/routing)
· [Hono: Context](https://hono.dev/docs/api/context)
· [Deno: `Deno.serve`](https://docs.deno.com/api/deno/~/Deno.serve).

---

## 1. Vorhersagen (erst hinschreiben, dann prüfen)

**a)** Du änderst im DB-Schema die Spalte `stand` in `saldo`. Wie viele Dateien
**außerhalb** des Repository-Ordners musst du anfassen? Begründe.

**b)** Der Service importiert `Hono` und `Prisma` direkt. Welche zwei Dinge
werden dadurch unmöglich bzw. deutlich schwerer?

---

## 2. Umsetzung

Zerlege den monolithischen Handler aus der Lesson (oder einen eigenen,
vergleichbaren Fall) in die **fünf Schichten**:

1. **Domäne** — die Fachklasse mit ihren Invarianten (wie `Konto` aus KM5).
2. **Repository** — `interface XRepository` + eine **In-Memory-Implementierung**.
3. **Service** — der Geschäftsablauf; kennt nur das Repository-Interface.
4. **Controller** — übersetzt Ein-/Ausgabe, fängt Fehler, liefert ein neutrales Ergebnis.
5. **Endpoint** — die Route (Hono), die Route + HTTP-Status setzt.

Zwei Dinge sind Pflicht:
- **Dependency Rule:** Importe zeigen nur nach innen
  (`routes → controller → service → repository`); `main.ts` ist der einzige Ort, der
  alle Schichten kennt und verdrahtet.
- **Atomarität:** Der Ablauf mit zwei Schreibvorgängen läuft in **einer** Transaktion
  (`repo.transaktion(...)` bzw. `prisma.$transaction(...)`).

## 3. Fehlerkette nachweisen

- Die Domäne wirft eine **typisierte Fehlerklasse** (z. B. `KeineDeckungError`).
- Der Controller übersetzt sie in eine neutrale `FehlerArt`.
- Der Endpoint macht daraus einen passenden **HTTP-Status** (`404`, `409`, `400`).
- Zeige mit `curl` (oder einem Integrationstest) den Status jeder Fehlerart.

## 4. Tests (rot → grün)

- Der **Service** ist ohne HTTP-Server und ohne echte Datenbank testbar
  (In-Memory-Repository am Interface).
- Eine Überweisung mit fehlender Deckung: Die Regel greift, **kein** Konto ändert sich.
- Ein **Rollback-Test**: Bricht der zweite `speichere` ab, bleiben **beide** Konten
  unverändert (Transaktion greift).
