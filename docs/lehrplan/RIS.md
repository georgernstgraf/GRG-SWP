# RIS-Recherche — Rechtsstand des Lehrplans (Fach SWP)

> **Stand der Recherche:** 2026-07-26 · **Ergebnis:** Unser Lehrplan ist **aktuell, nicht obsolet**.
> Diese Datei dokumentiert die Recherche im RIS (Rechtsinformationssystem des Bundes) und den
> Vergleich der drei Textschichten (offiziell / Schuladaption / Unterricht).

---

## 1. Rechtsstand

| Feld | Wert |
|------|------|
| **Geltende Fassung** | **BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019** |
| **Anlage** | 1.24 — Lehrplan der Höheren Lehranstalt für **Wirtschaftsingenieure – Betriebsinformatik** |
| **Fach** | Softwareentwicklung und Projektmanagement (Abschnitt VII, Unterabschnitt B.4) |
| **Inhaltlicher Stand des SWP-Lehrstoffs** | **unverändert seit 2015** (235/2019 fügte nur die Deutschförderklasse-Stundentafel an) |
| **Ersatz-Lehrplan in Begutachtung?** | **Nein** (kein Entwurf für WII-Betriebsinformatik gefunden) |

## 2. Fundstellen

| Was | URL |
|-----|-----|
| Konsolidierte Fassung (gesamte Verordnung) | <https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20009288> |
| **Anlage 1.24, Volltext konsolidiert** | <https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40217058/NOR40217058.html> |
| Original-Kundmachung 262/2015 | <https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2015_II_262/BGBLA_2015_II_262.html> |
| Novelle 235/2019 | <https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2019_II_235/BGBLA_2019_II_235.html> |
| Schul-Stundentafel (Spengergasse) | <https://www.spengergasse.at/?page_id=2085> |
| Schul-Download „Lehrplan" | <https://www.spengergasse.at/wp-content/uploads/2020/04/LP_ab14_Betriebsinformatik.pdf> (= RIS-Originaltext) |

## 3. Novellen-Historie (geprüft bis 2026-07-26)

| Novelle | Berührt Anlage 1.24 / SWP-Lehrstoff? |
|---------|--------------------------------------|
| BGBl. II Nr. 262/2015 | **Erlass** (Lehrplanpaket HTL 2015) |
| BGBl. II Nr. 55/2017 | nein |
| BGBl. II Nr. 235/2019 | **ja, aber nur Anhang**: Deutschförderklasse-Stundentafel (Abschnitte I+VII ergänzt) — SWP-Lehrstoff unverändert |
| BGBl. II Nr. 250/2021 | nein (allgemeinbildende Gegenstände/Ethik anderer Anlagen) |
| BGBl. II Nr. 383/2021 | nein (Anlagen 1, 1.1, 1.6, 1.9, 1.10, 1.13, 1.16, 1.18, 1.19; neu 1.33/1.34 — **nicht 1.24**) |
| BGBl. II Nr. 368/2022 | nein (**Sonderformen** — Aufbaulehrgänge/Kollegs für Berufstätige; eigene Verordnung, eigene Anlage 1.17 für WII-Betriebsinformatik-Berufstätige) |
| BGBl. II Nr. 2/2023 | nein (Anlagen 1.11, 1.17) |

## 4. Stundentafel-Zeile SWP (offiziell, bestätigt durch Schulwebsite)

> **4. Softwareentwicklung und Projektmanagement⁴ — I. 2(2) · II. 2(2) · III. 4(4) · IV. 4(4) · V. 6(6) · Summe 18 · Lehrverpflichtungsgruppe I**

Fußnote 4: *„Mit Übungen in elektronischer Datenverarbeitung im Ausmaß der in Klammern angeführten Wochenstunden."*
Die Spengergasse-Stundentafel zeigt deckungsgleich **2/2/4/4/6**.

## 5. Schulautonome Bestimmungen

- **Anlage 1.24, Abschnitt IV:** *„Siehe Anlage 1 mit dem Hinweis, dass die Bestimmungen über schulautonome Schwerpunktsetzungen nicht zum Tragen kommen."*
- Anlage 1 (idF 383/2021) erlaubt u. a.: *„… die Aufteilung der Wochenstunden … und die Verteilung des Lehrstoffs auf die Jahrgänge bzw. Semester abweichend vorgenommen werden."* — Die schulinterne Umschichtung (Web vollständig ins Jg II, StruktProg vollständig ins Jg I) ist über diese allgemeine Klausel gedeckt.
- Auf der Schulwebsite publizierte schulautonome Abweichungen: Fächer **„Digitale Technologien"** (III–V je 4 h) und **„Smart Production Lab"** (III 6 / IV 5 / V 5 h) anstelle offizieller Fächer (Mechanische Technologie, Laboratorium, Werkstätte). **Kein Bezug zum SWP-Lehrstoff.**
- Eine schriftliche schulautonome Lehrplanbestimmung für die SWP-Umschichtung ist nicht öffentlich; interne Referenz ist [`HWII_SWP.pdf`](HWII_SWP.pdf) (Schicht ②).

