# LEHRPLAN — Softwareentwicklung und Projektmanagement (WII–Betriebsinformatik)

> **Dreischichtig:** ① **offizieller Extrakt** (RIS, verbindlich) · ② **Schuladaption**
> (`HWII_SWP.pdf`, schulinterne Umschichtung) · ③ **Didaktik/Stack** (unsere Umsetzung).
> Rechtsstand & Abweichungs-Analyse: [`RIS.md`](RIS.md) · Metadaten/Stundentafel/Stack:
> [`../METADATA.md`](../METADATA.md) · KM-Steckbriefe: [`kompetenzmodule/`](kompetenzmodule/).
>
> **Wer unterrichtet was (ab Jg III):** Bereiche **OOP + Web + UML-Klassendiagramm = Georg**;
> **PRE (Projektmanagement) + übrige Modellierung = Kollege** (2+2-Split; PRE hier nur als
> Soll sichtbar, nicht ausgearbeitet).
>
> **Erläuterungs-Ebene:** Alle `> **Überblick:**`- und `> **Erläuterung:**`-Blockquotes sind
> didaktische Annotationen (was das Thema inhaltlich IST, mit Anwendungs-/Berufsbezug) —
> klar getrennt vom wortwörtlichen Gesetzestext. Substanz: KM-Steckbriefe + `RIS.md`.

---

# ① Offizieller Extrakt (RIS, Anlage 1.24 idF BGBl. II Nr. 235/2019)

> Getreuer Extrakt des Unterrichtsgegenstands „Softwareentwicklung und Projektmanagement"
> (Abschnitt VII, B.4) aus der konsolidierten Fassung `NOR40217058` (Quellen: `RIS.md` §2).
> **Sprach-agnostisch** — keine Programmiersprache wird vorgeschrieben.

**Absolventenkompetenzen (III. Abschnitt, Auszug):** *„Im Bereich Softwareentwicklung und
Projektmanagement können die Absolventinnen und Absolventen Vorgehensmodelle,
Entwicklungsmethoden und wichtige Entwurfsmuster der Softwareentwicklung anwenden sowie
Programme systematisch testen. Sie können reale Problemstellungen analysieren und die
unterschiedlichen Methoden zu Leistungs-, Termin-, Ressourcen- und Kostenplanung einsetzen."*

## I. Jahrgang (1. und 2. Semester)

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Webtechnologien:** grundlegende Konzepte und Auszeichnungssprachen für die
  Webentwicklung erläutern und statische Webseiten erstellen.

  > **Erläuterung:** „Auszeichnungssprachen" heißt: HTML beschreibt die *Struktur* eines
  > Dokuments (Überschriften, Absätze, Tabellen, Formulare), CSS dessen *Darstellung*.
  > „Statische Webseiten" sind Seiten, deren Inhalt beim Aufruf feststeht — noch ohne
  > Programmlogik im Browser; sie sind das Fundament, auf dem ab Jg II Interaktion aufbaut.
- **Bereich Strukturierte Programmierung:** grundlegende Datentypen und Kontrollstrukturen
  anwenden; einfache algorithmische Problemstellungen analysieren, Lösungswege finden sowie
  diese darstellen und umsetzen; eine Entwicklungsumgebung bedienen.

  > **Erläuterung:** Strukturierte Programmierung ist der klassische Einstieg ins
  > Programmieren: Programme entstehen als kontrollierte Abfolge von Anweisungen (Folge,
  > Verzweigung, Wiederholung) über Variablen und Basis-Datentypen. „Lösungswege darstellen"
  > meint algorithmisches Denken vor dem Tippen (Struktogramm, Pseudocode);
  > „Entwicklungsumgebung bedienen" ist die praktische Basis (Editor, Ausführen, Fehler
  > lesen).

**Lehrstoff:**
- *Webtechnologien:* Informationsdarstellung im Netz (Dokumentenbeschreibungssprachen,
  Informationstypen und Datenformate, Präsentation).

  > **Erläuterung:** Wie wird Information im Netz repräsentiert und übertragen?
  > Dokumentenbeschreibungssprachen (HTML) strukturieren Inhalte; Informationstypen und
  > Datenformate (Text, Bild, Zahl, JSON & Co.) definieren, was Inhalte überhaupt „sind";
  > „Präsentation" fragt, wie sie dem Betrachter wirksam gezeigt werden. Begrifflicher
  > Einstieg in alles Webliche der Folgejahrgänge.
