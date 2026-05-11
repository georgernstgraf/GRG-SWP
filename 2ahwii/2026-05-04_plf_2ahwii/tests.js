// ============================================================
// TESTS (vorgegeben — nicht Teil der Prüfung)
// ============================================================

var EXPECTED_TOTAL = 4439;

var EXPECTED_INSTRUMENTS = [
    { name: 'Vintage E-Gitarre', price: 749 },
    { name: 'Stage Keyboard', price: 1190 },
    { name: 'Analog Synth', price: 980 },
    { name: 'Drum Pad', price: 399 }
];

var EXPECTED_ZUBEHOER = [
    { name: 'Studio Mikrofon', price: 229 },
    { name: 'Bass Combo', price: 540 },
    { name: 'Capo Deluxe', price: 24 },
    { name: 'Pedal Echo', price: 149 },
    { name: 'Studio Kopfhörer', price: 179 }
];

var EXPECTED_PRICE_ASC = [
    { name: 'Capo Deluxe', price: 24 },
    { name: 'Pedal Echo', price: 149 },
    { name: 'Studio Kopfhörer', price: 179 },
    { name: 'Studio Mikrofon', price: 229 },
    { name: 'Drum Pad', price: 399 },
    { name: 'Bass Combo', price: 540 },
    { name: 'Vintage E-Gitarre', price: 749 },
    { name: 'Analog Synth', price: 980 },
    { name: 'Stage Keyboard', price: 1190 }
];

var EXPECTED_PRICE_DESC = [
    { name: 'Stage Keyboard', price: 1190 },
    { name: 'Analog Synth', price: 980 },
    { name: 'Vintage E-Gitarre', price: 749 },
    { name: 'Bass Combo', price: 540 },
    { name: 'Drum Pad', price: 399 },
    { name: 'Studio Mikrofon', price: 229 },
    { name: 'Studio Kopfhörer', price: 179 },
    { name: 'Pedal Echo', price: 149 },
    { name: 'Capo Deluxe', price: 24 }
];

// ============================================================
// HELPER
// ============================================================

function formatProductList(items) {
    var html = '<ul class="test-received-list">';
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var name = item.name || '(kein Name)';
        var price = typeof item.price === 'number' ? item.price.toFixed(2) : '(kein Preis)';
        html += '<li>' + name + ' — ' + price + ' Euro</li>';
    }
    html += '</ul>';
    return html;
}

function setPass(elementId, message) {
    var el = document.getElementById(elementId);
    el.innerHTML = '<p class="test-pass">✅ ' + message + '</p>';
}

function setFail(elementId, message) {
    var el = document.getElementById(elementId);
    el.innerHTML = '<p class="test-fail">❌ ' + message + '</p>';
}

function setError(elementId, message) {
    var el = document.getElementById(elementId);
    el.innerHTML = '<p class="test-error">⚠️ ' + message + '</p>';
}

// ============================================================
// TEST 1: getTotal
// ============================================================

document.getElementById('test-total-btn').addEventListener('click', function () {
    var resultId = 'test-total-result';
    var result;

    try {
        result = getTotal(state.products);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (typeof result !== 'number') {
        setFail(resultId, 'Erwartet: <code>' + EXPECTED_TOTAL + '</code> | Erhalten: <code>' + String(result) + '</code> (keine Zahl)');
        return;
    }

    if (result === EXPECTED_TOTAL) {
        setPass(resultId, 'Richtig! Ergebnis: <code>' + result + '</code>');
    } else {
        setFail(resultId, 'Erwartet: <code>' + EXPECTED_TOTAL + '</code> | Erhalten: <code>' + result + '</code>');
    }
});

// ============================================================
// TEST 2: getByCategory
// ============================================================

var categorySelect = document.getElementById('test-category-select');
var categoryLabel = document.getElementById('test-category-label');
var categoryCountLabel = document.getElementById('test-category-count-label');
var categoryExpectedList = document.getElementById('test-category-expected');

categorySelect.addEventListener('change', function () {
    var category = categorySelect.value;
    categoryLabel.textContent = category;
    categoryCountLabel.textContent = category;
    updateCategoryExpectedList(category);
});

function updateCategoryExpectedList(category) {
    var data = category === 'Instrument' ? EXPECTED_INSTRUMENTS : EXPECTED_ZUBEHOER;
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<li>' + data[i].name + ' — ' + data[i].price.toFixed(2) + ' Euro</li>';
    }
    categoryExpectedList.innerHTML = html;
}

