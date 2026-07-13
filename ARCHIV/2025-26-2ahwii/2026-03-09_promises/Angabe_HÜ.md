### Hausübung: Der Pizza-Service (Promise-Kette)

**Ziel:** Du sollst lernen, mehrere asynchrone Schritte nacheinander auszuführen. Wenn ein Schritt scheitert (z.B. Ofen kaputt), darf der nächste (z.B. Pizza backen) nicht stattfinden.

#### Aufgabe 1: Der Ofen-Check (10 Min)

Schreibe eine Funktion `checkOven()`.

- Sie soll ein Promise zurückgeben.
- Erstelle eine Variable `isOvenHot = true` (oder `false` zum Testen).
- Wenn der Ofen heiß ist (`true`), soll das Promise **resolven** mit: `{"success": true, "message": "Ofen ist bereit!"}`.
- Wenn er kalt ist, soll es **rejecten** mit: `{"success": false, "message": "Ofen ist defekt."}`.

#### Aufgabe 2: Pizza Backen (15 Min)

Schreibe eine Funktion `bakePizza(pizzaName)`.

- Sie soll ebenfalls ein Promise zurückgeben.
- Wenn der `pizzaName` leer ist (""), soll es **rejecten** mit: `"Fehler: Keine Pizza ausgewählt."`.
- Sonst soll es **resolven** mit: `"Pizza " + pizzaName + " ist fertig gebacken!"`.

#### Aufgabe 3: Die Kette (Chaining) (20 Min)

Jetzt kombinieren wir das. Erstelle einen `main`-Aufruf:

1. Rufe `checkOven()` auf.
2. Wenn das Promise **resolved** (nur dann!), starte im `.then()` die Funktion `bakePizza("Margherita")`.
3. Gib das Promise aus `bakePizza` zurück (`return bakePizza(...)`).
4. Hänge ein zweites `.then()` an, das die finale Nachricht (z.B. "Pizza Margherita ist fertig gebacken!") in die Konsole schreibt.
5. Hänge **ein einziges** `.catch()` ganz an das Ende der Kette. Egal ob der Ofen kaputt ist *oder* die Pizza falsch war: Die Fehlermeldung soll hier ausgegeben werden.

---

### Vorlage für den Start

Damit wir nicht bei Null anfangen, diese Struktur:

```js
function checkOven() {
    return new Promise((resolve, reject) => {
        const isOvenHot = true;
        // ... deine Logik hier
    });
}

function bakePizza(name) {
    return new Promise((resolve, reject) => {
        // ... deine Logik hier
    });
}

// Hier startet die Kette:
checkOven()
    .then((result) => {
        console.log(result.message);
        // Hier musst du bakePizza zurückgeben!
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error("Pizza-Bestellung gescheitert:", err);
    });
```

---

### Hinweise

1. **Das "return" im `.then()`:** Das ist meist der häufigste Fehler. Die Schüler vergessen oft, dass sie das zweite Promise (von `bakePizza`) zurückgeben müssen, damit die Kette im nächsten `.then()` weitergehen kann.
2. **Ein vs. zwei `.catch()`:** Achte darauf, dass sie verstehen, warum ein `.catch()` am Ende der Kette reicht. Wenn der erste Schritt (Ofen) scheitert, wird das Promise direkt "rejected", und die Kette springt automatisch zum letzten `.catch()` – die `bakePizza`-Funktion wird dann gar nicht erst ausgeführt. Das ist das "Aha-Erlebnis" für Kontrollfluss!
3. **JSON-Objekte:** Dass wir jetzt Objekte `{ success: true, ... }` verwenden statt simpler Strings, bereitet uns auf die spätere Arbeit mit APIs (`fetch`) vor, wo wir JSON-Antworten genau so verarbeiten müssen.
