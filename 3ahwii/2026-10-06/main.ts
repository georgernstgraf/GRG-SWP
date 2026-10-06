class NeverGleich {
  constructor() {
    // Constructor logic here
  }
  equals(_other: unknown): boolean {
    return false;
  }
}
const a = new NeverGleich();
const b = a;
console.log(a.equals(b)); // Output: false
console.log(a == b); // Output: true
console.log(a === b); // Output: true

class ImmerGleich {
  constructor() {
    // Constructor logic here
  }
  equals(_other: unknown): boolean {
    return true;
  }
}
const c = new ImmerGleich();
const d = new ImmerGleich();
console.log(c.equals(d)); // Output: true
console.log(c == d); // Output: false
console.log(c === d); // Output: false
