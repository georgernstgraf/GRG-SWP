# 2. Klasse – Einheitenplan (KM3 + KM4)

> **Status:** Rückgepflegt aus dem tatsächlich gehaltenen Unterricht im Schuljahr 2025/26 (Klasse 2AHWII).
> **Quelle:** [`../../ARCHIV/2025-26-2ahwii/`](../../ARCHIV/2025-26-2ahwii/) – Unterrichtsordner `YYYY-MM-DD_thema/` + [`README.md`](../../ARCHIV/2025-26-2ahwii/README.md) + [`Hausübungen.md`](../../ARCHIV/2025-26-2ahwii/Hausübungen.md).
> **Offizieller Lehrstoff:** siehe [`LEHRPLAN.md`](LEHRPLAN.md) – II. Jahrgang, Bereich Webtechnologien (KM3 + KM4).
> **KM-Steckbriefe:** [`../../kompetenzmodule/km3.md`](../../kompetenzmodule/km3.md) · [`../../kompetenzmodule/km4.md`](../../kompetenzmodule/km4.md) · **Nachfolge (3HWII, SJ 2026/27):** [`../../3HWII/`](../../3HWII/).

## Vorbemerkung

Offiziell ist Jg II dem **Bereich Webtechnologien** gewidmet (KM3 statische Webseiten, KM4 clientseitige Logik/Styling/Responsive). Der reale Unterricht hat *zusätzlich* die **Grundlagen der OOP** (Klasse `Bruch`, `constructor`/`this`/`static`) bereits im September 2025 vorgezogen – diese gehören eigentlich zu KM5 (Jg III). Dadurch startet Jg III mit OOP-Vorwissen; die formale Vertiefung (Vererbung/Polymorphismus) folgt dann in KM5.

**Fazit der Abdeckung:** Jg II „gut abgedeckt". Die Kohorte kommt mit **Bruch-Klasse + Tests + HTML/CSS + DOM + Promises + async/await + Fetch + Hono+SQLite + REST + Prisma-Vertiefung + tRPC/htmx**-Berührung ins Jg III – also deutlich weiter, als der reine Web-Lehrplan nahelegt.

---

## 3. Semester – KM3 (Herbst 2025)

### Einheit 1 – Brüche & Exceptions (Programmiereinstieg)
- Datum: 08.09.2025
- Archiv: [`2025-09-00_brüche`](../../ARCHIV/2025-26-2ahwii/2025-09-00_brüche/)
- KM-Bezug: KM3-Vorbereitung (Programmieren); vorgezogenes *Strukturierte Programmierung*
- Inhalt: Brüche addieren, Parameterprüfung mit `throw`
- HÜ: GitHub-Repo anlegen, Bruch-Programm mit `throw` ausbauen

### Einheit 2 – OO-Stil & throw
- Datum: 15.09.2025
- Archiv: README-Eintrag (2025-09-15)
- KM-Bezug: KM3-Vorbereitung; *vorgezogenes OOP*
- Inhalt: OO-style Reorg, `throw()` verwenden
- HÜ: – siehe Ordner

### Einheit 3 – constructor / this / static, class vs instance
- Datum: 22.09.2025
- Archiv: README (2025-09-22)
- KM-Bezug: *vorgezogenes KM5* „Klasse, Instanz, Zustand, Attribut"
- Inhalt: Konstruktoren, `this`, `static`, Klasse vs. Instanz
- HÜ: Recherche Exceptions

### Einheit 4 – OO vertieft: Klasse Bruch + Deno-Tests
- Datum: 29.09.2025
- Archiv: [`2025-09-29_bruch`](../../ARCHIV/2025-26-2ahwii/2025-09-29_bruch/)
- KM-Bezug: *vorgezogenes KM5* + „Standardalgorithmen testen"
- Inhalt: `deno init`, `deno test`, OO an `class Bruch`
- HÜ: 5 Testfälle für die Bruchklasse

### Einheit 5 – Automatisierte Tests (Zufallsdaten)
- Datum: 06.10.2025
- Archiv: README (2025-10-06)
- KM-Bezug: KM3-Vorbereitung (Testen)
- Inhalt: Tests mit Zufalls-Ints, `Math.random()`, Schleifen
- HÜ: Test 15× mit Zufallsbrüchen automatisieren

### Einheit 6 – Debugger in VSCode
- Datum: 13.10.2025
- Archiv: [`2025-10-13_debug`](../../ARCHIV/2025-26-2ahwii/2025-10-13_debug/)
- KM-Bezug: „Einsatz einer visuellen Oberfläche/Entwicklungsumgebung"
- Inhalt: VSCode-Debugger, `launch.json`
- HÜ: Debugger-Screenshots + 10 Prim-/10 Nicht-Primzahlen-Tests

