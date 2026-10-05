import { assertEquals } from "jsr:@std/assert";
import { akzeptiereVersendbar, Produkt } from "./produkt.ts";

Deno.test("compareTo vergleicht nach preisCent", () => {
  const billig = new Produkt("USB-Kabel", 500, 0.2);
  const teuer = new Produkt("Monitor", 25000, 6);
  assertEquals(billig.compareTo(teuer) < 0, true);
  assertEquals(teuer.compareTo(billig) > 0, true);
  assertEquals(
    new Produkt("A", 500, 1).compareTo(new Produkt("B", 500, 2)),
    0,
  );
});

Deno.test("versandkosten: 400 Cent Grundgebühr + 200 Cent je kg", () => {
  assertEquals(new Produkt("USB-Kabel", 500, 0).versandkosten(), 400);
  assertEquals(new Produkt("Monitor", 25000, 6).versandkosten(), 1600);
});

Deno.test("structural typing: Objekt-Literal erfüllt Versendbar", () => {
  // Kein implements, keine class — die Form genügt.
  assertEquals(akzeptiereVersendbar({ versandkosten: () => 0 }), 0);
});

Deno.test("Produkt wird nie negativ geboren (Invarianten bleiben)", () => {
  try {
    new Produkt("X", -1, 1);
    throw new Error("hätte werfen müssen");
  } catch (e) {
    assertEquals((e as Error).message.includes("negativ"), true);
  }
});
