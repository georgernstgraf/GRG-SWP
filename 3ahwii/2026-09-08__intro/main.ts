import { Bruch } from "./bruch.ts";

const a = new Bruch(1, 2);
const b = new Bruch(1, 3);

console.log(`${a} + ${b} = ${a.addiere(b)}`);
