export {}; // Ensure this file is treated as a module

// ============================================================================
// Übungsangabe: Promises & Exceptions in TypeScript - LÖSUNG
// ============================================================================

// ============================================================================
// Aufgabe 1: Typisierung von globalThis in Node.js
// ============================================================================

// --- 1a) Unterschiede zwischen Browser und Node ---
/*
- window        → Browser
- document      → Browser
- process       → Node.js
- console       → Beides
- Buffer        → Node.js (in modernen Browsern teils via Polyfill/Streams, aber nativ Node)
- setTimeout    → Beides
- fetch         → Beides (nativ in modernen Node.js Versionen via undici)
*/

// --- 1b) Eigene Eigenschaft typisiert hinzufügen ---

interface AppConfig {
    apiUrl: string;
    maxRetries: number;
    debug: boolean;
}

declare global {
    var appConfig: AppConfig;
    var __retryCount: number;
}

// globalThis ist der Zugriff auf das globale Objekt. In Node.js ist das 'global',
// im Browser 'window'. Da globalThis in beiden Umgebungen standardisiert ist,
// erlaubt es universellen Code.

// Zuweisung (funktioniert erst nach korrekter Deklaration in 1c)
// globalThis.appConfig = { apiUrl: "https://api.example.com", maxRetries: 3, debug: true };

// --- 1c) Typ-Sicherheit prüfen ---
/*
Das Problem bei:
declare global {
  var appConfig: AppConfig;
}
globalThis.appConfig = { apiUrl: "https://api.example.com" };

ist, dass 'apiUrl' gesetzt wird, aber 'maxRetries' und 'debug' fehlen (Property Missing).
Außerdem muss das Interface 'Global' oder 'globalThis' im Scope von NodeJS erweitert werden,
wenn man direkt über globalThis.x zugreifen will, oder man nutzt das 'var' im global scope.
*/

// Korrigierte Version:
globalThis.appConfig = {
    apiUrl: "https://api.example.com",
    maxRetries: 5,
    debug: false,
};

// --- 1d) Vorsicht vor any ---
/*
Antwort: 'any' hebelt die Typprüfung aus. Man verliert Autocompletion, Refactoring-Sicherheit
und bekommt keine Warnung, wenn man Properties vergisst oder falsch schreibt.
Interface-Merging sorgt dafür, dass der Compiler weiß, welche Struktur das Objekt hat.
*/

// ============================================================================
// Aufgabe 2: Exception im Promise-Executor
// ============================================================================

// --- 2a) Was wird ausgegeben? ---
/*
Erwartung:
1. Reihenfolge der Ausgaben:
   - "Nach Promise-Konstruktion"
   - "Fehler abgefangen: Boom im Executor!"
2. Warum führt der throw nicht zum Absturz?
   Der Promise-Executor ist in einen impliziten try-catch Block eingepackt.
3. Was passiert mit dem Error-Objekt intern?
   Es wird automatisch an die reject-Funktion übergeben.
*/

const p2a = new Promise<string>((_resolve, _reject) => {
    throw new Error("Boom im Executor!");
});

p2a.then(
    (value) => console.log("Erfolg:", value),
    (reason) =>
        console.log("Fehler abgefangen (2a):", (reason as Error).message),
);

console.log("Nach Promise-Konstruktion");

// --- 2b) Throw vs. reject ---
/*
Antwort: Im Executor-Kontext (synchron) sind sie funktionell äquivalent.
'throw' ist jedoch "automatischer", während 'reject()' expliziter ist.
Wichtig: 'throw' funktioniert nur im synchronen Teil des Executors automatisch.
*/

const pA = new Promise<string>((_resolve, _reject) => {
    throw new Error("Fehler A");
});

const pB = new Promise<string>((_resolve, reject) => {
    reject(new Error("Fehler B"));
});

pA.catch((err: unknown) => console.log("pA catch:", (err as Error).message));
pB.catch((err: unknown) => console.log("pB catch:", (err as Error).message));

// ============================================================================
// Aufgabe 3: Throw nach resolve
// ============================================================================

// --- 3a) Was passiert hier? ---
/*
1. Wird das Promise fulfilled oder rejected? Fulfilled.
2. Was passiert mit dem throw? Er wird ignoriert (bzw. die Exception wird verschluckt).
3. Wird die Error-Nachricht irgendwo sichtbar? Nein, da das Promise bereits "settled" ist.
*/

const p3a = new Promise<string>((resolve) => {
    resolve("fertig");
    throw new Error("Zu spät!");
});

p3a.then((v) => console.log("p3a:", v)).catch((e: unknown) =>
    console.log("p3a error:", (e as Error).message)
);