### Einheit 7 – HTML-Recherche & erste Seite
- Datum: 20.10.2025
- Archiv: [`2025-10_html`](../../ARCHIV/2025-26-2ahwii/2025-10_html/)
- KM-Bezug: **KM3** „Informationsdarstellung im Internet, Dokumentenbeschreibungssprachen"
- Inhalt: HTML-Recherche (MDN, selfhtml, w3schools), erste HTML-Seite
- HÜ: HTML-Seite mit Recherche-Erkenntnissen

### Einheit 8–9 – HTML-Tags, testing prim (Fortsetzung)
- Datum: 03.11.2025 + 10.11.2025
- Archiv: README-Einträge
- KM-Bezug: KM3 Web + Testen
- Inhalt: weitere Tags (`table`, `form`, `input`, fonts)
- HÜ: Tags in (bestehender) Website einbauen

### Einheit 10–12 – CSS: Boxmodell, Flexbox, Fonts
- Datum: 10.11.–01.12.2025
- Archiv: [`2025-11-17_boxmodel`](../../ARCHIV/2025-26-2ahwii/2025-11-17_boxmodel/), [`2025-12-01_selectors`](../../ARCHIV/2025-26-2ahwii/2025-12-01_selectors/)
- KM-Bezug: **KM3** „statisches Design"
- Inhalt: Boxmodell (padding/margin/border, Units, whatunit.com), Flexbox, spezielle Fonts, Selektoren (CSS Diner)
- HÜ: Website verbessern, CSS Diner Screenshots

---

## 4. Semester – KM4 (Frühjahr 2026)

### Einheit 1 – CSS Grid
- Datum: 15.12.2025
- Archiv: [`2025-12-15_css_grid`](../../ARCHIV/2025-26-2ahwii/2025-12-15_css_grid/)
- KM-Bezug: KM4 „komplexes Layout"
- Inhalt: CSS Grid
- HÜ: –

### Einheit 2 – Lambda-Funktionen mit Arrays
- Datum: 19.01.2026
- Archiv: [`2026-01-19_lambda`](../../ARCHIV/2025-26-2ahwii/2026-01-19_lambda/)
- KM-Bezug: KM4 „clientseitige Programmierung" + *vorgezogen KM5 „Collections"*
- Inhalt: `array.sort/filter`, Lambdas
- HÜ: Personen-Liste filtern/sortieren

### Einheit 3 – HTTP-Folie + Hono mit SQLite (REST-API)
- Datum: 23.02.2026
- Archiv: [`2026-02-23_hono_mit_sql`](../../ARCHIV/2025-26-2ahwii/2026-02-23_hono_mit_sql/)
- KM-Bezug: KM4 (clientseitig) + Vorbereitung KM8 (serverseitig, vorgezogen)
- Inhalt: HTTP-Grundlagen, Hono + SQLite, REST-API
- HÜ: Button „hole Essen", fetch → JSON → `<tr><td>`

### Einheit 4 – Fetch & Response-Objekt
- Datum: 02.03.2026
- Archiv: [`2026-03-02_button fetch übung_mankah`](../../ARCHIV/2025-26-2ahwii/2026-03-02_button%20fetch%20übung_mankah/)
- KM-Bezug: KM4 „clientseitige Logik"
- Inhalt: `Response`-Objekt, `.json()`/`.text()` liefern wieder Promises
- HÜ: Button fetcht Endpoint, baut Tabelle

### Einheit 5 – Promises & Promise-Chaining
- Datum: 09.03.2026
- Archiv: [`2026-03-09_promises`](../../ARCHIV/2025-26-2ahwii/2026-03-09_promises/)
- KM-Bezug: KM4 „clientseitige Logik" (asynchron)
- Inhalt: Promises, `.then()`/`.catch()`, Chaining
- HÜ: Pizza-Service-Kette (Ofen-Check → backen)

### Einheit 6 – Transpilierung / async / await
- Datum: 16.03.2026
- Archiv: [`2026-03-16_transpile`](../../ARCHIV/2025-26-2ahwii/2026-03-16_transpile/)
- KM-Bezug: KM4 + „Interpreter/Compiler" (Jg I vertieft)
- Inhalt: TS→JS Transpilierung, `async`/`await`
- HÜ: `deno add npm:ms`, in Website verwenden

### Einheit 7 – async/await vertieft
- Datum: 13.04.2026
- Archiv: [`2026-04-13_await`](../../ARCHIV/2025-26-2ahwii/2026-04-13_await/)
- KM-Bezug: KM4 (asynchron)
- Inhalt: `await`-Praxis
- HÜ: –

