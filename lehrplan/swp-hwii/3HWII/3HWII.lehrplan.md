# 3HWII — Lehrplan-Extrakt (III. Jahrgang, KM5 + KM6)

> **Klasse:** 3HWII (Schuljahr 2026/27) · **Jahrgang:** III. (5. + 6. Semester) ·
> **Kompetenzmodule:** KM5 + KM6 · **Stundentafel:** 4 (4) Wochenstunden ·
> **2+2-Split:** Georg (OOP + Web + UML-Klassendiagramm) + Kollege (PRE + übrige Modellierung)
>
> **Rechtsgrundlage:** BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019, Anlage 1.24
> (Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik), Abschnitt VII, B.4
> „Softwareentwicklung und Projektmanagement" · RIS-Dokument: `NOR40217058`
> · Rechtsstand-Check 2026-07-26: aktuell (siehe [`../RIS.md`](../RIS.md))
>
> **Extraktion:** 2026-09-07 aus [`../LEHRPLAN.md`](../LEHRPLAN.md) Schicht ① (offizieller
> RIS-Extrakt, verbindlich) · Volltext aller Jahrgänge dort · Schuladaption ②: [`../HWII_SWP.pdf`](../HWII_SWP.pdf)

---

## 5. Semester – Kompetenzmodul 5

> **Überblick:** KM5 ist der konzeptionelle Kern der OOP-Ausbildung: vom „Programmieren
> können" (Jg I/II) zum „sauber objektorientiert entwerfen". Klasse vs. Instanz vs. Zustand,
> Kapselung/Sichtbarkeit, Vererbung, Polymorphismus und Interfaces als Verträge — flankiert
> von Collections/Generics, Laufzeitanalyse (O-Notation, `Deno.bench`) und dem
> UML-Klassendiagramm als Denk- und Kommunikationsnotation. Details:
> [`../kompetenzmodule/km5.md`](../kompetenzmodule/km5.md).

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Objektorientierte Programmierung:** die Konzepte der objektorientierten
  Programmierung mit Vererbung und Polymorphismus anwenden.

  > **Erläuterung:** Vererbung und Polymorphismus heben die OOP über „Objekte mit Daten und
  > Methoden" hinaus: Vererbung baut Hierarchien (Gemeinsames einmal definieren, Spezialfälle
  > ableiten), Polymorphismus bewirkt, dass derselbe Aufruf je nach Objekttyp unterschiedlich
  > wirkt (dynamische Bindung). Grundlage erweiterbarer Software — und später die Brücke zum
  > O/R-Mapping im INFI-Verbund.
- **Bereich Softwareentwicklung und Projektmanagement:** Problemlösungen in grafischer
  Notation darstellen und erweiterbare Modelle dazu entwickeln.

  > **Erläuterung:** „Grafische Notation" meint hier das UML-Klassendiagramm: Klassen,
  > Attribute, Methoden, Assoziationen und Vererbungspfeile als standardisierte Sprache, um
  > Design zu besprechen, bevor Code existiert — im Beruf die Notation von Code-Reviews,
  > technischer Doku und Diplomarbeit. „Erweiterbar" heißt: das Modell muss Wachstum
  > aushalten (offen für neue Typen ohne Umbau).

**Lehrstoff:**
- *Objektorientierte Programmierung:* Elemente und Konzepte (Klasse, Instanz, Methode,
  Attribut und Sichtbarkeit, grafische Darstellung, Vererbung, Polymorphismus).

  > **Erläuterung:** Klasse (Bauplan) vs. Instanz (Objekt zur Laufzeit), Methode (Verhalten),
  > Attribut (Zustand) und Sichtbarkeit (public/private — Kapselung), grafische Darstellung
  > (UML), Vererbung und Polymorphismus. In der Schulumsetzung ② zusätzlich: Interfaces als
  > Verträge, Collections/Generics als „Alternativen zu Arrays", Laufzeitanalysen mit
  > `Deno.bench` und Exceptions als angewandte Klassenhierarchie.
- *Softwareentwicklung und Projektmanagement:* Modellierung (Modellierungssprachen,
  Darstellungen).

  > **Erläuterung:** Modellierung heißt: von der Problemstellung zu einem Modell, das die
  > wesentlichen Begriffe und Beziehungen der Domäne festhält. „Modellierungssprachen,
  > Darstellungen" sind die Notationen dafür; die Schulumsetzung fokussiert bewusst das
  > UML-Klassendiagramm (Georg), übrige Diagrammtypen liegen beim PRE-Kollegen.

