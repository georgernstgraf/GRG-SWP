# Lösungen - Wissenstest 2ahwii

**Datum:** 2026-06-01

---

## Multiple Choice Lösungen

### 1. Promise – Grundlagen
- [x] Ein Objekt, das einen zukünftigen Wert repräsentiert
- [ ] Eine Funktion, die sofort ausgeführt wird
- [x] Ein Objekt mit den Zuständen `pending`, `fulfilled` und `rejected`
- [ ] Eine Datenstruktur für synchrone Operationen

### 2. Promise – then/catch
- [ ] Es wird nur nach einem erfolgreichen `.then()` ausgeführt
- [x] Es fängt Fehler aus allen vorherigen `.then()`-Schritten ab
- [x] Es wird aufgerufen, wenn das Promise rejected wird
- [ ] Es unterbricht die weitere Ausführung der Kette

### 3. Promise-Chaining
- [ ] Das äußere Promise wird sofort resolved
- [x] Das nächste `.then()` wartet, bis das zurückgegebene Promise resolved ist
- [ ] Der Rückgabewert wird ignoriert
- [ ] Die Kette wird abgebrochen

### 4. async/await
- [ ] Es pausiert die Ausführung der gesamten Anwendung
- [x] Es wartet, bis ein Promise resolved oder rejected ist
- [x] Es kann nur innerhalb einer `async`-Funktion verwendet werden
- [ ] Es verwandelt eine synchrone Funktion in eine asynchrone

### 5. Async-Funktionen
- [ ] Einen beliebigen Wert
- [x] Immer ein Promise
- [ ] Nur `undefined`
- [ ] Ein Promise, wenn `await` verwendet wird, sonst den Wert direkt

### 6. DOM – createElement
- [x] `document.createElement("div")`
- [ ] `new HTMLDivElement()`
- [ ] `document.createNode("div")`
- [ ] `document.newElement("div")`

### 7. DOM – classList
- [x] `.add("klasse")`
- [x] `.remove("klasse")`
- [x] `.toggle("klasse")`
- [ ] `.set("klasse")`

### 8. Array – filter
- [ ] Es ändert das ursprüngliche Array
- [x] Es gibt ein neues Array mit allen Elementen zurück, für die `fn` `true` zurückgibt
- [ ] Es gibt das erste Element zurück, für das `fn` `true` ergibt
- [x] Es entfernt Elemente aus dem Array, für die `fn` `false` zurückgibt

### 9. Array – sort
- [x] Es sortiert die Elemente aufsteigend nach `price`
- [ ] Es sortiert die Elemente absteigend nach `price`
- [x] Es verändert das ursprüngliche Array (bei `sort()`)
- [x] Es gibt ein neues sortiertes Array zurück (bei `toSorted()`)

### 10. Event-Handling
- [x] Man kann mehrere Event-Listener für dasselbe Event an einem Element registrieren
- [ ] Der Callback wird sofort beim Registrieren ausgeführt
- [x] Der Callback wird ausgeführt, wenn das Event eintritt
- [x] Man kann Events mit `removeEventListener` wieder entfernen

### 11. JavaScript Klassen
- [x] Private Felder mit `#`-Präfix
- [x] Getter und Setter mit `get` und `set`
- [ ] Echte Sichtbarkeitsmodifikatoren wie `private` oder `public` (zur Laufzeit)
- [ ] Mehrere Konstruktoren wie in Java

### 12. TypeScript-Transpilation
- [x] Es kompiliert TypeScript zu JavaScript
- [ ] Es erstellt ein ausführbares Binary
- [x] Es bündelt alle importierten Module in eine einzige Datei
- [ ] Es führt den Code sofort aus

---

## Freitext Lösungen

### 13. Promise-Kette erklären

**Musterlösung:**

Der Ablauf:
1. `checkOven()` wird aufgerufen und gibt ein Promise zurück
2. Im `.then()` wird überprüft, ob der Ofen heiß ist
   - Wenn resolved: `bakePizza("Margherita")` wird gestartet
   - Wenn rejected: Sprung zu `.catch()`
3. `bakePizza()` gibt wieder ein Promise zurück
4. Das zweite `.then()` gibt die fertige Nachricht aus

Ein einziges `.catch()` am Ende reicht, weil:
- Wenn `checkOven()` rejected (Ofen kaputt), wird sofort zu `.catch()` gesprungen
- `bakePizza()` wird dann gar nicht erst ausgeführt
- Wenn `bakePizza()` rejected (keine Pizza gewählt), wird ebenfalls zu `.catch()` gesprungen
- Das Promise-Chaining leitet rejections automatisch bis zum nächsten `.catch()` weiter

### 14. async/await vs. then/catch

**Musterlösung:**

```javascript
async function main() {
    try {
        const result = await checkOven();
        const msg = await bakePizza("Margherita");
        console.log(msg);
    } catch (err) {
        console.error(err);
    }
}

main();
```

Erklärung:
- `await` wartet auf die Auflösung jedes Promises
- Fehler werden mit `try/catch` statt `.catch()` abgefangen
- Der Code liest sich linearer und ist leichter verständlich
- Die `async`-Funktion kapselt die gesamte Logik

### 15. DOM-Elemente programmatisch erstellen

**Musterlösung:**

```javascript
// 1. Element erstellen
const article = document.createElement("article");

// 2. CSS-Klasse hinzufügen
article.classList.add("shop-card");

// 3. Textinhalt setzen
const p = document.createElement("p");
p.textContent = "Hallo Welt";

// 4. Element in Eltern-Element einfügen
elternElement.append(article);
// oder: elternElement.appendChild(article);
```

Wichtige Methoden:
- `document.createElement(tagName)` – erstellt ein neues HTML-Element
- `element.classList.add("klasse")` – fügt eine CSS-Klasse hinzu
- `element.textContent = "..."` – setzt den Text-Inhalt (sicherer als innerHTML)
- `elternElement.append(child)` – fügt ein Kind-Element am Ende ein
