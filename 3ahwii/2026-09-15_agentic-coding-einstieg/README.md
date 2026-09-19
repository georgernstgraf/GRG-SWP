# 3AHWII – Agentic Coding: Einstieg mit opencode

Sondereinheit zu Semesterbeginn (beide Gruppen gemeinsam), SJ 2026/27.
Agentic Coding hat hier bewusst **Vorrang vor OOP-Detailtiefe**: Der Umgang mit
Coding-Agenten ist in der Berufswelt heute Grundwerkzeug.

> **Schulübung.** Ziel ist, dass alle bis zum Ende der Einheit `opencode` laufen
> haben. Was in der Schule **nicht fertig** wird, ist als **HÜ zu erledigen –
> nur für die X-Gruppe** (siehe unten).

## Schulübung (im Unterricht)

1. **Node + opencode installieren** (siehe Setup) und prüfen: `opencode --version`.
2. **Provider verbinden:** `opencode` starten → `/connect` → einen freien Anbieter
   wählen (z. B. opencode Zen, GitHub …).
3. **Im eigenen Repo** `opencode` starten → `/init` → entstandenes `AGENTS.md`
   **lesen und anpassen**.
4. Empfohlen für saubere Agent-Arbeit: `git`, `gh` und Grund-CLI-Tools
   (`ls`, `grep`, `sed`, `awk`) müssen in PowerShell funktionieren (siehe Setup).

## HÜ – nur Gruppe X (bis nächste UE)

Was in der Schulübung **nicht fertig** wurde, bis zur nächsten UE erledigen:

- `opencode` installiert und lauffähig (Nachweis `opencode --version`),
- freier Provider verbunden,
- im eigenen Repo `/init` gelaufen und `AGENTS.md` **angepasst und committet**.

Abgabe: Commit im eigenen Repo + kurze Notiz, was `AGENTS.md` steuert.

## Ablauf der Sondereinheit (Impuls + offene Werkstatt)

1. **Impuls (10')** – Orga, „Was ist agentic coding?" (Agent = LLM mit
   **Werkzeugen** in einer Schleife: Ziel → handeln → prüfen → committen),
   Regeln und HÜ-Policy.
2. **Offene Werkstatt (~60')** – jede/r arbeitet im eigenen Tempo an den
   **Checkpoints**; die Lehrperson geht herum und supportet:
   - **Checkpoint 1 – Setup:** Node + opencode installiert (`opencode --version`).
   - **Checkpoint 2 – Provider:** `/connect` verbunden.
   - **Checkpoint 3 – Agent-Loop:** im eigenen Repo `/init` → `AGENTS.md` prüfen;
     im Unterrichtsbeispiel [`../2026-09-08_intro/bruch.ts`](../2026-09-08_intro/bruch.ts)
     erklären, verbessern, testen lassen (Plan-/Build-Modus, `@`-Datei, `/undo`).
   - **Optional:** [`../windows-debloat.md`](../windows-debloat.md) – Windows-Debloat,
     von opencode gesteuert.
3. **Sammeln (10')** – offene Punkte, HÜ-Auftrag (nur X), Ausblick.

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

PowerShell blockiert sonst `npm.ps1` – einmalig die Ausführungsrichtlinie für den
eigenen Benutzer lockern:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

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

## Optional: Windows-Debloat mit opencode

Als optionaler Semester-/Jahresstart das eigene (private) Windows entrümpeln –
**von opencode gesteuert**, mit Sicherheitsnetz und Undo:
[`../windows-debloat.md`](../windows-debloat.md).

## Wenn du mehr wissen willst (optional)

- opencode-Dokumentation: <https://opencode.ai/docs/>
- Mehrere Node-Versionen nötig? Dann **fnm** statt Node-Installer
  (`winget install --id Schniz.fnm`).
- Weiterlernen: <https://github.com/ai-hero-dev>




Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