- *Strukturierte Programmierung:* Programmiersprachenelemente (Anweisungsfolge, Verzweigung,
  Wiederholung, Variable und Datentypen); Algorithmus (Programmierung, Codierung, schrittweise
  Verfeinerung, Entwurf und Darstellung von Algorithmen); Einstieg in die Programmierung und
  Systemprogramme (Einsatz einer visuellen Oberfläche, Systemprogramme, Interpreter, Compiler,
  Fehlerarten).

  > **Erläuterung:** Drei Bausteine: (1) Sprachenelemente — Anweisungsfolge, Verzweigung,
  > Wiederholung, Variable/Datentypen als „Grammatik" jedes Programms; (2) Algorithmik —
  > schrittweise Verfeinerung: ein Problem wird in Teilprobleme zerlegt, der Lösungsweg
  > entworfen, dargestellt und erst dann codiert; (3) Systemkontext — visuelle Oberfläche
  > sowie Interpreter vs. Compiler samt Fehlerarten (Syntax-, Laufzeit-, Logikfehler), damit
  > Lernende Fehlermeldungen als klassifizierbare Muster lesen statt als Rätsel.

## II. Jahrgang

### 3. Semester – Kompetenzmodul 3

> **Überblick:** KM3 ist der Einstieg in die Webentwicklung: Dokumente mit HTML strukturiert
> beschreiben und mit CSS gestalten (Boxmodell, Flexbox, Selektoren, Fonts) — das Ergebnis
> sind statische Webseiten ohne Programmlogik im Browser. Gleichzeitig wird die strukturierte
> Programmierung in einer höheren Sprache abgeschlossen. In der Schulumsetzung (SJ 2025/26)
> wurde zusätzlich die OOP mit einer `Bruch`-Klasse vorgezogen — Jg III startet daher mit
> OO-Vorwissen. Details: [`kompetenzmodule/km3.md`](kompetenzmodule/km3.md).

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Strukturierte Programmierung:** grundlegende Algorithmen in einer höheren
  Programmiersprache umsetzen.

  > **Erläuterung:** Die im Jg I entworfenen Lösungsideen werden nun in einer echten,
  > verbreiteten Sprache (hier: TypeScript/Deno) lauffähig umgesetzt — mit Funktionen und
  > Modularisierung statt nur Anweisungsfolgen.
- **Bereich Webtechnologien:** Internetanwendungen gestalten.

  > **Erläuterung:** „Gestalten" ist bewusst weiter gefasst als „Webseiten schreiben": es
  > geht um Gestaltung von Inhalt und Darstellung nach Kriterien und Methoden — in diesem
  > Semester konzentriert auf die statische Seite des Spektrums.

**Lehrstoff:**
- *Strukturierte Programmierung:* Dateiverarbeitung (Ein-, Ausgabe); Modularisierung
  (Funktionen und Unterprogramme mit Übergabeparametern).

  > **Erläuterung:** Dateiverarbeitung (Ein-/Ausgabe) macht Programme nützlich, die über
  > Variablen hinaus Daten halten — Lesen/Schreiben von Dateien als einfachste Persistenz.
  > Modularisierung mit Funktionen und Übergabeparametern ist das zentrale Strukturprinzip:
  > wiederverwendbare, testbare Bausteine statt Monolithen — direkte Vorstufe der Klassen
  > in KM5.
- *Webtechnologien:* Design und Inhalte (Kriterien, Methoden, Inhaltsformate).

  > **Erläuterung:** „Design und Inhalte" verbindet Ästhetik mit Struktur: nach welchen
  > Kriterien und mit welchen Methoden werden Webinhalte aufbereitet (Typografie, Layout,
  > Inhaltsformate)? Praktisch: HTML-Semantik plus erste systematische CSS-Gestaltung.

### 4. Semester – Kompetenzmodul 4

