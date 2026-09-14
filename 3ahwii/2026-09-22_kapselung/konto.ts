// Unterrichts-Domäne UE 2: Kapselung in drei Schichten.
// Schicht 1: Sichtbarkeiten (private, readonly)
// Schicht 2: kontrollierte Türen (getter, geprüfte Methoden)
// Schicht 3: Fail-Fast (throw an jeder Tür, durch die Zustand entsteht/ändert)
export class Konto {
  private kontostand: number;
  readonly iban: string;

  constructor(iban: string, startBetrag: number) {
    if (startBetrag < 0) {
      throw new Error(
        `Startbetrag darf nicht negativ sein (war ${startBetrag})`,
      );
    }
    this.iban = iban;
    this.kontostand = startBetrag;
  }

  // Lesen ist unproblematisch: getter statt öffentliches Feld.
  get saldo(): number {
    return this.kontostand;
  }

  // Änderung nur über geprüfte Methoden — kein setter für kontostand.
  einzahlen(betrag: number): void {
    if (betrag <= 0) {
      throw new Error(`Betrag muss positiv sein (war ${betrag})`);
    }
    this.kontostand += betrag;
  }

  abheben(betrag: number): void {
    if (betrag <= 0) {
      throw new Error(`Betrag muss positiv sein (war ${betrag})`);
    }
    if (betrag > this.kontostand) {
      throw new Error(
        `Konto ist überzogen (Saldo ${this.kontostand}, angefordert ${betrag})`,
      );
    }
    this.kontostand -= betrag;
  }

  toString(): string {
    return `Konto ${this.iban} (${this.kontostand} €)`;
  }
}
