// ============================================================================
// Übungsangabe: Promises & Exceptions in TypeScript
// ============================================================================
//
// Lernziele:
// - Verständnis der Promise-Executor-Funktion und deren Fehlerbehandlung
// - Exceptions im Executor-Kontext verstehen (vor resolve/reject)
// - Korrekte Typisierung von globalThis in TypeScript
// - Zusammenspiel von throw, reject, try/catch und .catch()
//
// Voraussetzungen:
// - TypeScript (strict-Modus empfohlen)
// - Node.js zum Ausführen der Beispiele
//
// ============================================================================

// ============================================================================
// Aufgabe 1: Typisierung von globalThis in Node.js
// ============================================================================
//
// globalThis ist der einheitliche Zugriff auf das globale Objekt — sowohl
// im Browser (window) als auch in Node.js (global). In Node.js stehen
// typische Browser-Eigenschaften wie window, document, localStorage NICHT
// zur Verfügung. Trotzdem kann und sollte man eigene globale Eigenschaften
// in TypeScript korrekt typisieren.
// ============================================================================

// --- 1a) Unterschiede zwischen Browser und Node ---
//
// Erkläre kurz: Welche der folgenden Eigenschaften existieren auf globalThis
// im Browser, welche in Node.js, und welche in beiden?
//
// - window        → ?
// - document      → ?
// - process       → ?
// - console       → ?
// - Buffer        → ?
// - setTimeout    → ?
// - fetch         → ?
//
// Schreibe deine Antworten hier als Kommentar:

// window:       
// document:     
// process:      
// console:      
// Buffer:       
// setTimeout:   
// fetch:        

// --- 1b) Eigene Eigenschaft typisiert hinzufügen ---
//
// Erweitere globalThis um eine typisierte Eigenschaft appConfig.
// Schreibe die nötige TypeScript-Deklaration (Declaration Merging auf dem
// globalThis-Interface), sodass globalThis.appConfig korrekt typisiert ist.
//
// Hinweis: In Node.js gibt es kein window — warum funktioniert globalThis
// trotzdem universell?

interface AppConfig {
  apiUrl: string;
  maxRetries: number;
  debug: boolean;
}

// TODO: Declaration Merging — erweitere das globalThis-Interface

// TODO: Weise globalThis.appConfig einen Wert zu

// --- 1c) Typ-Sicherheit prüfen ---
//
// Warum erzeugt folgender Code einen Typfehler und wie behebt man ihn?
//
// declare global {
//   var appConfig: AppConfig;
// }
//
// globalThis.appConfig = { apiUrl: "https://api.example.com" }; // Fehler!
//
// Was fehlt? Korrigiere den Code hier:

// TODO: Korrigierte Version

// --- 1d) Vorsicht vor any ---
//
// Warum ist folgende "Lösung" problematisch?
//
// (globalThis as any).myConfig = { url: "test" };
//
// Welche Vorteile bietet die korrekte Typisierung über Interface-Merging
// gegenüber any?
//
// Antwort:

// ============================================================================
// Aufgabe 2: Exception im Promise-Executor
// ============================================================================

// --- 2a) Was wird ausgegeben? ---
//
// Notiere VOR dem Ausführen, was du erwartest, und erkläre dein Ergebnis.
//
// Erwartung:
// 1. Reihenfolge der Ausgaben:
// 2. Warum führt der throw nicht zum Absturz?
// 3. Was passiert mit dem Error-Objekt intern?

const p2a = new Promise<string>((resolve, reject) => {
  throw new Error("Boom im Executor!");
});

p2a.then(
  (value) => console.log("Erfolg:", value),
  (reason) => console.log("Fehler abgefangen:", (reason as Error).message)
);

console.log("Nach Promise-Konstruktion");

// --- 2b) Throw vs. reject ---
//
// Vergleiche die folgenden zwei Varianten. Sind sie äquivalent? Begründe.
// Teste beide mit .catch().

// Variante A
const pA = new Promise<string>((resolve, reject) => {
  throw new Error("Fehler A");
});

// Variante B
const pB = new Promise<string>((resolve, reject) => {
  reject(new Error("Fehler B"));
});

// TODO: Teste beide und notiere ob es Unterschiede gibt
// Antwort:

// ============================================================================
// Aufgabe 3: Throw nach resolve
// ============================================================================

// --- 3a) Was passiert hier? ---
//
// 1. Wird das Promise fulfilled oder rejected?
// 2. Was passiert mit dem throw?
// 3. Wird die Error-Nachricht irgendwo sichtbar?

