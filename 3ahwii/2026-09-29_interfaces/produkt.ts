// HÜ-Domäne UE 3: Interface als Vertrag am Produkt (Shop).
// Dein Job: Produkt implementiert beide Verträge, bis produkt_test.ts grün ist.
export interface Comparable<T> {
  compareTo(other: T): number; // <0: dieses kleiner · 0: gleich · >0: größer
}

export interface Versendbar {
  versandkosten(): number; // in Cent
}

export class Produkt implements Comparable<Produkt>, Versendbar {
  readonly name: string;
  private preisCent: number;
  private gewichtKg: number;

  constructor(name: string, preisCent: number, gewichtKg: number) {
    if (preisCent < 0) {
      throw new Error(`Preis darf nicht negativ sein (war ${preisCent})`);
    }
    if (gewichtKg < 0) {
      throw new Error(`Gewicht darf nicht negativ sein (war ${gewichtKg})`);
    }
    this.name = name;
    this.preisCent = preisCent;
    this.gewichtKg = gewichtKg;
  }

  get preis(): number {
    return this.preisCent;
  }

  // TODO HÜ: Vertrag 1 — Vergleich nach preisCent.
  compareTo(other: Produkt): number {
    return 0;
  }

  // TODO HÜ: Vertrag 2 — 400 Cent Grundgebühr + 200 Cent je kg.
  versandkosten(): number {
    return 0;
  }

  toString(): string {
    return `${this.name} (${
      (this.preisCent / 100).toFixed(2)
    } €, ${this.gewichtKg} kg)`;
  }
}

// Structural typing: Diese Funktion verlangt nur die FORM von Versendbar.
// TODO HÜ (schriftlich, als Kommentar hier): Warum kompiliert der Aufruf
// akzeptiereVersendbar({ versandkosten: () => 0 }) ohne implements und ohne class?
export function akzeptiereVersendbar(v: Versendbar): number {
  return v.versandkosten();
}
