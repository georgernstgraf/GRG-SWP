const PRICE_PER_SPOT_PER_HOUR = 3;

const parkingInputs = document.querySelectorAll('.parking-input');
const selectedSpotsEl = document.getElementById('selected-spots');
const selectedCountEl = document.getElementById('selected-count');
const totalPriceEl = document.getElementById('total-price');
const reserveBtn = document.getElementById('reserve-btn');

function getCheckedSpots() {
    const checked = [];

    parkingInputs.forEach((input) => {
        if (input.checked) {
            checked.push(input.id);
        }
    });

    return checked;
}

function renderSummary() {
    const spots = getCheckedSpots();
    const count = spots.length;
    const total = count * PRICE_PER_SPOT_PER_HOUR;

    if (selectedSpotsEl) {
        selectedSpotsEl.textContent = count > 0 ? spots.join(', ') : '—';
    }

    if (selectedCountEl) {
        selectedCountEl.textContent = String(count);
    }

    if (totalPriceEl) {
        totalPriceEl.textContent = `${total} € / Stunde`;
    }

    if (reserveBtn) {
        reserveBtn.disabled = count === 0;
    }
}

parkingInputs.forEach((input) => {
    input.addEventListener('change', renderSummary);
});

renderSummary();
