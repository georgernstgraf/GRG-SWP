# sj25-26-5ahwii-swp

## 13. April Test mit Router

**Themen**

- dinge zum agentic coding
- css grid / flex / position
- exceptions
- Thema Orientierung in einem neuen Projekt <https://t3.chat/share/g67cuqidvb>
- man 7 regex 

**Regex**

- atome sind einzelne zeichen
- ? -> Vorgänger 0 oder 1 mal
- + -> Vorgänger 1+ mal
- * -> Vorgänger 0+ mal
- () -> Gruppe
- | -> entweder / oder
- [] -> character class
- ^$ -> Anfang / Ende einer Zeile
- volle Doku: <https://man7.org/linux/man-pages/man7/regex.7.html>

HÜ zum Thema Regex:

Übungsaufgaben zielen darauf ab, das Verständnis für `\w`, `\s` und die Struktur von Regex zu vertiefen.

### Aufgabe 1: Die "Ugly Variable" Suche (Grundlagen `\w` und `\W`)
Du hast eine Legacy-Codebase geerbt, in der Variablen teilweise unsauber benannt wurden.
**Aufgabe:** Erstelle einen Regex, der alle Variablendeklarationen findet, die mit einem Unterstrich `_` beginnen (oft ein Indikator für "private" Variablen in älterem JS/TS-Code), aber **keine** Variablen matcht, die nur aus einem einzelnen Unterstrich `_` bestehen.
*   *Beispiel:* `_user`, `_data` (Treffer), `_` (Kein Treffer).

### Aufgabe 2: Log-Datei Normalisierung (Fokus `\s`)
Du hast ein Log-Format, das unkonsistent ist. Es sieht oft so aus:
`[INFO]   User:123   Action:login`
Die Anzahl der Leerzeichen variiert.
**Aufgabe:** Schreibe einen Regex-Ausdruck, um den Zeitstempel (hier den Platzhalter `[INFO]`) von der User-ID und der Action zu trennen. Nutze `\s+`, um beliebige Blöcke von Leerzeichen zu erfassen und die Werte in Capture Groups zu gruppieren.

### Aufgabe 3: Refactoring von Debug-Statements
Du möchtest alle `console.log()`-Aufrufe finden, die einen String als Argument übergeben, um diese zu entfernen.
**Aufgabe:**
*   Baue einen Regex, der `console.log('irgendein Text')` findet.
*   **Herausforderung:** Erlaube Leerzeichen innerhalb der Klammern, z. B. `console.log( 'text' )`.
*   *Tipp:* Nutze `\s*` an den passenden Stellen.

### Aufgabe 4: C#-Eigenschafts-Extraktion
In einer C#-Datei möchtest du alle Properties finden, die mit `public` deklariert sind.
**Aufgabe:**
Schreibe einen Regex, der Zeilen wie `public int UserId { get; set; }` oder `public string UserName { get; set; }` findet.
*   Extrahiere den Datentyp (z. B. `int` oder `string`) und den Namen der Property (`UserId` oder `UserName`) mittels Capture Groups.
*   Stelle sicher, dass die Leerzeichen zwischen `public`, Typ und Name korrekt mit `\s+` abgehandelt werden.

---

**Ein kleiner Leitfaden zur Lösung:**
1.  **Testen:** Nutze Tools wie [Regex101](https://regex101.com/). Stelle sicher, dass du als Flavor "ECMAScript" (für JS/TS) oder "C#" auswählst.
2.  **Verifikation:** Erstelle dir jeweils ein kurzes Code-Snippet als Testdaten-String.
3.  **Fehleranalyse:** Wenn ein Test fehlschlägt, frage dich: "Habe ich den Anker (`^` oder `$`) vergessen, oder ist mein Quantifizierer (`*` vs `+`) zu gierig?"


## Wie komme ich zu einer Note?

- 16.3. kurze Wissensüberprüfung (router, ca. 30min)
- 13.4. kurze Wissensüberprüfung (router, ca. 30min)
- code / issue contributions (als team) im quiz projekt
- mitarbeit

## 2026-03-09_exception et. al.

für 16.3. themen

- opencode / agentic coding
- grid / flex / tooltips
- vom 9.3. exceptions

Exceptions - Erkenntnisse

- Exceptions werden dann geworfen, wenn eine Funktion "nicht weiter weiß / kann".
- der Aufrufer "muss nicht interpretieren" (ob der returnwert irgendwas anderes bedeutet, zB. "-1 => error")
- Aufrufer weiß ganz klar, ob es gut gegangen ist oder nicht.
- try / catch / finally (in der aufrufenden Funktion)
- nicht abgehandelte exceptions werden "weiter nach oben" gereicht.
- "finally" läuft immer egal ob exception war oder nicht, dient zum "Ordnung machen".

chat protokoll: <https://t3.chat/share/ya1l9t1fp9>

siehe dort auch recht weit unten die Erklärungen zu den typen.

SÜ / HÜ

- eine function im "exception stil" mit exceptions schreiben und mit try / catch aufrufen
- eine alternative funktion im "result stil" schreiben, die einen return wert zurückgibt, der entweder "gut" oder "schlecht" ist (zB. true / false, oder ein objekt mit "status" und "data" feld)
- Name '2026-03-09_exception' im eigen repo

## 2026-02-09 ... opencode

HÜ: Jede Schülerin und jeder Schüler arbeitet an einem Issue für das quiz Projekt,
mit der Hilfe von Opencode.

Nehmt euch ein Beispiel an issue #8. Es wird schon viel über AGENTS.md gesteuert!!

Die Erledigung der HÜ ist Teil der Benotung!!

## 2025-11-24

HÜ: Webfrontend für die Abfrage basteln. Vorlage:
<https://github.com/Die-Spengergasse/quiz-2ahwii-sj2425.git>

## 2025-11-03 HÜ

- "deno task seed" soll jetzt funktionieren und eine befüllte DB hinterlassen!!!

## Herbstferien

## 2025-10-08

nochmal prisma recap

HÜ: Fussball Manager

Entities:

- Player
- - spielt in EINER Mannschaft
- Mannschaft
- - viele Player
- Match
- - stadion
- - mannschaft a geben b
- - datum
- - ergebnis
- Stadion
- - name
- - stadt

## 2025-09-24

HÜ:

- Ordnung in der STruktur
- Recherche auf prisma.io: instruments / richtungen / artist anlegen!!

## 2025-09-17

KI: erkläre mir mit Beispielen die ersten 5 SQL Normalformen
Hü:

- Der Betrieb mit Deno klappt doch: https://docs.deno.com/examples/prisma_tutorial/
- "npx prisma db seed soll die 3 neuen Models anlegen (mit INhalten)
- Wähle eine Category zum synchronisieren
- erste Fragen einfüllen

- Wir werden deno einstweilen wieder bleiben lassen, prisma ist (nach Recherche) noch nicht reif dafür. leider.
- Categories normalisieren
- difficulty normalisieren
- Überlegungen zu uniqueness von Question!
- git repos ausgraben oder neue?

## 3.9 + 8.9

HÜ: prisma schema gemäß opentdb.com fertig anpassen

Vscode Extensions

- github copilot + chat
- deno
- `deno init`

## Termine

- 2026-05-07 programmiermatura
- defensio nach matura

## todo

- PRISMA WH