> **Überblick:** KM4 hebt die Webseiten von statisch auf interaktiv: clientseitige
> Programmierung im Browser (DOM, Events, asynchrone Programmierung mit Promises und
> async/await) plus komplexes, responsives Design. In der Schulumsetzung kamen darüber
> hinaus HTTP-Grundlagen und ein erstes Backend (Hono + SQLite/REST) als KM8-Vorgriff dazu.
> Details: [`kompetenzmodule/km4.md`](kompetenzmodule/km4.md).

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Strukturierte Programmierung:** grundlegende Algorithmen in einer höheren
  Programmiersprache umsetzen.

  > **Erläuterung:** Wie in KM3, hier auf der Vertiefungsstufe: zusammengesetzte Datentypen
  > und Standardalgorithmen sind das Werkzeug für Datenmengen, die einfache Variablen
  > sprengen.
- **Bereich Webtechnologien:** clientseitige Internetanwendungen erstellen.

  > **Erläuterung:** „Clientseitig" heißt: Die Logik läuft im Browser des Nutzers — auf
  > Ereignisse reagieren, das DOM manipulieren, Daten nachladen (fetch). Der Schritt vom
  > Dokument zur Anwendung und das Fundament aller späteren Frontend-Themen.

**Lehrstoff:**
- *Strukturierte Programmierung:* Zusammengesetzte Datentypen (Felder, Zeichenketten,
  Strukturen); Standardalgorithmen (Operationen auf Datenstrukturen).

  > **Erläuterung:** Zusammengesetzte Datentypen (Felder/Arrays, Zeichenketten,
  > Strukturen/Objekte) strukturieren Datenmengen; Standardalgorithmen (Sortieren, Filtern,
  > Suchen, Aggregieren) sind die wiederkehrenden Grundmuster der Datenverarbeitung — hier
  > funktional mit `sort`/`filter` umgesetzt.
- *Webtechnologien:* Erstellung von Internetanwendungen (Clientseitige Programmierung).

  > **Erläuterung:** In der Schulumsetzung: DOM-Manipulation, Event-Handling, HTTP/fetch,
  > Promises und async/await. Die Asynchronität ist das konzeptionelle Kernstück: Das
  > Denken in starren Abläufen wird abgelöst durch Reagieren auf Ereignisse.

## III. Jahrgang

### 5. Semester – Kompetenzmodul 5

> **Überblick:** KM5 ist der konzeptionelle Kern der OOP-Ausbildung: vom „Programmieren
> können" (Jg I/II) zum „sauber objektorientiert entwerfen". Klasse vs. Instanz vs. Zustand,
> Kapselung/Sichtbarkeit, Vererbung, Polymorphismus und Interfaces als Verträge — flankiert
> von Collections/Generics, Laufzeitanalyse (O-Notation, `Deno.bench`) und dem
> UML-Klassendiagramm als Denk- und Kommunikationsnotation. Die Schuladaption ② erweitert
> den offiziellen Stoff um Schnittstelle, Zustand, Collections und Laufzeitanalysen.
> Details: [`kompetenzmodule/km5.md`](kompetenzmodule/km5.md).

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

### 6. Semester – Kompetenzmodul 6

> **Überblick:** KM6 hat zwei Gesichter: (1) erweiterbare, wartbare Programme **mit
> grafischer Oberfläche** — die KM5-Klassen bekommen über Deno Desktop (Webview + HTML/CSS
> aus Jg II) ein Gesicht; Architekturthemen (Repository-Pattern, MVC/Schichtentrennung,
> parallele Abläufe) rücken ins Zentrum. (2) **Projektmanagement** (PRE, Kollege):
> PM-Grundlagen und die methodische Begleitung des Teamprojekts. Das Semester mündet im
> INFI-Verbundprojekt „eine App, zwei Noten". Details: [`kompetenzmodule/km6.md`](kompetenzmodule/km6.md).

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

## IV. Jahrgang

### 7. Semester – Kompetenzmodul 7

