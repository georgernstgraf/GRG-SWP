import { assertEquals, assertThrows } from "jsr:@std/assert";
import { groesstes, Sparkonto, Verzinsbar } from "./konto.ts";

Deno.test("compareTo vergleicht nach Kontostand", () => {
  const klein = new Sparkonto(100);
  const gross = new Sparkonto(900);
  assertEquals(klein.compareTo(gross) < 0, true);
  assertEquals(gross.compareTo(klein) > 0, true);
  assertEquals(new Sparkonto(100).compareTo(new Sparkonto(100)), 0);
});

Deno.test("groesstes kennt nur den Vertrag Comparable", () => {
  const bestes = groesstes([
    new Sparkonto(100),
    new Sparkonto(900),
    new Sparkonto(400),
  ]);
  assertEquals(bestes?.saldo, 900);
  assertEquals(groesstes([]), undefined);
});

Deno.test("structural typing: Form genügt, implements ist Dokumentation", () => {
  // Kein implements, keine class — trotzdem ein Verzinsbar, weil die Form stimmt.
  const ohneKlasse: Verzinsbar = { jahresZins: () => 0.01 };
  assertEquals(ohneKlasse.jahresZins(), 0.01);
});

Deno.test("Sparkonto bleibt invariant-gesichert (UE 2 lebt weiter)", () => {
  assertThrows(() => new Sparkonto(-1), Error, "negativ");
});
