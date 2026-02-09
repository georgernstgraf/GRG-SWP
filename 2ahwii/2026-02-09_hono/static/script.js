const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const stepInput = document.getElementById("step");
const tableBody = document.getElementById("table-body");
const calculateBtn = document.getElementById("calculate");
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

const colors = ["#007acc", "#e74c3c", "#2ecc71", "#9b59b6"];
const labels = ["f(x)", "g(x)", "h(x)", "i(x)"];
const funcs = [f, g, h, i];

function f(x) {
    return x * x;
}
function g(x) {
    return x * x / 4;
}
function h(x) {
    return x * x - 4;
}
function i(x) {
    return x * x/4 - 4;
}

function calculate() {
    const start = parseFloat(startInput.value) || 0;
    const end = parseFloat(endInput.value) || 0;
    const step = parseFloat(stepInput.value) || 1;

    tableBody.innerHTML = "";

    for (let x = start; x <= end; x += step) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${x.toFixed(2)}</td>
            <td>${f(x).toFixed(2)}</td>
            <td>${g(x).toFixed(2)}</td>
            <td>${h(x).toFixed(2)}</td>
            <td>${i(x).toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    }

    drawChart(start, end, step);
}

calculateBtn.addEventListener("click", calculate);

function drawChart(start, end, step) {
    const width = canvas.width;
    const height = canvas.height;
    const padding = 50;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);

    let minY = Infinity, maxY = -Infinity;
    for (let x = start; x <= end; x += step) {
        for (const fn of funcs) {
            const y = fn(x);
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        }
    }

    const yRange = maxY - minY || 1;
    const xRange = end - start || 1;

    function toCanvasX(x) {
        return padding + ((x - start) / xRange) * (width - 2 * padding);
    }
    function toCanvasY(y) {
        return height - padding - ((y - minY) / yRange) * (height - 2 * padding);
    }

    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
        const x = padding + (i / 10) * (width - 2 * padding);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }
    for (let i = 0; i <= 10; i++) {
        const y = padding + (i / 10) * (height - 2 * padding);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }

    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, 0);
    ctx.lineTo(padding, height);
    ctx.moveTo(0, toCanvasY(0));
    ctx.lineTo(width, toCanvasY(0));
    ctx.stroke();

    ctx.fillStyle = "#333";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    for (let i = 0; i <= 5; i++) {
        const xVal = start + (i / 5) * xRange;
        ctx.fillText(xVal.toFixed(1), toCanvasX(xVal), height - padding + 20);
    }
    ctx.textAlign = "right";
    for (let i = 0; i <= 5; i++) {
        const yVal = minY + (i / 5) * yRange;
        ctx.fillText(yVal.toFixed(1), padding - 10, toCanvasY(yVal) + 4);
    }

    funcs.forEach((fn, idx) => {
        const points = [];
        for (let x = start; x <= end; x += step) {
            points.push({ x: toCanvasX(x), y: toCanvasY(fn(x)) });
        }
        if (points.length < 2) return;

        ctx.strokeStyle = colors[idx];
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.stroke();
    });

    ctx.font = "14px sans-serif";
    labels.forEach((label, idx) => {
        ctx.fillStyle = colors[idx];
        ctx.fillRect(width - padding + 10, padding + idx * 25, 15, 15);
        ctx.fillStyle = "#333";
        ctx.textAlign = "left";
        ctx.fillText(label, width - padding + 30, padding + idx * 25 + 12);
    });
}
