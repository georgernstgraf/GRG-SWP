// ============================================================
// NAVBAR TOGGLE (vorgegeben — nicht Teil der Prüfung)
// ============================================================
const navbarTabs = document.querySelectorAll('.navbar-tab');
const views = document.querySelectorAll('.view');

for (const tab of navbarTabs) {
    tab.addEventListener('click', function () {
        for (const t of navbarTabs) {
            t.classList.remove('active');
        }
        tab.classList.add('active');

        const targetId = tab.getAttribute('data-view');
        for (const view of views) {
            view.classList.remove('active');
        }
        document.getElementById(targetId).classList.add('active');
    });
}

// ============================================================
// KLASSEN (vorgegeben)
// ============================================================

class Artikel {
    #name;
    #price;
    #category;
    #emoji;

    constructor(name, price, category, emoji) {
        this.#name = name;
        this.#price = price;
        this.#category = category;
        this.#emoji = emoji;
    }

    get name() { return this.#name; }
    get price() { return this.#price; }
    get category() { return this.#category; }
    get emoji() { return this.#emoji; }

    set price(newPrice) { this.#price = newPrice; }
}

class Bestellung {
    #items;
    #total;
    #createdAtText;

    constructor(items, total, createdAtText) {
        this.#items = items;
        this.#total = total;
        this.#createdAtText = createdAtText;
    }

    get items() { return this.#items; }
    get total() { return this.#total; }
    get createdAtText() { return this.#createdAtText; }
}

// ============================================================
// STATE (vorgegeben)
// ============================================================

const state = {
    products: [
        new Artikel('Vintage E-Gitarre', 749, 'Instrument', '🎸'),
        new Artikel('Stage Keyboard', 1190, 'Instrument', '🎹'),
        new Artikel('Studio Mikrofon', 229, 'Zubehör', '🎤'),
        new Artikel('Analog Synth', 980, 'Instrument', '🎛️'),
        new Artikel('Drum Pad', 399, 'Instrument', '🥁'),
        new Artikel('Bass Combo', 540, 'Zubehör', '🔊'),
        new Artikel('Capo Deluxe', 24, 'Zubehör', '🪕'),
        new Artikel('Pedal Echo', 149, 'Zubehör', '🦶'),
        new Artikel('Studio Kopfhörer', 179, 'Zubehör', '🎧')
    ],
    cart: [],
    salesLog: []
};

// ============================================================
// DOM NODE REFERENCES (vorgegeben)
// ============================================================

const shopGrid = document.getElementById('shop-grid');
const summaryText = document.getElementById('instrument-summary');
const dealText = document.getElementById('deal-text');
const cartList = document.getElementById('cart-list');
const cartSubtotal = document.getElementById('cart-subtotal');
const buyBtn = document.getElementById('buy-btn');
const cancelBtn = document.getElementById('cancel-btn');
const salesLogEl = document.getElementById('sales-log');
const salesSummary = document.getElementById('sales-summary');

const btnAll = document.getElementById('btn-all');
const btnInstruments = document.getElementById('btn-instruments');
const btnZubehoer = document.getElementById('btn-zubehoer');
const btnSortAsc = document.getElementById('btn-sort-asc');
const btnSortDesc = document.getElementById('btn-sort-desc');

// ============================================================
// RENDER (vorgegeben — nicht Teil der Prüfung)
// ============================================================

function renderProducts(products) {
    shopGrid.innerHTML = '';

    for (const product of products) {
        shopGrid.append(createProductElement(product));
    }

    summaryText.textContent = 'Artikel im Shop: ' + products.length;
}

// ============================================================
// AUFGABE 1: createProductElement(product) — 25 Punkte
// ============================================================
// Erstelle ein <article> Element mit der Klasse "shop-card"
// und folgenden Kindern:
//   - <p class="shop-emoji"> mit product.emoji
//   - <h3> mit product.name
//   - <p class="shop-category"> mit product.category
//   - <p class="shop-price"> mit product.price.toFixed(2) + " Euro"

function createProductElement(product) {
    // TODO: Dein Code hier
}

// ============================================================
// AUFGABE 2: getTotal(products) — 10 Punkte
// ============================================================
// Schreibe eine Funktion, die die Gesamtsumme aller Preise
// im übergebenen Array zurückgibt.

function getTotal(products) {
    // TODO: Dein Code hier
}

// ============================================================
// AUFGABE 3: getByCategory(products, category) — 20 Punkte
// ============================================================
// Schreibe eine Funktion, die nur die Artikel der angegebenen
// Kategorie zurückgibt. Nutze .filter().

function getByCategory(products, category) {
    // TODO: Dein Code hier
}

// ============================================================
// AUFGABE 4: sortByPriceAsc(products) — 15 Punkte
// ============================================================
// Sortiere die Artikel aufsteigend nach Preis.
// Nutze .sort() mit einem Comparator.

function sortByPriceAsc(products) {
    // TODO: Dein Code hier
}

// ============================================================
// AUFGABE 5: sortByPriceDesc(products) — 10 Punkte
// ============================================================
// Sortiere die Artikel absteigend nach Preis.

function sortByPriceDesc(products) {
    // TODO: Dein Code hier
}

// ============================================================
// AUFGABE 6: EVENT HANDLER — 20 Punkte
// ============================================================
// Verknüpfe die Buttons mit addEventListener und rufe die
// passenden Funktionen auf.

// TODO: Event Handler hier einrichten

// ============================================================
// BONUS: WARENKORB — +10 Punkte
// ============================================================
// Beim Klick auf eine Produktkarte -> Artikel zum Warenkorb hinzufügen
// Warenkorb anzeigen in cartList
// Kaufen -> Warenkorb leeren + Bestätigung
// Abbruch -> Warenkorb leeren

// TODO: Bonus-Code hier

// ============================================================
// INITIAL RENDER (vorgegeben)
// ============================================================
renderProducts(state.products);