const p3a = new Promise<string>((resolve) => {
  resolve("fertig");
  throw new Error("Zu spät!");
});

// TODO: Teste und notiere deine Beobachtung

// --- 3b) Die umgekehrte Reihenfolge ---
//
// Warum hat resolve nach reject keine Wirkung mehr? Welche Regel gilt hier?

const p3b = new Promise<string>((resolve, reject) => {
  reject(new Error("Abgelehnt"));
  resolve("doch noch fertig"); // Wird das ignoriert?
});

// Antwort:

// ============================================================================
// Aufgabe 4: Synchroner Code im Executor
// ============================================================================

// --- 4a) Exception in einer Hilfsfunktion ---
//
// Wird der Fehler in .catch() abgefangen? Erkläre, warum der
// Promise-Konstruktor hier wie ein try/catch wirkt.

function loadConfig(): string {
  throw new Error("Konfiguration nicht gefunden");
}

const p4a = new Promise<string>((resolve, reject) => {
  const config = loadConfig();
  resolve(config);
});

p4a.catch((err) => {
  console.log("Gefangen in .catch():", (err as Error).message);
});

// Antwort:

// --- 4b) Manuell vs. automatisch ---
//
// Schreibe zwei Versionen derselben Logik — einmal mit automatischer
// Exception-Weiterleitung (throw) und einmal mit manueller try/catch + reject.

function loadConfig2(): string {
  throw new Error("Konfiguration nicht gefunden");
}

// Version 1: Automatisch (throw)
const p4b_v1 = new Promise<string>((resolve, reject) => {
  // TODO: Rufe loadConfig2() auf (wirft Exception)
});

// Version 2: Manuell (try/catch + reject)
const p4b_v2 = new Promise<string>((resolve, reject) => {
  // TODO: try/catch um loadConfig2(), bei Fehler reject()
});

// Frage: Was ist der Vorteil der manuellen Variante?
// Antwort:

// ============================================================================
// Aufgabe 5: Async-Funktionen und Exceptions
// ============================================================================

// --- 5a) Throw in einer async-Funktion ---
//
// Erkläre den Zusammenhang: Ein throw in einer async-Funktion entspricht
// einem reject() im zurückgegebenen Promise.
// Zeige dies durch Umschreiben in eine nicht-async-Variante.

async function fetchData(): Promise<string> {
  throw new Error("Netzwerkfehler");
}

fetchData()
  .then((data) => console.log("Daten:", data))
  .catch((err) => console.log("Fehler:", (err as Error).message));

// TODO: Schreibe fetchData als nicht-async-Variante (mit new Promise)

// --- 5b) Throw nach return in async ---
//
// Warum ist der Throw unreachable? Was passiert zur Laufzeit?

async function confusing(): Promise<string> {
  return "Ergebnis";
  throw new Error("Unreachable");
}

// Antwort:

// ============================================================================
// Aufgabe 6: Zusammengesetzte Aufgabe — withRetry
// ============================================================================
//
// Schreibe eine typsichere Funktion withRetry, die:
// 1. Eine asynchrone Funktion fn: () => Promise<T> als Parameter nimmt
// 2. Bei Exception automatisch bis zu maxRetries-mal erneut versucht
// 3. Die Anzahl der Versuche auf globalThis.__retryCount speichert
//    (korrekt typisiert!)
// 4. Nach maxRetries erfolglosen Versuchen die letzte Exception weiterwirft
// 5. Sowohl throw-Exceptions als auch reject-Fälle behandelt

// TODO: Erweitere globalThis um __retryCount
// declare global { ... }

// TODO: Implementiere withRetry
function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  // TODO: Implementierung
  throw new Error("Nicht implementiert");
}

// Test:
async function testWithRetry() {
  let attempts = 0;

  const result = await withRetry(async () => {
    attempts++;
    if (attempts < 3) {
      throw new Error(`Versuch ${attempts} fehlgeschlagen`);
    }
    return "Erfolg!";
  }, 5);

  console.log(result); // Erwartet: "Erfolg!"
  console.log(globalThis.__retryCount); // Erwartet: 3
}

// ============================================================================
// Zusatzfrage (Bonus)
// ============================================================================
//
// Was passiert in folgendem Code und warum?
//
// const p = new Promise<void>((resolve, reject) => {
//   setTimeout(() => {
//     throw new Error("Asynchroner Throw!");
//   }, 100);
//   resolve("sofort erledigt" as any);
// });
//
// Warum landet dieser Fehler NICHT in .catch()? Wie unterscheidet sich
// ein throw in setTimeout von einem throw direkt im Executor?
//
// Antwort:
