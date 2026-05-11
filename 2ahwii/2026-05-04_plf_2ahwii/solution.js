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

function createProductElement(product) {
    const article = document.createElement("article");
    article.classList.add("shop-card");

    const emoji = document.createElement("p");
    emoji.classList.add("shop-emoji");
    emoji.textContent = product.emoji;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const category = document.createElement("p");
    category.classList.add("shop-category");
    category.textContent = product.category;

    const price = document.createElement("p");
    price.classList.add("shop-price");
    price.textContent = product.price.toFixed(2) + " Euro";

    article.append(emoji, name, category, price);

    article.addEventListener("click", function () {
        state.cart.push(product);
        renderCart();
    });

    return article;
}

// ============================================================
// AUFGABE 2: getTotal(products) — 10 Punkte
// ============================================================

function getTotal(products) {
    let sum = 0;
    for (const product of products) {
        sum += product.price;
    }
    return sum;
}

// ============================================================
// AUFGABE 3: getByCategory(products, category) — 20 Punkte
// ============================================================

function getByCategory(products, category) {
    return products.filter((p) => p.category === category);
}

// ============================================================
// AUFGABE 4: sortByPriceAsc(products) — 15 Punkte
// ============================================================

function sortByPriceAsc(products) {
    return products.sort((a, b) => a.price - b.price);
}

// ============================================================
// AUFGABE 5: sortByPriceDesc(products) — 10 Punkte
// ============================================================

function sortByPriceDesc(products) {
    return products.sort((a, b) => b.price - a.price);
}

// ============================================================
// AUFGABE 6: EVENT HANDLER — 20 Punkte
// ============================================================

btnAll.addEventListener("click", function () {
    renderProducts(state.products);
});

btnInstruments.addEventListener("click", function () {
    renderProducts(getByCategory(state.products, "Instrument"));
});

btnZubehoer.addEventListener("click", function () {
    renderProducts(getByCategory(state.products, "Zubehör"));
});

btnSortAsc.addEventListener("click", function () {
    renderProducts(sortByPriceAsc(state.products));
});

btnSortDesc.addEventListener("click", function () {
    renderProducts(sortByPriceDesc(state.products));
});

// ============================================================
// BONUS: WARENKORB — +10 Punkte
// ============================================================

function renderCart() {
    cartList.innerHTML = "";
    for (const item of state.cart) {
        const li = document.createElement("li");
        li.textContent = item.name + " — " + item.price.toFixed(2) + " Euro";
        cartList.append(li);
    }
    cartSubtotal.textContent = "Summe: " + getTotal(state.cart).toFixed(2) + " Euro";
}

function renderSalesLog() {
    salesLogEl.innerHTML = "";
    for (const bestellung of state.salesLog) {
        const li = document.createElement("li");
        li.textContent = bestellung.createdAtText + " — " + bestellung.items.length + " Artikel — " + bestellung.total.toFixed(2) + " Euro";
        salesLogEl.append(li);
    }
    salesSummary.textContent = "Bestellungen: " + state.salesLog.length;
}

buyBtn.addEventListener("click", function () {
    if (state.cart.length === 0) {
        return;
    }
    const total = getTotal(state.cart);
    const jetzt = new Date().toLocaleString("de-DE");
    const bestellung = new Bestellung([...state.cart], total, jetzt);
    state.salesLog.push(bestellung);
    state.cart = [];
    renderCart();
    renderSalesLog();
    alert("Vielen Dank für Ihren Einkauf!");
});

cancelBtn.addEventListener("click", function () {
    state.cart = [];
    renderCart();
});

// ============================================================
// INITIAL RENDER (vorgegeben)
// ============================================================
renderProducts(state.products);
renderCart();
renderSalesLog();
