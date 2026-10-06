# GLOSSAR — Domänenbegriffe des Repos

> Minimal-Gerüst; Begriffe werden bei Bedarf ergänzt. Fach SWP (Softwareentwicklung und
> Projektmanagement), HTL Spengergasse, Abteilung WII – Betriebsinformatik.

| Begriff | Bedeutung |
|---------|-----------|
| **SWP** | Softwareentwicklung und Projektmanagement — das Fach dieses Repos (Maturafach, Anlage 1.24, BGBl. II Nr. 262/2015 idF 235/2019); 18 Wochenstunden über Jg I–V |
| **WII** | Abteilung Wirtschaftsingenieure – Betriebsinformatik (HTL Spengergasse) |
| **HWII** | Klassen-Postfix der Tagesschul-Formen der WII (z. B. 2AHWII, 3HWII) |
| **3HWII** | Dritte Klasse HWII, Schuljahr 2026/27 — aktive Kohorte; Drehscheibe: `lehrplan/swp-hwii/3HWII/README.md` |
| **KM** | Kompetenzmodul — Lehrplan-Einheit pro Semester (hier: KM3–KM9); Steckbriefe in `lehrplan/swp-hwii/kompetenzmodule/` |
| **PRE** | Der Projektmanagement-Anteil im Fach SWP (Kollege, 2 h ab Jg III); hier nur als „Soll" sichtbar, nicht ausgearbeitet |
| **PLF** | Praxis-Leistungs-Feststellung — 2 pro Semester; 1/3 der Note |
| **HÜ** | Hausübungen — 1/3 der Note; Policy siehe Root-`README.md` |
| **UE / DS** | Unterrichtseinheit / Doppelstunde; 1 UE im Planungsformat = 1 DS (2 h) |
| **13 + 2** | Zeitmodell: 13 echte UE + 2 reservierte PLF-DS pro Semester (Georgs Anteil ab Jg III) |
| **2 + 2-Split** | Aufteilung der 4 Wochenstunden ab Jg III: Georg (OOP + Web + UML-Klassendiagramm) / Kollege (PRE + übrige Modellierung) |
| **① ② ③ (Schichten)** | `lehrplan/swp-hwii/LEHRPLAN.md` dreischichtig: ① offizieller RIS-Extrakt (verbindlich) · ② Schuladaption (`HWII_SWP.pdf`) · ③ Didaktik/Stack |
| **RIS** | Rechtsinformationssystem des Bundes (ris.bka.gv.at); Quelle des offiziellen Lehrplans — Rechtsstand: `lehrplan/swp-hwii/RIS.md` |
| **Anlage 1.24** | Lehrplan der Höheren Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik (BGBl. II Nr. 262/2015 idF 235/2019); enthält das Fach SWP (Abschnitt VII, B.4) |
| **NOR40217058** | RIS-Dokument-ID der konsolidierten Anlage 1.24 (Einzel-Fetch statt Gesamt-Paket > 5 MB) |
| **INFI-Verbund** | Verbundprojekt mit dem Schwester-Repo GRG-INFI („eine App, zwei Noten") in Jg III SS 2027; Schnittstelle: `lehrplan/swp-hwii/3HWII/README.md` |
| **ARCHIV** | Unterricht vergangener Schuljahre (`ARCHIV/YYYY-YY-<klasse>/…`); Quelle der Ist-Rückpflege in die KM-Steckbriefe |
| **Deno Stack** | Pädagogischer Stack ab SJ 2026/27: TypeScript + Deno, Prisma + SQLite, Hono (Jg II), Deno Desktop ab KM6 (Fallback: Hono+Vite), `Deno.test` |
| **Klasse / Instanz** | OOP (KM5): Klasse = Bauplan (existiert einmal); Instanz = mit `new` erzeugtes Objekt zur Laufzeit |
| **Zustand** | Die aktuellen Feldwerte einer Instanz (z. B. `kontostand`) — pro Instanz eigen |
| **Identität** | Einzigartigkeit eines Objekts (`===` = gleicher Speicherplatz); ≠ Zustandsgleichheit (`equals()`) |
| **Kapselung** | Zustand ist privat; Änderung nur über kontrollierte Türen (Methoden/getter), nie über öffentliche Felder |
| **Invariante** | Regel, die für jedes Objekt jederzeit gilt (z. B. Betrag ≥ 0); gesichert im Konstruktor und in jeder mutierenden Methode |
| **Fail-Fast** | Eine Verletzung bricht sofort mit `throw` ab, statt spät einen ungültigen Zustand zu hinterlassen |
| **Interface** | Vertrag über „was" (welche Mitglieder ein Typ hat), nicht „wie"; eine Klasse kann beliebig viele `implements` |
| **Structural typing** | TypeScript prüft die Form eines Objekts, nicht seine Abstammung — `implements` ist dafür nicht nötig |
| **Schicht (Layer)** | Baustein einer Applikation mit genau einer Aufgabe (View, Endpoint, Controller, Service, Repository); KM6 |
| **Dependency Rule** | Abhängigkeiten zeigen nur nach innen: außen kennt innen, innen kennt außen nicht; der Service hängt am Repository-Interface, nicht an der DB; KM6 |
| **Domänenobjekt** | Objekt der Fachklassen (z. B. `Konto`) — was das Repository zurückgibt, statt roher DB-Zeilen; KM5/KM6 |
| **Repository (Schicht)** | Datenbank-Layer: lädt/speichert Domänenobjekte und garantiert Transaktionen; kennt keine Fachregeln; KM6 |
| **Service-Layer** | Geschäftsablauf/Use-Case; kennt weder HTTP noch die konkrete Datenbank; KM6 |
| **Controller** | Übersetzt zwischen Außenwelt und Service, fängt Fehler ab; kennt keine HTTP-Statuscodes; KM6 |
| **Endpoint** | Dünne Route: liest Body/Parameter, ruft den Controller, setzt HTTP-Status und JSON; KM6 |
| **View** | Anzeige + Eingabe (Webview); bleibt „dumm", enthält keine Fachlogik; KM6 |
| **Composition Root** | Der eine Ort (`main.ts`), der alle Schichten kennt und mit `new` verdrahtet; KM6 |
| **Transaktion / Atomarität** | Mehrere Schreibvorgänge als unteilbarer Schritt — ganz oder gar nicht (Rollback); Aufgabe des DB-Layers; KM6 |