> **Überblick:** KM7 professionalisiert: statt eigene Lösungen zu bauen, werden
> **Frameworks für Standardaufgaben** eingesetzt (Architektur, Einbindung, Auswahl) und
> **Standardalgorithmen objektorientiert** implementiert. Im SWP-Bereich stehen
> **Vorgehensmodelle und Entwicklungsmethoden** (Vergleich, Schätzverfahren,
> Anforderungsanalyse) auf dem Plan; die Schuladaption ② zieht zudem **Entwurfsmuster**
> (GoF) als Lehrstoff vor — offiziell ① erst in KM9. Details: [`kompetenzmodule/km7.md`](kompetenzmodule/km7.md).

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
  > Schuladaption ordnet die Kostenplanung anders zu; siehe [`RIS.md`](RIS.md) §6.)

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

### 8. Semester – Kompetenzmodul 8

> **Überblick:** KM8 schließt den Web-Bogen: **serverbasierende Internetanwendungen**
> (Client-/Server-Konzept, serverseitige Programmierung, Datenbankanbindung,
> Technologie-Vergleich) — in der Schulumsetzung Hono/Prisma vertieft, deren Fundament die
> Kohorte seit Jg II trägt. Im SWP-Bereich: **Testfälle definieren und systematisch
> testen**, Softwarequalitätsmanagement, PM (Verträge, Softskills) und das Team-Projekt.
> Details: [`kompetenzmodule/km8.md`](kompetenzmodule/km8.md).

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

## V. Jahrgang – Kompetenzmodul 9

