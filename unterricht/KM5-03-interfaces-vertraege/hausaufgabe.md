# Aufgabe KM5-03 — Interfaces als Vertrag

Name: _____________   Abgabe: _____________

**Lektüre:** [TypeScript Handbook: Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
· [Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html).

---

## 1. Vorhersagen (erst hinschreiben, dann prüfen)

**a)** Eine Klasse schreibt `implements Verzinsbar`, vergisst aber
`jahresZins()`. Kompiliert das — und wo meckert TypeScript?

**b)** Ein Objekt mit `jahresZins`, aber ohne `implements`, wird einer Variablen
vom Typ `Verzinsbar` zugewiesen. Erlaubt oder nicht — und warum?

---

## 2. Umsetzung

1. Definiere einen eigenen Vertrag mit mindestens einer Methode (z. B.
   `Versendbar` mit `versende(an: string): void`) und einer
   `readonly`-Eigenschaft.
2. Zwei **verschiedene** Klassen setzen den Vertrag unterschiedlich um.
3. Schreibe eine Funktion, die nur den Vertragstyp als Parameter kennt, und
   rufe sie mit beiden Klassen auf.

## 3. Tests (rot → grün)

- beide Klassen erfüllen den Vertrag (Funktion akzeptiert beide)
- ein Objekt mit passender Form ohne `implements` wird ebenfalls akzeptiert
  (structural typing)
