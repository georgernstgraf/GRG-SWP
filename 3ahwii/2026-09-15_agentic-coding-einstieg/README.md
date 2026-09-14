# 3AHWII – Agentic Coding: Einstieg mit opencode

Sondereinheit zu Semesterbeginn (beide Gruppen gemeinsam), SJ 2026/27.
Agentic Coding hat hier bewusst **Vorrang vor OOP-Detailtiefe**: Der Umgang mit
Coding-Agenten ist in der Berufswelt heute Grundwerkzeug.

## HÜ (bis nächste UE)

1. **Node + opencode installieren** (siehe Setup) und nachweisen:
   `opencode --version` (Screenshot oder Textausgabe).
2. **Freien Provider verbinden:** `opencode` starten → `/connect` → einen freien
   Anbieter wählen (z. B. opencode Zen, GitHub …).
3. **Im eigenen (HÜ-)Repo** `opencode` starten → `/init` laufen lassen →
   entstandenes `AGENTS.md` **lesen, anpassen und committen**.
4. Empfohlen für saubere Agent-Arbeit: `git`, `gh` und Grund-CLI-Tools
   (`ls`, `grep`, `sed`, `awk`) müssen in PowerShell funktionieren (siehe Setup).

Abgabe bis nächste UE: Commit im eigenen Repo + kurze Notiz, was `AGENTS.md` steuert.

## Ablauf der Sondereinheit

1. **Orga (10')** – Ablauf, HÜ-Policy, Arbeitsweise mit einem Agenten.
2. **Was ist agentic coding? (15')** – Ein Coding-Agent ist ein LLM mit
   **Werkzeugen** (Dateien lesen/schreiben, Shell, Tests) in einer Schleife:
   Ziel vorgeben → Agent handelt im Repo → Ergebnis prüfen → committen.
   Unterschied zum reinen Chat: Der Agent arbeitet selbst im Projekt.
3. **Setup (20')** – gemeinsam durch die Schritte unten; Ziel: `opencode` läuft
   und ist mit einem Provider verbunden.
4. **Erster Agent-Loop (30')** – live im Unterrichtsbeispiel
   [`../2026-09-08_intro/bruch.ts`](../2026-09-08_intro/bruch.ts): erklären,
   verbessern, testen lassen; Plan-/Build-Modus, `@`-Datei, `/undo`.
5. **HÜ besprechen (10')** – Setup abschließen und `AGENTS.md`-Auftrag klären.

## Setup (Windows, PowerShell + winget)

### 1. Node.js LTS

```powershell
winget install --id OpenJS.NodeJS.LTS --exact
```

Terminal neu starten, dann prüfen:

```powershell
node -v   # erwartet: v24.x
npm -v
```

### 2. opencode

opencode hat kein winget-Paket – Installation über npm:

```powershell
npm install -g opencode-ai
opencode --version
```

### 3. CLI-Werkzeuge für gute Agent-Arbeit

```powershell
winget install --id Git.Git -e
winget install --id GitHub.cli -e
winget install --id uutils.coreutils -e
```

Danach müssen in PowerShell `ls`, `cat`, `grep`, `sed`, `awk`, `git` und `gh` laufen.

### 4. Provider verbinden

```powershell
opencode
```

In der TUI `/connect` ausführen und einen freien Anbieter wählen.

> Offiziell empfiehlt opencode auf Windows **WSL**. Wir bleiben für den Einstieg
> nativ (PowerShell) – das genügt; WSL ist bei Bedarf ein späterer Ausbau.

## opencode-Grundlagen

- **Plan-/Build-Modus** (Tab): erst planen lassen, dann umsetzen lassen.
- **`@`-Datei**: Kontext gezielt geben, z. B.
  `erkläre @3ahwii/2026-09-08_intro/bruch.ts`.
- **`/init`**: erzeugt `AGENTS.md` – die Projekt-Anweisung für den Agenten.
- **`/undo`** / **`/redo`**: Änderungen zurücknehmen bzw. wiederherstellen.
- **`/share`**: Verlauf teilen.

## Regeln

- Keine Secrets/API-Keys in Prompts oder Repo.
- Änderungen des Agenten **prüfen** (Diff), bevor committet wird.
- Kleine Commits mit sprechenden Messages.
- `AGENTS.md` aktuell halten.

## Wenn du mehr wissen willst (optional)

- opencode-Dokumentation: <https://opencode.ai/docs/>
- Mehrere Node-Versionen nötig? Dann **fnm** statt Node-Installer
  (`winget install --id Schniz.fnm`).
- Weiterlernen: <https://github.com/ai-hero-dev>
