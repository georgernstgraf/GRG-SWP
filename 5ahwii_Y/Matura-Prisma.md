# Aufgabenstellung 4 – Datenmodellierung (SQLite via Prisma)

## es ist ein relationales Datenmodell zu erstellen und als
SQL(ite)-DDL sowie als DML (für Note 1 und 2) abzugeben.

Modellierung kann über Prisma erfolgen (Prisma-Schema + Migration). Abgabe erfolgt als:

- ddl-xxxxx.sql  (SQLite DDL: Tabellen, Constraints, Foreign Keys, Indizes)
- dml-xxxxx.sql  (SQLite DML: Beispieldaten; Note 1/2 siehe unten; beste Variante)
- seed.ts            (Prisma Seed Script; ok als Alternative)

Zu implementierende Tabellen und Felder

-> siehe README

Zeitformat (SQLite Speicherung): Zeitpunkte werden als TEXT gespeichert im Format
ISO 8601 / RFC 3339 in UTC, so wie JavaScript es mit new Date().toISOString()
liefert (Beispiel: 2026-02-06T05:59:50.440Z).

Aufgabe: Beziehungen (FOREIGN KEY)

Aufgabe: Constraints

Allgemein

- Jede Tabelle hat einen PRIMARY KEY.
- XXXX verwendet einen zusammengesetzten PRIMARY KEY (rrrrrId, ffffffId).
- Pflichtfelder sind NOT NULL (außer dort, wo fachlich sinnvoll: cccccccAt, ddddddddAt).

blblblblbl

- name ist NOT NULL.




rrrrr

- blblblblblId ist NOT NULL (FK).
- name ist NOT NULL.
- isActive ist Boolean (0/1), DEFAULT 1.
- urxnname ist innerhalb eines Gebäudes eindeutig:
  UNIQUE(blblblblblId, name).

ffffff

- code und label sind NOT NULL.
- code ist eindeutig: UNIQUE(code).

User

- email ist NOT NULL und eindeutig: UNIQUE(email).

verleih

- rrrrrId ist NOT NULL (FK), dfao5fsdgarsId ist NOT NULL (FK).
- startAt ist NOT NULL, endAt ist NOT NULL.

Referenzaktionen (ON DELETE / ON UPDATE)

- Aufgabe: Referenzaktionen sinnvoll und konsistent festlegen.
  (Beispiel-Variante: blblblblbl/rrrrr/User RESTRICT; rrrrrffffff bei rrrrr/ffffff CASCADE.)

Aufgabe: Indizes

Zusätzlich zu PK/UNIQUE-Indizes werden folgende Indizes angelegt:

- rrrrr(blblblblblId)
- rrrrrffffff(ffffffId)
- verleih(rrrrrId, startAt)
- verleih(dfao5fsdgarsId, startAt)

Optional (bei Begründung):

- verleih(status, startAt)

Abgabe: DDL-Datei (ddl-library.sql)


Wenn das DDL/Schema fertig ist, ist dieses auch als ER-Diagramm
"er-library.png" abzugeben.


Abgabe – DML (dml-library.sql) für Note 1 und Note 2

Die DML Datei ist bevorzugt als dml-library.sql abzugeben; seed.ts ist ebenfalls möglich (Prisma Seed Script).

- Note 2: DML enthält INSERTs in manche Tabellen (aus mockdata.json).
- Note 1: DML enthält INSERTs für alle Objekte aus mockdata.json.

Hinweis: DML kann aus sqlite3 .dump gewonnen werden.

Workflow (CLI):

- seed.ts ausführen (DB wird befüllt)
- anschließend in sqlite3:
  sqlite3 dev.db
  .output dml-library.sql
  .dump blblblblbl
  .dump rrrrr
  .dump ffffff
  .dump rrrrrffffff
  .dump User
  .dump verleih
  .quit

Hinweis: .dump enthält je nach sqlite3-Version auch Schema-Anteile; diese dürfen in der
Dump-Datei verbleiben oder können entfernt werden, sofern ddl-library.sql separat
vorliegt.



