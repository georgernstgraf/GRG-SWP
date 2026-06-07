# 11. tRPC und Fullstack Typsicherheit

## Der Vertragsbruch von REST APIs
Klassische Web-Architekturen nutzen meist REST (Representational State Transfer) APIs. Das Frontend schickt HTTP-Anfragen (`GET`, `POST`) an spezifische URLs (Endpoints wie `/api/users`), und das Backend antwortet mit Daten, meistens im JSON-Format.

**Das Problem: "Double-Typing"**
Stell dir vor, du baust eine REST API mit Node.js (TypeScript) im Backend und React (TypeScript) im Frontend.
Das Backend sendet folgende Daten von `/api/users`:
```json
[ { "id": 1, "username": "max123" } ]
```
Das Frontend ruft die Daten ab:
```typescript
const response = await fetch('/api/users');
const users = await response.json(); 
// Typescript hat keine Ahnung, was 'users' ist. Es ist vom Typ 'any'.
```
Damit das Frontend typsicher arbeiten kann, muss der Frontend-Entwickler manuell ein Interface schreiben, das die Backend-Antwort beschreibt (Double-Typing):
```typescript
interface UserResponse { id: number, username: string }
```
**Die Katastrophe:** Was passiert, wenn der Backend-Entwickler entscheidet, `username` in der Datenbank zu `email` zu ändern? 
Das Backend läuft fehlerfrei. Das Frontend compiliert ebenfalls fehlerfrei (denn das Interface sagt ja immer noch, es kommt ein `username`). Aber sobald der User die Webseite öffnet, stürzt sie ab, weil `users[0].username` plötzlich `undefined` ist. Der Vertrag zwischen Frontend und Backend wurde gebrochen, und unsere Tools (TypeScript) haben es nicht gemerkt!

---

## Das RPC Konzept (Remote Procedure Call)
RPC ist ein älteres, aber hochaktuelles Konzept. Anstatt mit HTTP-Verben und URLs zu hantieren, rufen wir Funktionen auf, die auf einem anderen Rechner (dem Server) liegen, als wären sie lokal.
Anstatt `POST /api/users/create` rufen wir (konzeptionell) `backend.createUser(daten)` auf.

---

## Die Magie von tRPC (TypeScript RPC)
tRPC ist eine moderne Bibliothek, die das RPC-Konzept in die TypeScript-Welt bringt und das Double-Typing-Problem **vollständig eliminiert**.

**Wie funktioniert es?**
Wenn du ein Monorepo hast (Frontend und Backend im selben Projektordner, wie wir es mit Deno nutzen), exportiert das Backend den *Typ* seines gesamten Routers (aber nicht den geheimen Code!).

Das Frontend importiert diesen Typ. Wenn du nun im Frontend einen Request machen willst, nutzt du den tRPC Client:

```typescript
// Im Frontend:
const users = await trpc.getUsers.query();
```
**Die Magie:**
1.  Dein Code-Editor schlägt dir `getUsers` automatisch vor, weil er das Backend "kennt".
2.  Wenn du mit der Maus über `users` fährst, weiß TypeScript bereits, dass es sich um ein Array mit `[{ id: number, email: string }]` handelt.
3.  Wenn der Backend-Entwickler `email` zu `name` ändert, wird dein Frontend-Code beim nächsten Kompilieren (oder direkt im Editor) rot markiert und wirft einen Fehler, *bevor* die Seite überhaupt gebaut wird!

**Kein Build-Step, keine Code-Generierung** (wie es bei OpenAPI/Swagger der Fall ist). Es ist reine TypeScript-Typherleitung.

---

## Zod & Input Validation (Trust No One)
Typen im Backend (TypeScript) existieren nur vor der Laufzeit. Wenn die App läuft (als kompiliertes JavaScript), sind alle Typen verschwunden.

Wenn unser tRPC-Backend eine Funktion anbietet, um einen User zu erstellen, erwartet es z.B. einen String als Namen. Ein böswilliger Angreifer (oder ein fehlerhafter Client) könnte aber auch ein leeres Objekt oder SQL-Injection-Strings senden.

Deswegen gilt die Regel: **Das Backend muss jeden Input validieren.**

Hier kommt **Zod** ins Spiel (populär gemacht u.a. durch Matt Pocock). Zod ist eine Schema-Deklarations-Bibliothek, die Validierung und Typsicherheit kombiniert.

Wir definieren im tRPC-Router den erwarteten Input mit Zod:

```typescript
import { z } from 'zod';

// Im Backend tRPC Router:
createUser: publicProcedure
  // 1. Zod validiert die Daten ZUR LAUFZEIT
  .input(z.object({
    name: z.string().min(3), // Muss ein String mit mind. 3 Zeichen sein
    alter: z.number().int().positive()
  }))
  .mutation(async ({ input }) => {
    // 2. Hier ist 'input.name' für TypeScript 100% sicher ein String
    // Wenn die Validierung oben fehlschlägt, kommt der Code nie hier an!
    await prisma.user.create({ data: input });
  }),
```

Das Geniale an der Kombination tRPC + Zod: Das Frontend "sieht" das Zod-Schema des Backends. Wenn du im Frontend versuchst, `trpc.createUser.mutate({ name: "Bo" })` aufzurufen, warnt dich dein Editor schon während des Tippens, dass der Name zu kurz ist!