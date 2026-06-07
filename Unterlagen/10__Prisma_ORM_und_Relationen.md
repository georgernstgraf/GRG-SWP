# 10. Prisma ORM und Relationen

## Der Paradigmenwechsel: Was ist ein ORM?
ORM steht für **Object-Relational Mapping**. Es ist eine Brücke zwischen zwei völlig unterschiedlichen Welten:
1.  **Der relationalen Datenbank:** Tabellen, Zeilen, Spalten und SQL-Syntax.
2.  **Unserem TypeScript-Code:** Objekte, Arrays, Methoden und strikte Typen.

Ohne ein ORM müssen wir manuell SQL-Strings schreiben, um mit der Datenbank zu kommunizieren (wie wir es bisher mit `db.prepare("SELECT...").all()` gemacht haben).

### Das Problem von Raw SQL
Wenn wir Raw SQL in unserem Code schreiben, passiert Folgendes:
```typescript
// Das Frontend übergibt uns eine User-ID
const rows = db.prepare(`SELECT id, e-mail FROM user WHERE id = ?`).all(id);

// Weiter unten im Code wollen wir die Email ausgeben:
console.log(rows[0].email); 
```
Dieser Code wird erst zur **Laufzeit** (wenn das Programm tatsächlich ausgeführt wird) explodieren. Warum?
1. Wir haben in der SQL-Query `e-mail` geschrieben.
2. Im Code rufen wir aber `email` (ohne Bindestrich) ab.
**TypeScript kann uns hier nicht beschützen!** Für TypeScript ist der SQL-Befehl einfach nur ein dummer Textstring (String). Es weiß nicht, welche Tabellen oder Spalten unsere Datenbank wirklich hat.

### Die Lösung: PrismaClient
Prisma löst dieses Problem. Aus unserem `schema.prisma` generiert Prisma automatisch tausende Zeilen an perfekten TypeScript-Typen.
Mit Prisma sieht der gleiche Befehl so aus:
```typescript
const user = await prisma.user.findUnique({
  where: { id: id }
});

console.log(user.email);
```
Wenn wir hier `user.e-mail` tippen, unterstreicht unser Code-Editor das sofort rot (zur **Designzeit**), weil Prisma der TypeScript-Engine mitgeteilt hat, dass dieses Feld so nicht existiert. Das verhindert hunderte von potenziellen Bugs!

---

## Relationen verstehen
Das "R" in RDBMS (Relational Database Management System wie MySQL, Postgres, SQLite) steht für *Relational*. Datenmengen werden erst wertvoll, wenn man sie miteinander verknüpft.

### Theorie: Wie Tabellen sich verbinden
Damit Tabellen "wissen", dass sie zusammengehören, nutzen wir Schlüssel:
*   **Primary Key (PK):** Eine eindeutige ID für eine Zeile (meist `id Int @id`). Er identifiziert z.B. einen User eindeutig.
*   **Foreign Key (FK):** Ein Feld in einer *anderen* Tabelle, das auf den Primary Key der ersten Tabelle verweist.

Beispiel: Eine 1:n (Eins-zu-Viele) Beziehung.
Ein **User** kann **viele** **Autos** besitzen. Aber ein **Auto** gehört immer nur **einem User**.

Die Tabelle `Auto` braucht also einen *Foreign Key*, um sich den User zu merken: `besitzerId`.

### Relationen in Prisma modellieren
Im `schema.prisma` sieht diese 1:n Beziehung extrem elegant aus. Wir definieren die Verknüpfung auf beiden Seiten:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  
  // Die Prisma-Magie: Ein User hat ein Array von Autos
  autos Auto[] 
}

model Auto {
  id         Int    @id @default(autoincrement())
  marke      String
  
  // Der echte Foreign Key in der Datenbank
  besitzerId Int    
  
  // Die Prisma-Relation: Sagt Prisma, wie die Tabellen verknüpft sind
  besitzer   User   @relation(fields: [besitzerId], references: [id])
}
```

---

## Typsicheres Laden von Relationen (`include`)
Wenn wir nun einen User aus der Datenbank holen, holt Prisma standardmäßig aus Performance-Gründen *nur* die Daten des Users, nicht seine Autos.

Wenn wir die Autos mitladen wollen, nutzen wir das **`include`** Keyword in der Query:

```typescript
// Lade alle User und inkludiere gleichzeitig alle ihre Autos
const alleUserMitAutos = await prisma.user.findMany({
  include: {
    autos: true // Sagt Prisma: Hol auch die verbundenen Autos!
  }
});
```

**Die wahre Magie:**
Weil wir Prisma nutzen, ist `alleUserMitAutos` vollständig typisiert!
Wenn du in deinem Code schreibst:
`alleUserMitAutos[0].`
wird dir dein Editor sofort `.autos` als Array vorschlagen.
Und wenn du `alleUserMitAutos[0].autos[0].` tippst, schlägt er dir `.marke` vor. 

Volle Typsicherheit über Tabellengrenzen hinweg, ohne jemals manuell einen `JOIN` (SQL) geschrieben zu haben!