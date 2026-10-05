// Unterrichts-Domäne für die HÜ 1: Klasse/Instanz/Zustand.
// Dein Job: equals() und fuettern() ergänzen, bis tier_test.ts grün ist.
export class Tier {
  readonly name: string;
  private gewicht: number;

  constructor(name: string, gewicht: number) {
    this.name = name;
    this.gewicht = gewicht;
  }

  // TODO HÜ: vergleicht Zustand (Name + Gewicht), nicht Identität.
  equals(other: Tier): boolean {
    return this.name === other.name && this.gewicht === other.gewicht;
  }

  // TODO HÜ: erhöht das Gewicht um kg.
  fuettern(kg: number): void {
    this.gewicht += kg;
  }

  toString(): string {
    return `${this.name} (${this.gewicht} kg)`;
  }
}
