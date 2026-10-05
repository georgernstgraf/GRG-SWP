import { Konto } from "./konto.ts";

const konto = new Konto("AT61 1900 0001 2345 6789", 500);
konto.einzahlen(200);
console.log(konto.toString());