### Einheit 8 – freie KI-Provider (opencode)
- Datum: 20.04.2026
- Archiv: [`2026-04-20_freie_ki_provider`](../../ARCHIV/2025-26-2ahwii/2026-04-20_freie_ki_provider/)
- KM-Bezug: *Enrichment* (Werkzeugkompetenz)
- Inhalt: opencode-Provider (github, zen, go, nvidia, google)
- HÜ: 4 Provider in opencode, `providers list > providers.txt`

### Einheit 9 – Übungen Promises
- Datum: 27.04.2026
- Archiv: [`2026-04-27_übung_promises`](../../ARCHIV/2025-26-2ahwii/2026-04-27_übung_promises/)
- KM-Bezug: KM4 (Festigung)
- Inhalt: Übungsstunde

### Einheit 10 – PLF Musikgeschäft WebApp
- Datum: 04.05.2026
- Archiv: [`2026-05-04_plf_2ahwii`](../../ARCHIV/2025-26-2ahwii/2026-05-04_plf_2ahwii/), [`2026-06-01_plf_max`](../../ARCHIV/2025-26-2ahwii/2026-06-01_plf_max/)
- KM-Bezug: KM3+KM4 Gesamtschau
- Inhalt: PLF (WebApp Musikgeschäft)
- HÜ: keine (PLF)

### Einheit 11 – Nachbesprechung + volles CRUD-Backend
- Datum: 11.05.2026
- Archiv: README (2026-05-11)
- KM-Bezug: KM4 + vorgezogen KM8
- Inhalt: PLF-Nachbesprechung, Transpile-Repetition, volles CRUD im Backend

### Einheit 12 – Backend-Projekt
- Datum: 01.06.2026
- Archiv: [`2026-06-01_backend`](../../ARCHIV/2025-26-2ahwii/2026-06-01_backend/)
- KM-Bezug: KM4 + KM8-Vorgriff
- Inhalt: Backend (`main.ts`, `src/`, `static/`, `REST.rest`)
- HÜ: –

### Einheit 13 – WSL/Pass/Agent, Prisma-Vertiefung, tRPC, htmx
- Datum: 08.–29.06.2026
- Archiv: [`2026-06-15_prisma_vertiefung`](../../ARCHIV/2025-26-2ahwii/2026-06-15_prisma_vertiefung/), [`2026-06-22_trpc_matt_pocock`](../../ARCHIV/2025-26-2ahwii/2026-06-22_trpc_matt_pocock/), [`2026-06-29_htmx_finale`](../../ARCHIV/2025-26-2ahwii/2026-06-29_htmx_finale/)
- KM-Bezug: *Enrichment* (Übererfüllung)
- Inhalt: Prisma-Vertiefung, tRPC (POC), htmx als finales Thema
- HÜ: –

---

## Abdeckungstabelle (Soll vs. Ist)

| Lehrstoffpunkt (KM3/KM4) | Abgedeckt in | Status |
|---------------------------|--------------|--------|
| Dokumentenbeschreibungssprachen, Datenformate (KM3) | 3.7, 3.8 (HTML) | ✓ |
| statische Webseiten mit einfachem Design (KM3) | 3.10–3.12 (CSS Box/Flex) | ✓ |
| clientseitige Programmierung (KM4) | 4.2–4.6 (Lambda, Fetch, Promises, async) | ✓ |
| komplexes Layout (KM4) | 4.1 (Grid), 3.10 (Flex) | ✓ |
| Animationen (KM4) | *(nicht explizit)* | ⚠ |
| Anpassung an Endgerät / Responsive (KM4) | *(streifenweise)* | ⚠ |

**Übererfüllung (vorgezogen):** OOP-Grundlagen (`Bruch`-Klasse, KM5-Vorgriff), Hono+SQLite+REST (KM8-Vorgriff), Prisma-Vertiefung, tRPC, htmx.

**Lücken:** CSS-Animationen und systematisches Responsive (Media Queries) nur gestreift – ggf. in Jg III/IV auffrischen.

---

## Vorwissen für Jg III ([`../../3HWII/`](../../3HWII/))

Mitgegeben: TypeScript-Grundlagen + **OO-Vorgriff** (`class Bruch`, constructor/this/static, Tests), HTML/CSS (Box/Flex/Grid), DOM, Promises/async/await, Fetch, **Hono+SQLite+REST**, **Prisma-Vertiefung**, tRPC-/htmx-Berührung. Die Kohorte ist im Stack flüssig – Jg III bringt die **formalen OOP-Konzepte** (Vererbung, Polymorphismus, Schnittstellen) und die **Architektur** on top.