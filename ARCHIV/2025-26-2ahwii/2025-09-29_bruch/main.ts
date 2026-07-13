import { Bruch } from "./bruch.ts";

const bruch1 = Bruch.fromString("1 1/2");
const bruch2 = Bruch.fromString("2 3/4");
const ergebnis = bruch1.addiere(bruch2);
console.log(
  `${bruch1} + ${bruch2} = ${ergebnis}`,
);
