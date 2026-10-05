# AGENTS.md

Unterrichts-Repo **GRG-SWP** (Fach SWP, HTL Spengergasse, WII–Betriebsinformatik).
Übersicht/Beurteilung: `README.md` · Planungs-Konventionen: `docs/ai/CONVENTIONS.md`.

## Knowledge Bootstrap
Before starting any task, read the following files in order:
1. `docs/ai/HANDOFF.md` ← **read first, act on it**
2. `docs/ai/CONVENTIONS.md`
3. `docs/ai/DECISIONS.md`
4. `docs/ai/ARCHITECTURE.md`
5. `docs/ai/PITFALLS.md`
6. `docs/ai/STATE.md`
7. `docs/ai/DOMAIN.md` (if task involves business logic)
8. `docs/ai/HISTORY.md` (reference only — read last, as needed)

If `HANDOFF.md` contains open tasks, complete them before starting
any new work unless the user explicitly says otherwise.

## Lernplattform (GitHub Pages)

GitHub Pages ist die **Lernplattform**: veröffentlicht wird **nur `unterricht/`**
(+ zentrales `assets/` + Navigator `index.html`) über
`.github/workflows/pages.yml`. Klassenordner (`3ahwii/`, `ARCHIV/`),
`Sample_Projects/`, `Unterlagen/` usw. werden **nicht** deployt.

- Der Root-`index.html` ist der **Navigator** und verlinkt ausschließlich
  `unterricht/`-Ziele. Neue Lessons werden im selben Commit dort eingetragen.
- Zentrale Assets: `assets/` (`loader.js`, `lesson.css`, `quiz.js`, `theme.js`,
  `site.js`, `github-pages-link.js`); Nutzung über `./serve.sh`, nie `file://`.
- Prepared Lessons liegen flach unter `unterricht/<PREFIX>-<NN>-<slug>/` und sind
  **Lektion und Präsentation in einem** (beamer-taugliche Einzel-HTML); der
  Klassenordner `3ahwii/` (Datums-UE-Ordner) ist **nicht** Teil der Lernplattform.