---

## 6. Drei-Schichten-Vergleich (offiziell ① / Schuladaption ② / Unterricht ③)

Die Schuladaption ② (`HWII_SWP.pdf`, Basis unseres [`LEHRPLAN.md`](LEHRPLAN.md)) weicht vom offiziellen Text ① ab. **Inhaltlich wesentliche Differenzen:**

| Thema | ① Offiziell (RIS) | ② Schuladaption |
|-------|-------------------|------------------|
| Web-Einstieg | **bereits I. Jahrgang** („Informationsdarstellung im Netz: Dokumentenbeschreibungssprachen, Informationstypen und Datenformate, Präsentation") | erst **2. Klasse WS (KM3)** |
| Strukturierte Programmierung | I. Jg **und** KM3 (Dateiverarbeitung, Modularisierung) + KM4 (zusammengesetzte Datentypen, Standardalgorithmen) | vollständig in der **1. Klasse** |
| KM3/KM4 Web | KM3 „Design und Inhalte", KM4 „Clientseitige Programmierung" | KM3 „Informationsdarstellung im Internet", KM4 zusätzlich **„fortgeschrittene Styling-Möglichkeiten (komplexes Layout, Animationen, Anpassung an Endgerät)"** |
| KM5 OOP | „Elemente und Konzepte (Klasse, Instanz, Methode, Attribut und Sichtbarkeit, grafische Darstellung, Vererbung, Polymorphismus)" — **ohne** Schnittstelle/Zustand/Collections/Laufzeitanalysen | **erweitert um** Schnittstelle, Zustand, **„Alternativen zu Arrays (Collections)"**, **„Laufzeitanalysen"** |
| KM7 OOP | „Frameworks (Architektur, Einbindung, Auswahl); **Algorithmen (Darstellungsformen, Qualitätsanalyse, Standardalgorithmen)**" | „wiederverwendbare Komponenten" + „Standardalgorithmen OO implementieren" + **Entwurfsmuster** als Lehrstoff |
| KM7 SWP | enthält zusätzlich Bildungsaufgabe **„reale Problemstellung analysieren … Leistungs-, Termin-, Ressourcen- und Kostenplanung"**; Entwurfsmuster nur als Bildungsaufgabe, **nicht** als Lehrstoff | ohne Kostenplanungs-Punkt; Entwurfsmuster als Lehrstoff |
| KM9/10 OOP | „Software-Patterns (**Objektorientierte Prinzipien**, Entwurfsmuster)" / **„Klassenbibliotheken"** erstellen | „Entwurfsmuster (Umsetzung)" / „wiederverwendbare Komponenten" |

> **Bewertung:** Die Schuladaption ist im Sinne der schulautonomen Klausel (s. o.) zulässig und didaktisch kohärenter (Web als geschlossener Jg-II-Block; die ②-Zusätze in KM5 sind aus ① KM9 „Objektorientierte Prinzipien" bzw. dem Algorithmen-Teil von ① KM7 vorgezogen). **Verbindlich bleibt ①**; die Abdeckungstabellen unserer Einheitenplanung beziehen sich auf ②, mit Rückverweis auf ①.

## 7. Offizieller SWP-Extrakt (①, getreu aus NOR40217058)

→ Gepflegt in [`LEHRPLAN.md`](LEHRPLAN.md), Abschnitt **A**. Dort vollständig; hier nur die Absolventenkompetenz (III. Abschnitt der Anlage 1.24), die bisher im Repo fehlte:

> *„Im Bereich Softwareentwicklung und Projektmanagement können die Absolventinnen und Absolventen Vorgehensmodelle, Entwicklungsmethoden und wichtige Entwurfsmuster der Softwareentwicklung anwenden sowie Programme systematisch testen. Sie können reale Problemstellungen analysieren und die unterschiedlichen Methoden zu Leistungs-, Termin-, Ressourcen- und Kostenplanung einsetzen."*

## 8. Konsequenzen für dieses Repo

1. [`METADATA.md`](METADATA.md) führt die Rechtsgrundlage als **„BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019"**.
2. [`LEHRPLAN.md`](LEHRPLAN.md) ist dreischichtig aufgebaut: ① offizieller Extrakt · ② Schuladaption · ③ Didaktik/Stack.
3. **Re-Check-Empfehlung:** einmal jährlich (Sommerferien) die konsolidierte Fassung (Link oben) auf eine neue „Änderung"-Zeile prüfen. Nächster Check: Sommer 2027.
