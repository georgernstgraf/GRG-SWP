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
