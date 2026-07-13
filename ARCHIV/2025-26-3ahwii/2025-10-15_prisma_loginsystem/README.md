# deno / prisma starter

- im Verzeichnis: `deno init`
- wichtig fürs import von libs: linke Seite nehmen!!!
- Wo gibt es libs?
- - npmjs.com (Node Libs, aber mit deno kompatibel)
- - jsr.io (js software registry) (mehr für deno, vieles ist node kompatibel)
- `deno add npm:prisma`
- in den deno tasks prisma anlegen (wie hier)
- `deno task prisma init` geht momentan noch nicht, einfach ein schema.prisma erstellen!!
- prisma/schema.prisma erstellen oder von woanders kopieren
- `.env` erstellen (siehe schema.prisma)
- `.env` NICHT COMMITTEN (.gitignore)
- `prisma validate` -> prüft ob die schema Datei OK ist (Prisma Plugin prüft auch;)
- `prisma generate` -> generiert den client (Deno importierbar)
- `prisma migrate dev` -- appliziert das Schema auf die DB
- `deno add 'npm:@prisma/client'`
