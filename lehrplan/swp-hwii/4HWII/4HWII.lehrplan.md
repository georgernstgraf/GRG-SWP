# 4HWII — Lehrplan-Extrakt (IV. Jahrgang, KM7 + KM8) — Stub

> **Klasse:** 4HWII (voraussichtlich SJ 2027/28) · **Jahrgang:** IV. (7. + 8. Semester) ·
> **Kompetenzmodule:** KM7 + KM8 · **Stundentafel:** 4 (4) Wochenstunden ·
> **2+2-Split:** Georg (OOP + Web + UML-Klassendiagramm) + Kollege (PRE + übrige Modellierung)
>
> **Rechtsgrundlage:** BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019, Anlage 1.24
> (Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik), Abschnitt VII, B.4
> „Softwareentwicklung und Projektmanagement" · RIS-Dokument: `NOR40217058`
> · Rechtsstand-Check 2026-07-26: aktuell (siehe [`../RIS.md`](../RIS.md))
>
> **Extraktion:** 2026-09-14 aus [`../LEHRPLAN.md`](../LEHRPLAN.md) Schicht ① (offizieller
> RIS-Extrakt, verbindlich) · **Status: Stub** — Ausbau bei Planung SJ 2027/28 ·
> Einheiten-Gerüst: [`../../../unterricht/HWII-SWP/jg4-einheiten.md`](../../../unterricht/HWII-SWP/jg4-einheiten.md)

---

## 7. Semester – Kompetenzmodul 7

> **Überblick:** KM7 professionalisiert: statt eigene Lösungen zu bauen, werden
> **Frameworks für Standardaufgaben** eingesetzt (Architektur, Einbindung, Auswahl) und
> **Standardalgorithmen objektorientiert** implementiert. Im SWP-Bereich stehen
> **Vorgehensmodelle und Entwicklungsmethoden** (Vergleich, Schätzverfahren,
> Anforderungsanalyse) auf dem Plan; die Schuladaption ② zieht zudem **Entwurfsmuster**
> (GoF) als Lehrstoff vor — offiziell ① erst in KM9. Details:
> [`../kompetenzmodule/km7.md`](../kompetenzmodule/km7.md).

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Objektorientierte Programmierung:** Frameworks für Standardaufgaben einsetzen;
  Standardalgorithmen objektorientiert implementieren.

  > **Erläuterung:** Zwei Kompetenzen: Frameworks (fertige Architekturen für
  > Standardprobleme) auszuwählen, einzubinden und in ihrer Architektur zu verstehen ist der
  > berufliche Alltag; Standardalgorithmen objektorientiert zu implementieren heißt,
  > bekannte Algorithmen (Suchen, Sortieren, Datenstrukturen) in Klassen und Interfaces zu
  > gießen — inklusive Qualitätsanalyse (z. B. O-Notation).
- **Bereich Softwareentwicklung und Projektmanagement:** aktuelle Vorgehensmodelle und
  Entwicklungsmethoden sowie die wichtigsten Entwurfsmuster der Softwareentwicklung
  beschreiben; eine reale Problemstellung analysieren und die unterschiedlichen Methoden zu
  Leistungs-, Termin-, Ressourcen- und Kostenplanung einsetzen.

  > **Erläuterung:** Erst **beschreiben** (Vorgehensmodelle und Entwurfsmuster kennen und
  > vergleichen), dann **anwenden**: eine reale Problemstellung analysieren und daraus
  > Leistungs-, Termin-, Ressourcen- und Kostenplanung ableiten — die klassische
  > Projektplanungs-Trias, die die Absolventenkompetenz explizit einfordert. (Die
  > Schuladaption ordnet die Kostenplanung anders zu; siehe [`../RIS.md`](../RIS.md) §6.)