// --- 3b) Die umgekehrte Reihenfolge ---
/*
Antwort: Ein Promise kann seinen Status nur EINMAL ändern (von pending zu fulfilled oder rejected).
Danach ist es "settled" und alle weiteren Aufrufe von resolve/reject werden ignoriert.
*/

// ============================================================================
// Aufgabe 4: Synchroner Code im Executor
// ============================================================================

// --- 4a) Exception in einer Hilfsfunktion ---
/*
Antwort: Ja, der Fehler wird abgefangen. Der Executor umschließt den gesamten synchronen Codeaufruf.
Wenn loadConfig() wirft, befindet sich dieser Aufruf im Stack des Executors.
*/

function loadConfig(): string {
    throw new Error("Konfiguration nicht gefunden");
}

const p4a = new Promise<string>((resolve, _reject) => {
    const config = loadConfig();
    resolve(config);
});

p4a.catch((err) => {
    console.log("Gefangen in .catch() (4a):", (err as Error).message);
});

// --- 4b) Manuell vs. automatisch ---

function loadConfig2(): string {
    throw new Error("Konfiguration nicht gefunden");
}

// Version 1: Automatisch (throw)
const p4b_v1 = new Promise<string>((resolve, _reject) => {
    const config = loadConfig2();
    resolve(config);
});
p4b_v1.catch((e: unknown) =>
    console.log("p4b_v1 (Auto-Catch):", (e as Error).message)
);

// Version 2: Manuell (try/catch + reject)
const p4b_v2 = new Promise<string>((resolve, reject) => {
    try {
        const config = loadConfig2();
        resolve(config);
    } catch (e) {
        reject(e);
    }
});
p4b_v2.catch((e: unknown) =>
    console.log("p4b_v2 (Manual-Catch):", (e as Error).message)
);

/*
Frage: Was ist der Vorteil der manuellen Variante?
Antwort: Man kann den Fehler vor dem rejecten modifizieren, loggen oder
spezifische Error-Typen anders behandeln. Es ist expliziter.
*/

// ============================================================================
// Aufgabe 5: Async-Funktionen und Exceptions
// ============================================================================

// --- 5a) Throw in einer async-Funktion ---

// Nicht-async-Variante:
function _fetchDataManual(): Promise<string> {
    return new Promise((_resolve, reject) => {
        try {
            throw new Error("Netzwerkfehler");
        } catch (e) {
            reject(e);
        }
    });
}

// ODER kürzer (da throw im Executor automatisch rejectet):
function _fetchDataManualShort(): Promise<string> {
    return new Promise((_resolve, _reject) => {
        throw new Error("Netzwerkfehler");
    });
}

// --- 5b) Throw nach return in async ---
/*
Antwort: Da 'return' die Funktion beendet, wird der Code danach nie ausgeführt.
Es ist "Dead Code". TypeScript erkennt das oft als Fehler/Warnung.
*/

// ============================================================================
// Aufgabe 6: Zusammengesetzte Aufgabe — withRetry
// ============================================================================

async function withRetry<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
): Promise<T> {
    globalThis.__retryCount = 0;
    let lastError: unknown;

    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            globalThis.__retryCount++;
            if (globalThis.__retryCount >= maxRetries) {
                break;
            }
        }
    }
    throw lastError;
}

// Test:
async function testWithRetry() {
    let attempts = 0;

    try {
        const result = await withRetry(() => {
            attempts++;
            if (attempts < 3) {
                throw new Error(`Versuch ${attempts} fehlgeschlagen`);
            }
            return Promise.resolve("Erfolg!");
        }, 5);

        console.log("withRetry Result:", result); // Erwartet: "Erfolg!"
        console.log("Retry Count:", globalThis.__retryCount); // Erwartet: 2 (da 3. Versuch klappt)
    } catch (e) {
        console.error("withRetry failed finally:", e);
    }
}

testWithRetry();

// ============================================================================
// Zusatzfrage (Bonus)
// ============================================================================
/*
Antwort:
Der Fehler landet NICHT in .catch(), weil der Executor zum Zeitpunkt des Timeouts
bereits beendet ist (der Callstack ist leer). Das Promise wurde bereits mit
resolve("sofort erledigt") fulfilled.

Ein throw in einem setTimeout ist ein asynchroner Fehler, der außerhalb des
Try-Catch-Kontexts des Promise-Executors geworfen wird. Er führt zu einem
"Uncaught Error" und bringt die Node.js Applikation ggf. zum Absturz.

Um asynchrone Fehler abzufangen, MUSS innerhalb des asynchronen Callbacks
reject() aufgerufen werden.
*/