document.getElementById('test-category-btn').addEventListener('click', function () {
    var resultId = 'test-category-result';
    var category = categorySelect.value;
    var expected = category === 'Instrument' ? EXPECTED_INSTRUMENTS : EXPECTED_ZUBEHOER;
    var result;

    try {
        result = getByCategory(state.products, category);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (!Array.isArray(result)) {
        setFail(resultId, 'Erwartet: Array mit ' + expected.length + ' Elementen | Erhalten: <code>' + String(result) + '</code> (kein Array)');
        return;
    }

    if (result.length !== expected.length) {
        setFail(resultId,
            'Erwartet: ' + expected.length + ' Artikel | Erhalten: ' + result.length + ' Artikel' +
            formatProductList(result)
        );
        return;
    }

    var allMatch = true;
    for (var i = 0; i < expected.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j].name === expected[i].name && result[j].price === expected[i].price) {
                found = true;
                break;
            }
        }
        if (!found) {
            allMatch = false;
            break;
        }
    }

    if (allMatch) {
        setPass(resultId, 'Richtig! ' + result.length + ' Artikel gefunden.' + formatProductList(result));
    } else {
        setFail(resultId, 'Die Artikel stimmen nicht überein.' + formatProductList(result));
    }
});

// ============================================================
// TEST 3: sortByPriceAsc
// ============================================================

document.getElementById('test-asc-btn').addEventListener('click', function () {
    var resultId = 'test-asc-result';
    var result;

    try {
        result = sortByPriceAsc(state.products);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (!Array.isArray(result)) {
        setFail(resultId, 'Erwartet: sortiertes Array | Erhalten: <code>' + String(result) + '</code> (kein Array)');
        return;
    }

    if (result.length !== EXPECTED_PRICE_ASC.length) {
        setFail(resultId, 'Erwartet: ' + EXPECTED_PRICE_ASC.length + ' Artikel | Erhalten: ' + result.length + ' Artikel');
        return;
    }

    var allMatch = true;
    for (var i = 0; i < EXPECTED_PRICE_ASC.length; i++) {
        if (result[i].name !== EXPECTED_PRICE_ASC[i].name || result[i].price !== EXPECTED_PRICE_ASC[i].price) {
            allMatch = false;
            break;
        }
    }

    if (allMatch) {
        setPass(resultId, 'Richtig! Aufsteigend sortiert.' + formatProductList(result));
    } else {
        setFail(resultId,
            'Reihenfolge stimmt nicht.' + formatProductList(result)
        );
    }
});

// ============================================================
// TEST 4: sortByPriceDesc
// ============================================================

document.getElementById('test-desc-btn').addEventListener('click', function () {
    var resultId = 'test-desc-result';
    var result;

    try {
        result = sortByPriceDesc(state.products);
    } catch (e) {
        setError(resultId, 'Fehler beim Aufruf: ' + e.message);
        return;
    }

    if (!Array.isArray(result)) {
        setFail(resultId, 'Erwartet: sortiertes Array | Erhalten: <code>' + String(result) + '</code> (kein Array)');
        return;
    }

    if (result.length !== EXPECTED_PRICE_DESC.length) {
        setFail(resultId, 'Erwartet: ' + EXPECTED_PRICE_DESC.length + ' Artikel | Erhalten: ' + result.length + ' Artikel');
        return;
    }

    var allMatch = true;
    for (var i = 0; i < EXPECTED_PRICE_DESC.length; i++) {
        if (result[i].name !== EXPECTED_PRICE_DESC[i].name || result[i].price !== EXPECTED_PRICE_DESC[i].price) {
            allMatch = false;
            break;
        }
    }

    if (allMatch) {
        setPass(resultId, 'Richtig! Absteigend sortiert.' + formatProductList(result));
    } else {
        setFail(resultId,
            'Reihenfolge stimmt nicht.' + formatProductList(result)
        );
    }
});
