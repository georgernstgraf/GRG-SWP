export class Bruch {
  private zähler: number;
  private nenner: number;

  constructor(zähler: number, nenner: number) {
    this.zähler = zähler;
    this.nenner = nenner;
  }

  addiere(other: Bruch): Bruch {
    return new Bruch(
      this.zähler * other.nenner + other.zähler * this.nenner,
      this.nenner * other.nenner,
    );
  }

  toString(): string {
    return `${this.zähler}/${this.nenner}`;
  }
}
