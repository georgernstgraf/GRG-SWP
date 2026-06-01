# Wissenstest - 2ahwii

**Datum:** 2026-06-01  
**Themen:** Promises, async/await, DOM-Manipulation, Array-Methoden, Event-Handling, TypeScript-Transpilation

---

## Multiple Choice Fragen

Kreuze die richtigen Antworten an. Es können mehrere Antworten richtig sein.  
Wenn du eine Antwort als mehrdeutig oder kontextabhängig empfindest, markiere `-` und begründe kurz.

### 1. Promise – Grundlagen

Was ist ein Promise in JavaScript?

- [ ] Ein Objekt, das einen zukünftigen Wert repräsentiert
- [ ] Eine Funktion, die sofort ausgeführt wird
- [ ] Ein Objekt mit den Zuständen `pending`, `fulfilled` und `rejected`
- [ ] Eine Datenstruktur für synchrone Operationen

### 2. Promise – then/catch

Was bewirkt `.catch()` an einer Promise-Kette?

- [ ] Es wird nur nach einem erfolgreichen `.then()` ausgeführt
- [ ] Es fängt Fehler aus allen vorherigen `.then()`-Schritten ab
- [ ] Es wird aufgerufen, wenn das Promise rejected wird
- [ ] Es unterbricht die weitere Ausführung der Kette

### 3. Promise-Chaining

Was passiert, wenn man in einem `.then()` ein neues Promise zurückgibt (`return`)?

- [ ] Das äußere Promise wird sofort resolved
- [ ] Das nächste `.then()` wartet, bis das zurückgegebene Promise resolved ist
- [ ] Der Rückgabewert wird ignoriert
- [ ] Die Kette wird abgebrochen

### 4. async/await

Was bewirkt das Schlüsselwort `await`?

- [ ] Es pausiert die Ausführung der gesamten Anwendung
- [ ] Es wartet, bis ein Promise resolved oder rejected ist
- [ ] Es kann nur innerhalb einer `async`-Funktion verwendet werden
- [ ] Es verwandelt eine synchrone Funktion in eine asynchrone

### 5. Async-Funktionen

Was gibt eine `async`-Funktion zurück?

- [ ] Einen beliebigen Wert
- [ ] Immer ein Promise
- [ ] Nur `undefined`
- [ ] Ein Promise, wenn `await` verwendet wird, sonst den Wert direkt

### 6. DOM – createElement

Wie erstellt man ein neues `<div>`-Element in JavaScript?

- [ ] `document.createElement("div")`
- [ ] `new HTMLDivElement()`
- [ ] `document.createNode("div")`
- [ ] `document.newElement("div")`

### 7. DOM – classList

Welche Methoden gibt es auf `element.classList`?

- [ ] `.add("klasse")`
- [ ] `.remove("klasse")`
- [ ] `.toggle("klasse")`
- [ ] `.set("klasse")`

### 8. Array – filter

Was macht `array.filter(fn)`?

- [ ] Es ändert das ursprüngliche Array
- [ ] Es gibt ein neues Array mit allen Elementen zurück, für die `fn` `true` zurückgibt
- [ ] Es gibt das erste Element zurück, für das `fn` `true` ergibt
- [ ] Es entfernt Elemente aus dem Array, für die `fn` `false` zurückgibt

### 9. Array – sort

Was bewirkt `array.sort((a, b) => a.price - b.price)`?

- [ ] Es sortiert die Elemente aufsteigend nach `price`
- [ ] Es sortiert die Elemente absteigend nach `price`
- [ ] Es verändert das ursprüngliche Array (bei `sort()`)
- [ ] Es gibt ein neues sortiertes Array zurück (bei `toSorted()`)

### 10. Event-Handling

Welche Aussagen zu `addEventListener` sind richtig?

- [ ] Man kann mehrere Event-Listener für dasselbe Event an einem Element registrieren
- [ ] Der Callback wird sofort beim Registrieren ausgeführt
- [ ] Der Callback wird ausgeführt, wenn das Event eintritt
- [ ] Man kann Events mit `removeEventListener` wieder entfernen

### 11. JavaScript Klassen

Was ist in JavaScript bei `class`-Definitionen möglich?

- [ ] Private Felder mit `#`-Präfix
- [ ] Getter und Setter mit `get` und `set`
- [ ] Echte Sichtbarkeitsmodifikatoren wie `private` oder `public` (zur Laufzeit)
- [ ] Mehrere Konstruktoren wie in Java

### 12. TypeScript-Transpilation

Was bewirkt `Deno.bundle()` im Unterrichtsbeispiel?

- [ ] Es kompiliert TypeScript zu JavaScript
- [ ] Es erstellt ein ausführbares Binary
- [ ] Es bündelt alle importierten Module in eine einzige Datei
- [ ] Es führt den Code sofort aus

---

## Freitext Fragen

### 13. Promise-Kette erklären

Erkläre den Ablauf einer Promise-Kette am Beispiel eines Pizza-Service:  
`checkOven()` → `bakePizza("Margherita")` → Ausgabe.  
Warum reicht ein einziges `.catch()` am Ende der Kette?

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

### 14. async/await vs. then/catch

Schreibe die folgende Promise-Kette mit `async`/`await` und `try`/`catch` um:

```javascript
checkOven()
  .then((result) => bakePizza("Margherita"))
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
```

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

### 15. DOM-Elemente programmatisch erstellen

Beschreibe, wie man in JavaScript ein DOM-Element erstellt, mit einer CSS-Klasse versieht und in ein Eltern-Element einfügt.  
Gehe auf `document.createElement`, `classList.add`, `textContent` und `append` ein.

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

---

Gutes Gelingen!
