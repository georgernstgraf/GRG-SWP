import { Sparkonto } from "./konto.ts";
import { Produkt } from "./produkt.ts";

const sparkonto = new Sparkonto(500);
console.log(sparkonto.toString(), "Zins:", sparkonto.jahresZins());

const monitor = new Produkt("Monitor", 25000, 6);
console.log(monitor.toString(), "Versand:", monitor.versandkosten(), "Cent");
