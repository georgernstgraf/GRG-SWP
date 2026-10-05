import { assertEquals, assertThrows } from "jsr:@std/assert";
import { Konto } from "./konto.ts";

Deno.test("Konto wird nie negativ geboren (Fail-Fast)", () => {
  assertThrows(
    () => new Konto("AT1", -1),
    Error,
    "negativ",
  );
});

Deno.test("abheben hält die Invariante kontostand >= 0", () => {
  const k = new Konto("AT1", 500);
  k.abheben(500);
  assertEquals(k.saldo, 0);
  assertThrows(
    () => k.abheben(1),
    Error,
    "überzogen",
  );
});

Deno.test("einzahlen lehnt unmögliche Beträge ab", () => {
  const k = new Konto("AT1", 500);
  assertThrows(() => k.einzahlen(0), Error);
  assertThrows(() => k.einzahlen(-5), Error);
});
