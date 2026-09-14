export class Konto {
  private kontostand: number;
  readonly iban: string;

  constructor(iban: string, startBetrag: number) {
    this.iban = iban;
    this.kontostand = startBetrag;
  }

  einzahlen(betrag: number): void {
    this.kontostand += betrag;
  }

  equals(other: Konto): boolean {
    return this.iban === other.iban;
  }

  toString(): string {
    return `Konto ${this.iban} (${this.kontostand} €)`;
  }
}
