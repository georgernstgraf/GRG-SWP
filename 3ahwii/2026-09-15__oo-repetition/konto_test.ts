import { assertEquals } from "jsr:@std/assert";
import { Konto } from "./konto.ts";

Deno.test("Konto hat Zustand pro Instanz", () => {
  const k1 = new Konto("AT1", 500);
  const k2 = new Konto("AT2", 500);
  k1.einzahlen(100);
  // Zustand lebt pro Instanz: k2 bleibt unberührt
  assertEquals(k1.toString(), "Konto AT1 (600 €)");
  assertEquals(k2.toString(), "Konto AT2 (500 €)");
});

Deno.test("equals vergleicht Zustand (IBAN), nicht Identität", () => {
  const a = new Konto("AT1", 500);
  const b = new Konto("AT1", 500);
  assertEquals(a === b, false);
  assertEquals(a.equals(b), true);
});
