// ============================================================
// NAVBAR TOGGLE (vorgegeben — nicht Teil der Prüfung)
// ============================================================
const navbarTabs = document.querySelectorAll(".navbar-tab");
const views = document.querySelectorAll(".view");

for (const tab of navbarTabs) {
    tab.addEventListener("click", function () {
        for (const t of navbarTabs) {
            t.classList.remove("active");
        }
        tab.classList.add("active");

        const targetId = tab.getAttribute("data-view");
        for (const view of views) {
            view.classList.remove("active");
        }
        document.getElementById(targetId).classList.add("active");
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

    get name() {
        return this.#name;
    }
    get price() {
        return this.#price;
    }
    get category() {
        return this.#category;
    }
    get emoji() {
        return this.#emoji;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }
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

    get items() {
        return this.#items;
    }
    get total() {
        return this.#total;
    }
    get createdAtText() {
        return this.#createdAtText;
    }
}

// ============================================================
// STATE (vorgegeben)
// ============================================================

const state = {
    products: [
        new Artikel("Vintage E-Gitarre", 749, "Instrument", "🎸"),
        new Artikel("Stage Keyboard", 1190, "Instrument", "🎹"),
        new Artikel("Studio Mikrofon", 229, "Zubehör", "🎤"),
        new Artikel("Analog Synth", 980, "Instrument", "🎛️"),
        new Artikel("Drum Pad", 399, "Instrument", "🥁"),
        new Artikel("Bass Combo", 540, "Zubehör", "🔊"),
        new Artikel("Capo Deluxe", 24, "Zubehör", "🪕"),
        new Artikel("Pedal Echo", 149, "Zubehör", "🦶"),
        new Artikel("Studio Kopfhörer", 179, "Zubehör", "🎧"),
    ],
    cart: [],
    salesLog: [],
};

// ============================================================
// DOM NODE REFERENCES (vorgegeben)
// ============================================================

const shopGrid = document.getElementById("shop-grid");
const summaryText = document.getElementById("instrument-summary");
const dealText = document.getElementById("deal-text");
const cartList = document.getElementById("cart-list");
const cartSubtotal = document.getElementById("cart-subtotal");
const buyBtn = document.getElementById("buy-btn");
const cancelBtn = document.getElementById("cancel-btn");
const salesLogEl = document.getElementById("sales-log");
const salesSummary = document.getElementById("sales-summary");

const btnAll = document.getElementById("btn-all");
const btnInstruments = document.getElementById("btn-instruments");
const btnZubehoer = document.getElementById("btn-zubehoer");
const btnSortAsc = document.getElementById("btn-sort-asc");
const btnSortDesc = document.getElementById("btn-sort-desc");

// ============================================================
// RENDER (vorgegeben — nicht Teil der Prüfung)
// ============================================================

function renderProducts(products) {
    shopGrid.innerHTML = "";

    products.forEach((product) => {
        shopGrid.append(createProductElement(product));
    });

    summaryText.textContent = "Artikel im Shop: " + products.length;
}

function renderCart() {
    cartList.innerHTML = "";

    state.cart.forEach((product) => {
        const li = document.createElement("li");
        const productElement = createProductElement(product);
        li.append(productElement);
        // TODO: productElement.removeEventListener("click", _); // Klick auf Artikel im Warenkorb soll NICHTS tun
        cartList.append(li);
    });

    const total = getTotal(state.cart);
    cartSubtotal.textContent = "Zwischensumme: " + total.toFixed(2) + " Euro";
}

function renderSalesLog() {
    salesLogEl.innerHTML = "";

    state.salesLog.forEach((order) => {
        const li = document.createElement("li");
        li.textContent =
            `${order.createdAtText} - ${order.items.length} Artikel - ${
                order.total.toFixed(2)
            } Euro`;
        salesLogEl.append(li);
    });

    const totalRevenue = getTotal(state.orders.map((o) => o.total));
    salesSummary.textContent = `Gesamtumsatz: ${totalRevenue.toFixed(2)} Euro`;
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
    const article = document.createElement("article");
    article.classList.add("shop-card");
    const html = `
        <p class="shop-emoji">${product.emoji}</p>
        <h3>${product.name}</h3>
        <p class="shop-category">${product.category}</p>
        <p class="shop-price">${product.price.toFixed(2)} Euro</p>
    `;
    article.innerHTML = html;
    article.addEventListener("click", (_) => {
        state.cart.push(product);
        renderCart();
    });
    return article;
}

// Genauso möglich (programmatisch):
// function createProductElement_original(product) {
//     const article = document.createElement("article");
//     article.classList.add("shop-card");

//     const emojiEl = document.createElement("p");
//     emojiEl.classList.add("shop-emoji");
//     emojiEl.textContent = product.emoji;

//     const nameEl = document.createElement("h3");
//     nameEl.textContent = product.name;

//     const categoryEl = document.createElement("p");
//     categoryEl.classList.add("shop-category");
//     categoryEl.textContent = product.category;

//     const priceEl = document.createElement("p");
//     priceEl.classList.add("shop-price");
//     priceEl.textContent = product.price.toFixed(2) + " Euro";

//     article.append(emojiEl, nameEl, categoryEl, priceEl);
//     return article;
// }

// ============================================================
// AUFGABE 2: getTotal(products) — 10 Punkte
// ============================================================
// Schreibe eine Funktion, die die Gesamtsumme aller Preise
// im übergebenen Array zurückgibt.

function getTotal(products) {
    return products.reduce((sum, product) => sum + product.price, 0);
    // TODO: Dein Code hier
}

// ============================================================
// AUFGABE 3: getByCategory(products, category) — 20 Punkte
// ============================================================
// Schreibe eine Funktion, die nur die Artikel der angegebenen
// Kategorie zurückgibt. Nutze .filter().

function getByCategory(products, category) {
    return products.filter((product) => product.category === category);
}

// ============================================================
// AUFGABE 4: sortByPriceAsc(products) — 15 Punkte
// ============================================================
// Sortiere die Artikel aufsteigend nach Preis.
// Nutze .sort() mit einem Comparator.

function sortByPriceAsc(products) {
    return products.toSorted((a, b) => a.price - b.price);
}

// ============================================================
// AUFGABE 5: sortByPriceDesc(products) — 10 Punkte
// ============================================================
// Sortiere die Artikel absteigend nach Preis.

function sortByPriceDesc(products) {
    return products.toSorted((a, b) => b.price - a.price);
}

// ============================================================
// AUFGABE 6: EVENT HANDLER — 20 Punkte
// ============================================================
// Verknüpfe die Buttons mit addEventListener und rufe die
// passenden Funktionen auf.

btnAll.addEventListener("click", (_) => renderProducts(state.products));
btnInstruments.addEventListener(
    "click",
    (_) => renderProducts(getByCategory(state.products, "Instrument")),
);
btnZubehoer.addEventListener(
    "click",
    (_) => renderProducts(getByCategory(state.products, "Zubehör")),
);
btnSortAsc.addEventListener(
    "click",
    (_) => renderProducts(sortByPriceAsc(state.products)),
);
btnSortDesc.addEventListener(
    "click",
    (_) => renderProducts(sortByPriceDesc(state.products)),
);
cancelBtn.addEventListener("click", (_) => {
    state.cart = [];
    renderCart();
});
buyBtn.addEventListener("click", (_) => {
    if (state.cart.length === 0) {
        alert("Dein Warenkorb ist leer!");
        return;
    }

    const total = getTotal(state.cart);
    const confirmation = confirm(
        `Der Gesamtpreis beträgt ${
            total.toFixed(2)
        } Euro. Möchtest du den Kauf abschließen?`,
    );
    if (confirmation) {
        const newOrder = new Bestellung(
            state.cart,
            total,
            new Date().toLocaleString("de-DE", {
                dateStyle: "short",
                timeStyle: "short",
            }),
        );
        state.salesLog.push(newOrder);
        state.cart = [];
        renderCart();
        renderSalesLog();
    }
});

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
