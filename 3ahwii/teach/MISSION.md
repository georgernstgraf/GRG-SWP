# Mission: OO-Fundament 3AHWII (KM5, UE 1–3)

## Why

Die Klasse 3AHWII (HTL Spengergasse, WII–Betriebsinformatik, SJ 2026/27) soll in
den UE 1–3 des Wintersemesters die **formalen OOP-Konzepte**
(Klasse/Instanz/Zustand, Kapselung/Sichtbarkeit, Interfaces) auf einem
Deno/TypeScript-Stack verankern — als Fundament für Vererbung, Polymorphismus
und UML (UE 4–13) und später den Verbund mit INFI. Lehrer-Nutzer: Georg (dieses
Workspace erzeugt **Schülermaterial**, nicht Selbststudium des Lehrers).

## Success looks like

- Schüler können Klasse vs. Instanz vs. Zustand/Identität sauber begrifflich
  trennen (Retrieval, nicht Wiedergabe) und an der Unterrichts-Domäne `Konto`
  zeigen.
- Schüler schreiben Klassen mit **gesicherten Invarianten**
  (Konstruktor-Validierung, `private`, `readonly`, getter/setter) und begründen
  Fail-Fast vs. Happy Path.
- Schüler deklarieren/implementieren Interfaces als Verträge („was, nicht wie")
  und nutzen sie als Funktionsparametertypen; mehrere Interfaces + structural
  typing verständlich angewandt.
- Jede UE endet mit einer **HÜ auf einer eigenen Domäne** (UE 1: `Tier`, UE 2:
  `Fahrzeug`, UE 3: `Produkt`), die rot→grün-Tests abschließt (Deno.test).
- Git-Disziplin wird ab UE 1 mitgeführt (kleine Commits, sprechende Messages).

## Constraints

- 1 UE = 1 Doppelstunde, max. 50' Ablauf pro UE (siehe Intro-Muster
  `2026-09-08_intro`).
- Stack: Deno + TypeScript, testgetrieben (`Deno.test` + `jsr:@std/assert`),
  DB-frei.
- Code-Konventionen: deutsche Kommentare, `deno fmt` (2 Spaces, doppelte
  Anführungszeichen).
- Domänen-Strategie: **5 voll declinierbare Domänen** (Konto, Tier, Fahrzeug,
  Produkt, Person) gegen Abschreiben — Unterricht ≠ HÜ ≠ Test. `Bruch` ist zu
  dünn als Träger (kein Hierarchie-Potenzial) und dient nur noch als Brücke in
  UE 1.
- Repo ist öffentlich → Lessons direkt Schüler-tauglich verlinken.
- Lehrplan-Anker: `lehrplan/swp-hwii/kompetenzmodule/km5.md`, Schicht ②
  Schuladaption.

## Out of scope

- Vererbung/Polymorphismus/abstract (UE 4–7) — aber die 5 Domänen-Steckbriefe
  halten bereits Hierarchie + Interfaces + Exceptions vor (siehe `reference/`).
- Collections, O-Notation, Exceptions-Einheit (UE 8–10), UML (UE 11–13).
- PRE-Anteil des Kollegen (nur Soll).
- DB/Prisma (DB-freies WS; Verbund ab SS).