**Lehrstoff:**
- *Objektorientierte Programmierung:* Frameworks (Architektur, Einbindung, Auswahl);
  Algorithmen (Darstellungsformen, Qualitätsanalyse, Standardalgorithmen).

  > **Erläuterung:** „Frameworks": Aufbau, Einbindung, Auswahlkriterien. „Algorithmen":
  > Algorithmen präzise notieren (Pseudocode, Struktogramm, Code), ihre Qualität bewerten
  > und die Standardalgorithmen OO-umsetzen. Die Schuladaption ② fasst dies als
  > „wiederverwendbare Komponenten" + Entwurfsmuster als Lehrstoff.
- *Softwareentwicklung und Projektmanagement:* Softwareentwicklungsmodelle (Einführung und
  Vergleich von Methoden, Schätzverfahren, Anforderungsanalyse).

  > **Erläuterung:** Das methodische Handwerk der Projektplanung: Methoden einführen und
  > vergleichen (Wasserfall vs. agil), Schätzverfahren (z. B. Planning Poker),
  > Anforderungsanalyse (User Stories, Use Cases).

## 8. Semester – Kompetenzmodul 8

> **Überblick:** KM8 schließt den Web-Bogen: **serverbasierende Internetanwendungen**
> (Client-/Server-Konzept, serverseitige Programmierung, Datenbankanbindung,
> Technologie-Vergleich) — in der Schulumsetzung Hono/Prisma vertieft, deren Fundament die
> Kohorte seit Jg II trägt. Im SWP-Bereich: **Testfälle definieren und systematisch
> testen**, Softwarequalitätsmanagement, PM (Verträge, Softskills) und das Team-Projekt.
> Details: [`../kompetenzmodule/km8.md`](../kompetenzmodule/km8.md).

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Webtechnologien:** serverbasierende Internetanwendungen erstellen.

  > **Erläuterung:** Die Perspektive dreht sich gegenüber KM4 um: Die Logik läuft nun am
  > Server — Requests entgegennehmen (Client-/Server-Konzept), serverseitig programmieren,
  > an Datenbanken anbinden und Technologien bewusst vergleichen. Die Architektur hinter
  > jedem Online-Shop und jeder Web-App.
- **Bereich Softwareentwicklung und Projektmanagement:** Testfälle definieren und damit
  Programme systematisch testen; aktuelle Vorgehensmodelle und Entwicklungsmethoden in der
  Softwareentwicklung anwenden.

  > **Erläuterung:** Systematisches Testen heißt: aus Anforderungen explizite **Testfälle**
  > ableiten (Äquivalenzklassen, Grenzfälle) und Programme damit prüfbar machen — nicht
  > „mal probieren", sondern geplante Verifikation. Dazu die Vorgehensmodelle aus KM7 in
  > der **Anwendung**.

**Lehrstoff:**
- *Webtechnologien:* Erstellung von serverbasierenden Internetanwendungen (Client-/Server
  Konzept, serverseitige Programmierung, Anbindung von Datenbanken, Vergleich unterschiedlicher
  Technologien).

  > **Erläuterung:** Client-/Server-Konzept (wer rechnet wo?), serverseitige Programmierung
  > (Routen, Request/Response), Datenbankanbindung (in der Schulumsetzung Prisma +
  > Repository-Pattern aus KM6) und Technologie-Vergleich. Die Kohorte hat mit
  > Hono+SQLite/REST bereits den KM8-Vorgriff aus KM4 — hier wird er systematisiert.
- *Softwareentwicklung und Projektmanagement:* Softwarequalitätsmanagement (Methoden,
  Testverfahren); Projektmanagement (Verträge, Softskills); Angewandte Softwareentwicklung und
  Projektmanagement (Erstellung eines Softwareprojekts im Team unter Einsatz von
  Projektmanagementmethoden).

  > **Erläuterung:** Drei Stränge: Softwarequalitätsmanagement (Methoden, Testverfahren —
  > fachliche Schnittstelle zur `Deno.test`-Praxis), Projektmanagement (Verträge, Softskills
  > — die „weiche" Seite von Softwareprojekten) und das angewandte Team-Projekt als
  > konzeptioneller Nachfolger des INFI-Verbunds.
