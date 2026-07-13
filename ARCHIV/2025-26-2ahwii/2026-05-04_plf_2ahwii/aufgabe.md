# PLF — Musikgeschäft WebApp

**2AHWII · 4. Mai 2026 · 100 Punkte (+10 Bonus)**

Du arbeitest an einer kleinen Webanwendung für ein Musikgeschäft.
In der Datei `script.js` sind bereits die Klassen `Artikel` und `Bestellung`,
ein `state`-Objekt mit Produkten, DOM-Referenzen und die Funktion
`renderProducts` vorgegeben.

Wechsle über die Navbar zur Registerkarte **Website**, um das Ergebnis
zu sehen. Sobald du **Aufgabe 1** gelöst hast, erscheinen die Produktkarten
im Shop!

Unter dem Tab **Tests** kannst du deine Array-Funktionen auf Richtigkeit
prüfen. Du kannst deine Funktionen auch jederzeit in der **Browser-Konsole**
testen (F12 → Console). Alle Variablen und Funktionen sind dort verfügbar.

---

## Aufgabe 1: createProductElement(product) — 25 Punkte

Schreibe eine Funktion `createProductElement`, die ein `Artikel`-Objekt erhält
und ein **DOM-Element** zurückgibt. Das Element soll ein `<article>` mit der
CSS-Klasse `shop-card` sein und folgende Kinder enthalten:

- Ein `<p>` mit der Klasse `shop-emoji` und dem Emoji
- Ein `<h3>` mit dem Namen
- Ein `<p>` mit der Klasse `shop-category` und der Kategorie
- Ein `<p>` mit der Klasse `shop-price` und dem Preis (formatiert mit `.toFixed(2)` + `" Euro"`)

```js
function createProductElement(product) {
    // Dein Code hier
}
```

💡 Hinweis: Erstelle jedes Kind-Element mit `document.createElement("p")`,
setze `.textContent` und `.classList.add(...)`, und hänge alle mit `.append()`
an das Article-Element.

---

## Aufgabe 2: getTotal(products) — 10 Punkte

Schreibe eine Funktion `getTotal`, die ein Array von `Artikel`-Objekten erhält
und die **Gesamtsumme aller Preise** als Zahl zurückgibt.

```js
function getTotal(products) {
    // Dein Code hier
}
```

💡 Hinweis: Nutze eine `for...of`-Schleife und greife mit `product.price`
auf den Preis zu. Vergiss nicht, das Ergebnis mit `return` zurückzugeben.

---

## Aufgabe 3: getByCategory(products, category) — 20 Punkte

Schreibe eine Funktion `getByCategory`, die ein Array von `Artikel`-Objekten
und einen Kategorie-String erhält. Gib ein **neues Array** zurück, das nur
die Artikel der angegebenen Kategorie enthält.

```js
function getByCategory(products, category) {
    // Dein Code hier
}
```

💡 Hinweis: Nutze `.filter()`. Beispiel: `products.filter(p => p.category === category)`

---

## Aufgabe 4: sortByPriceAsc(products) — 15 Punkte

Schreibe eine Funktion `sortByPriceAsc`, die ein Array von `Artikel`-Objekten
erhält und die Artikel **aufsteigend nach Preis** sortiert.
Gib das sortierte Array zurück.

```js
function sortByPriceAsc(products) {
    // Dein Code hier
}
```

💡 Hinweis: Nutze `.sort()` mit einem Comparator.
`(a, b) => a.price - b.price` sortiert aufsteigend.

---

## Aufgabe 5: sortByPriceDesc(products) — 10 Punkte

Schreibe eine Funktion `sortByPriceDesc`, die ein Array von `Artikel`-Objekten
erhält und die Artikel **absteigend nach Preis** sortiert.
Gib das sortierte Array zurück.

```js
function sortByPriceDesc(products) {
    // Dein Code hier
}
```

💡 Hinweis: Drehe den Comparator aus Aufgabe 4 einfach um:
`(a, b) => b.price - a.price`

---

## Aufgabe 6: Event Handler verknüpfen — 20 Punkte

Verknüpfe die vorgegebenen Buttons mit `addEventListener`, sodass beim Klicken
die entsprechenden Funktionen aufgerufen werden:

| Button | Aktion |
|--------|--------|
| `btnAll` | `renderProducts(state.products)` |
| `btnInstruments` | `renderProducts(getByCategory(state.products, "Instrument"))` |
| `btnZubehoer` | `renderProducts(getByCategory(state.products, "Zubehör"))` |
| `btnSortAsc` | `renderProducts(sortByPriceAsc(state.products))` |
| `btnSortDesc` | `renderProducts(sortByPriceDesc(state.products))` |

💡 Hinweis: Beispiel:
`btnAll.addEventListener("click", function () { renderProducts(state.products); });`

---

## ⭐ Bonus: Warenkorb — +10 Punkte

Erweitere die Anwendung um einen einfachen Warenkorb:

1. Beim Klick auf eine Produktkarte soll der Artikel zu `state.cart`
   hinzugefügt werden (`state.cart.push(product)`).
2. Zeige die Artikel im Warenkorb im Element `cartList` an.
3. Zeige die Zwischensumme im Element `cartSubtotal` an
   (nutze deine Funktion `getTotal`).
4. Der Button `buyBtn` leert den Warenkorb und zeigt eine kurze Bestätigung an.
5. Der Button `cancelBtn` leert den Warenkorb ebenfalls, aber ohne Bestätigung.

💡 Hinweis: Du kannst `addEventListener` direkt in `createProductElement`
auf das Article-Element setzen. Vergiss nicht, den Warenkorb nach jeder
Aktion neu zu rendern.

---

Gutes Gelingen! 🎵
