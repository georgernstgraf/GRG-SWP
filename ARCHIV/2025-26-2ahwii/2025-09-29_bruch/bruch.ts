export class Bruch {
  // Attribute:
  ganz: number;
  zähler: number;
  nenner: number;

  // Constructor
  constructor(ganz: number, zähler: number, nenner: number) {
    this.ganz = ganz;
    this.zähler = zähler;
    this.nenner = nenner;
    this.kürze();
  }

  addiere(other: Bruch) {
    const neuGanz = this.ganz + other.ganz;
    const neuNenner = this.nenner * other.nenner;
    const neuZähler = this.zähler * other.nenner + other.zähler * this.nenner;
    return new Bruch(neuGanz, neuZähler, neuNenner);
  }
  kürze() {
    // ganzTeil verbessern ("1 15/8")
    const ganzTeilVergrößernUm = Math.floor(this.zähler / this.nenner);
    this.ganz += ganzTeilVergrößernUm;
    this.zähler -= ganzTeilVergrößernUm * this.nenner;
    // Bruch kürzen
    const ggt = Bruch.ggt(this.zähler, this.nenner);
    this.zähler /= ggt;
    this.nenner /= ggt;
  }
  static ggt(a: number, b: number): number {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  toString(): string {
    if (this.zähler === 0) return `${this.ganz}`;
    if (this.ganz === 0) return `${this.zähler}/${this.nenner}`;
    return `${this.ganz} ${this.zähler}/${this.nenner}`;
  }
  // factory method
  static fromString(input: string): Bruch {
    const parts = input.split(" ");
    let ganz = 0;
    let zähler = 0;
    let nenner = 1;
    if (parts.length === 2) {
      ganz = parseInt(parts[0], 10);
      const bruchParts = parts[1].split("/");
      zähler = parseInt(bruchParts[0], 10);
      nenner = parseInt(bruchParts[1], 10);
    } else if (parts.length === 1) {
      const bruchParts = parts[0].split("/");
      if (bruchParts.length === 2) {
        zähler = parseInt(bruchParts[0], 10);
        nenner = parseInt(bruchParts[1], 10);
      } else {
        ganz = parseInt(parts[0], 10);
      }
    }
    return new Bruch(ganz, zähler, nenner);
  }
}