> **Überblick:** KM9 (9.+10. Semester, 6 Wochenstunden) ist das Abschlussmodul:
> **Webservices** nutzen und erstellen (Sicherheitsaspekte, Schnittstellen, Datenformate,
> Frameworks), **Software-Patterns** auswählen und einsetzen (① „Objektorientierte
> Prinzipien, Entwurfsmuster"; ② „Entwurfsmuster-Umsetzung"/„wiederverwendbare
> Komponenten"), **Refactoring** auf Anwendungs-, Klassen- und Methodenebene — getragen vom
> durchgängigen Team-Projekt mit Matura-Bezug. Details: [`kompetenzmodule/km9.md`](kompetenzmodule/km9.md).

### 9. Semester

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Webtechnologien:** Webservices nutzen und eigene erstellen.

  > **Erläuterung:** Webservices sind die Maschine-zu-Maschine-Schnittstelle des Webs
  > (REST & Co.): bestehende APIs konsumieren und eigene entwerfen (Schnittstellen-Design,
  > Datenformate, Sicherheitsaspekte) — der berufliche Alltag moderner Softwareentwicklung.
- **Bereich Objektorientierte Programmierung:** Software-Pattern auswählen und einsetzen.

  > **Erläuterung:** Entwurfsmuster (GoF-Kanon, in KM7 eingeführt) sind erprobte Lösungen
  > wiederkehrender Designprobleme. „Auswählen" heißt, das passende Muster zur Problemklasse
  > zu erkennen; „einsetzen", es idiomatisch umzusetzen — inklusive der OO-Prinzipien
  > (z. B. Open-Closed), auf denen sie beruhen.
- **Bereich Softwareentwicklung und Projektmanagement:** Anwendungs-, Klassen- und
  Methodenrefactoring durchführen; Vorgehensmodelle und Entwicklungsmethoden in der
  Softwareentwicklung anwenden.

  > **Erläuterung:** Refactoring heißt: das Verhalten von Software unverändert lassen, ihre
  > Struktur verbessern — auf Methoden-, Klassen- und Anwendungsebene (Code Smells →
  > gezielte Refactorings). Es setzt die Testdisziplin aus KM8 voraus und wird im
  > Team-Projekt kontinuierlich angewandt.

**Lehrstoff:**
- *Webtechnologien:* Webservices (Sicherheitsaspekte, Schnittstellen, Informationstypen und
  Datenformate, Frameworks).

  > **Erläuterung:** Webservices mit Sicherheitsaspekten (AuthN/AuthZ), Schnittstellen-Design,
  > Datenformaten (JSON-Schema, Protobuf) und Frameworks — baut auf KM8s Serverarbeit auf
  > und führt zur eigenen API.
- *Objektorientierte Programmierung:* Software-Patterns (Objektorientierte Prinzipien,
  Entwurfsmuster).

  > **Erläuterung:** Die objektorientierten Prinzipien als Fundament, die Entwurfsmuster als
  > darauf aufbauender Werkzeugkasten — in der Umsetzung, nicht nur in der Beschreibung.
- *Softwareentwicklung und Projektmanagement:* Angewandte Softwareentwicklung und
  Projektmanagement (Durchführung eines Softwareprojekts im Team unter Einsatz von
  Projektmanagementmethoden); Refactoring (Refactoring in Softwareprojekten).

  > **Erläuterung:** Zwei Stränge: das fortlaufende Team-Projekt (Durchführung unter
  > Einsatz von PM-Methoden) und Refactoring im Projektkontext — strukturierte Verbesserung
  > des eigenen Projektcodes.

### 10. Semester

**Bildungs- und Lehraufgabe:** Die Schülerinnen und Schüler können im
- **Bereich Webtechnologien:** komplexe dynamische Webanwendungen erstellen.

  > **Erläuterung:** Die Synthese aller Web-Stränge: der Gesamterstellungsprozess von der
  > Anforderung bis zum Deployment, Sicherheitsaspekte über die gesamte Anwendung und der
  > bewusste Einsatz von Frameworks.
- **Bereich Objektorientierte Programmierung:** Klassenbibliotheken erstellen.

  > **Erläuterung:** Eigene Code-Bibliotheken mit sauberer Schnittstelle bauen, die andere
  > Projekte (und die Diplomarbeit) konsumieren können — Wiederverwendbarkeit als Endpunkt
  > der OOP-Ausbildung. (Schuladaption ②: „wiederverwendbare Komponenten".)
- **Bereich Softwareentwicklung und Projektmanagement:** Vorgehensmodelle und
  Entwicklungsmethoden in der Softwareentwicklung anwenden.

  > **Erläuterung:** Methodenwahl begründen, das Projekt real durchführen, Ergebnisse
  > präsentieren — die Anwendung im Abschlussprojekt mit Matura-Bezug.

**Lehrstoff:**
- *Webtechnologien:* Webanwendung (Gesamterstellungsprozess dynamischer Web-Anwendungen,
  Sicherheitsaspekte, Frameworks).

  > **Erläuterung:** Frontend, Backend, Persistenz, Deployment als ein Prozess; Sicherheit
  > über die gesamte Anwendung (OWASP-Perspektive); Frameworks bewusst gewählt — die
  > Vollendung des Spiralcurriculums Web.
- *Objektorientierte Programmierung:* Arbeiten mit Klassenbibliotheken.

  > **Erläuterung:** Entwurf, Dokumentation, Versionierung und Wiederverwendung eigener
  > Bibliotheken.
- *Softwareentwicklung und Projektmanagement:* Angewandte Softwareentwicklung und
  Projektmanagement (Durchführung eines Softwareprojekts im Team unter Einsatz von
  Projektmanagementmethoden).

  > **Erläuterung:** Das Abschluss-Team-Projekt als Integrationsfläche: alle Methoden von
  > KM5–KM9 (OOP, Patterns, Testen, PM, Refactoring) in einem realen Produkt.

---

# ② Schuladaption (HWII_SWP.pdf)

Die schulinterne Adaption ([`HWII_SWP.pdf`](HWII_SWP.pdf)) schichtet den Lehrstoff um und
reichert ihn an — Basis der bisherigen Einheitenplanung. **Wesentliche Differenzen zu ①**
(Analyse: `RIS.md` §6):

| Thema | ① offiziell | ② Schuladaption |
|-------|-------------|------------------|
| Web-Einstieg | I. Jahrgang | 2. Klasse (KM3/KM4 als Web-Block) |
| Strukturierte Programmierung | I. Jg + KM3/KM4 | vollständig 1. Klasse |
| KM4 | nur „Clientseitige Programmierung" | + fortgeschrittenes Styling (Layout, Animationen, Endgerät) |
| KM5 OOP | ohne Schnittstelle/Zustand/Collections/Laufzeit | **+ Schnittstelle, Zustand, Collections, Laufzeitanalysen** |
| KM7 | Frameworks + Algorithmen; Kostenplanung; Patterns nur als Bildungsaufgabe | Komponenten + Standardalgorithmen; **Entwurfsmuster als Lehrstoff** |
| KM9/10 OOP | Software-Patterns (OO-Prinzipien) / Klassenbibliotheken | Entwurfsmuster (Umsetzung) / wiederverwendbare Komponenten |

② gliedert die Blöcke je Semester in **„SWP"** (fachliche Softwareentwicklung — Georg) und
**„PRE"** (Projektmanagement — Kollege); diese Trennung spiegelt die tatsächliche
Lehrer-Aufteilung. **Verbindlich bleibt ①**; die Abdeckungstabellen der Semesterpläne
beziehen sich auf ② mit Rückverweis auf ①.

---

# ③ Didaktik & Stack (unsere Umsetzung)

- **Didaktische Grundsätze:** BGBl. II Nr. 262/2015 Anlage 1 (Handlungsorientierung,
  Projektbezug, fächerübergreifender Unterricht).
- **Sprach-Wahl:** Der Lehrplan ist sprach-agnostisch. **Ab SJ 2026/27:** Jg III OOP mit
  **Deno/TypeScript** (Nachfolger von C#/.NET, archiviert unter `ARCHIV/2025-26-3ahwii/`
  + Repo GRG-CS); GUI (KM6) via **Deno Desktop** (≥ 2.9). Begründung: Stack-Konsistenz
  über alle Jahrgänge und nahtloser Anschluss an Jg II (Web/TS). Details: `../METADATA.md`.
- **Fächerübergreifend mit INFI:** gleiche Kohorte, gleicher Stack (Prisma/SQLite);
  Verbundprojekt „eine App, zwei Noten" — Architektur: [`3HWII/README.md`](3HWII/README.md).
- **Spiralcurriculum:** Kontrollstrukturen (Jg I) → OOP (Jg III) → Entwurfsmuster (Jg IV/V)
  → Webservices (Jg V); Web-Anwendungen über alle Jahrgänge.

## Anleitung: Jahrgangs-/Semesterpläne generieren

1. **Lehrstoff übernehmen:** Soll des Semesters aus ② (mit Rückblick auf ①) in den Kopf
   des Plan-Dokuments.
2. **Bereiche & Wer:** jede UE mit Bereich (OOP | Web | PRE) und Lehrer-Zuordnung
   (Georg/Kollege). PRE = nur Soll, keine UE-Ausarbeitung.
3. **Zeitmodell:** **13 echte UE + 2 PLF-DS** pro Semester (1 DS/Woche = Georgs Anteil).
4. **Konvention pro UE:** `UE | Thema | KM-Bezug | Inhalt/HÜ` (Tabellenform wie in
   `3HWII/semesterplan-ws.md`), Bonus-UE + reservierte DS separat.
5. **Stack konsistent:** Deno/TypeScript/Prisma; Deno Desktop für GUI; deutsche Kommentare;
   `deno fmt` (2 Spaces, doppelte Anführungszeichen).
6. **Vorwissen verankern** (Verweis auf Vorjahres-Plan), **Bewertungsrahmen:** PLF/HÜ/
   Mitarbeit je 1/3 (Root-`README.md`).
7. **Steckbriefe pflegen:** konzeptionelle Vertiefung pro KM in `kompetenzmodule/kmN.md`
   (Gerüst → voll, wenn das Semester geplant wird).

## Status der Planungs-Dokumente

| Jahrgang | KM | Dokumente | Status |
|----------|----|-----------|--------|
| I. | — | — | nicht geplant (Vorjahr, anderer Lehrer) |
| II. | KM3+KM4 | [`jg2-einheiten.md`](../../unterricht/HWII-SWP/jg2-einheiten.md) + `kompetenzmodule/km3.md`/`km4.md` | **Rückgepflegt** (SJ 2025/26) |
| III. | KM5+KM6 | [`3HWII/`](3HWII/) (`README.md`, `semesterplan-ws.md`, `semesterplan-ss.md`) + `kompetenzmodule/km5.md`/`km6.md` | **Geplant (SJ 2026/27, priorisiert)** |
| IV. | KM7+KM8 | [`jg4-einheiten.md`](../../unterricht/HWII-SWP/jg4-einheiten.md) + `kompetenzmodule/km7.md`/`km8.md` | Gerüst/Stub |
| V. | KM9 | [`jg5-einheiten.md`](../../unterricht/HWII-SWP/jg5-einheiten.md) + `kompetenzmodule/km9.md` | Gerüst/Stub |