> **Abweichung Schuladaption ②** (siehe [`../RIS.md`](../RIS.md) §6): KM5-OOP wird um
> Schnittstelle, Zustand, „Alternativen zu Arrays (Collections)" und „Laufzeitanalysen"
> erweitert (vorgezogen aus ① KM9 „Objektorientierte Prinzipien" bzw. ① KM7 Algorithmen).
> Unsere Abdeckungsplanung ([`../kompetenzmodule/km5.md`](../kompetenzmodule/km5.md),
> [`jg3-semesterplan-ws.md`](../../../unterricht/HWII-SWP/jg3-semesterplan-ws.md)) bezieht
> sich auf ②, mit Rückverweis auf ①.

## 6. Semester – Kompetenzmodul 6

> **Überblick:** KM6 hat zwei Gesichter: (1) erweiterbare, wartbare Programme **mit
> grafischer Oberfläche** — die KM5-Klassen bekommen über Deno Desktop (Webview + HTML/CSS
> aus Jg II) ein Gesicht; Architekturthemen (Repository-Pattern, MVC/Schichtentrennung,
> parallele Abläufe) rücken ins Zentrum. (2) **Projektmanagement** (PRE, Kollege):
> PM-Grundlagen und die methodische Begleitung des Teamprojekts. Das Semester mündet im
> INFI-Verbundprojekt „eine App, zwei Noten". Details:
> [`../kompetenzmodule/km6.md`](../kompetenzmodule/km6.md).

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Objektorientierte Programmierung:** erweiterbare und wartbare Programme mit
  grafischer Oberfläche erstellen.

  > **Erläuterung:** „Erweiterbar und wartbar" ist die Qualitätsdimension dieses Semesters:
  > Programme so strukturieren, dass neue Anforderungen ohne Umschreiben Bestand haben —
  > über Kapselung, Interfaces und Schichtentrennung (MVC, Repository-Pattern). „Mit
  > grafischer Oberfläche" verbindet die Domänenlogik mit einer echten UI (Deno Desktop):
  > Fenster, Events, Bindings.
- **Bereich Softwareentwicklung und Projektmanagement:** Projektmanagement in der
  Softwareentwicklung anwenden.

  > **Erläuterung:** Der Einstieg ins methodische Arbeiten im Team: Definition von Projekten,
  > Rollen im Projektteam, Planungselemente und Projektdokumente — angewandt am
  > durchlaufenden Teamprojekt (PM-Rahmung durch den PRE-Kollegen).

**Lehrstoff:**
- *Objektorientierte Programmierung:* Programmierkonzepte (weitere OOP-Konzepte, parallele
  Abläufe); grafische Benutzeroberflächen (Frameworks, GUI-Elemente, Events).

  > **Erläuterung:** Zwei Stränge: „weitere OOP-Konzepte, parallele Abläufe" vertiefen KM5
  > und führen in Nebenläufigkeit (async/await, `Promise.all`, Race-Problematik);
  > „grafische Benutzeroberflächen" setzen das praktisch um — in der Schulumsetzung mit
  > Deno Desktop, dessen UI-Komponenten und Event-Modell direkt auf das Jg-II-Wissen
  > aufbauen.
- *Softwareentwicklung und Projektmanagement:* Grundlagen des Projektmanagements (Definition,
  Projektteam und Rollen, Planungselemente, Dokumente); Angewandte Softwareentwicklung und
  Projektmanagement (Durchführung eines Softwareprojekts im Team unter Einsatz von
  Projektmanagementmethoden).

  > **Erläuterung:** Die PM-Grundlagen liefern das Vokabular; „Angewandte
  > Softwareentwicklung" verlangt die Durchführung eines Softwareprojekts im Team — bei uns
  > der INFI-Verbund, bei dem SWP Domäne + GUI + Repository-Vertrag liefert und INFI die
  > Persistenz (PRE-Soll: Kollege, nicht ausgearbeitet).

> **Unterrichtsaufteilung (Schuladaption ②):** PRE/PM-Anteile (Kollege, 2 h) nur als
> „Soll" sichtbar, nicht in diesem Repo ausgearbeitet — siehe
> [`../kompetenzmodule/km6.md`](../kompetenzmodule/km6.md) und
> [`jg3-semesterplan-ss.md`](../../../unterricht/HWII-SWP/jg3-semesterplan-ss.md).
