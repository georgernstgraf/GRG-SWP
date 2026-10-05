import { assertEquals, assertThrows } from "jsr:@std/assert";
import { Fahrzeug } from "./fahrzeug.ts";

Deno.test("Fahrzeug wird nie mit negativem kmStand geboren", () => {
  assertThrows(
    () => new Fahrzeug("Steyr", -1, 180),
    Error,
    "kmStand",
  );
});

Deno.test("setGeschwindigkeit hält die Invariante 0 <= v <= max", () => {
  const auto = new Fahrzeug("Steyr", 1000, 180);
  auto.setGeschwindigkeit(180); // Grenzfall exakt am Maximum: erlaubt
  assertThrows(
    () => auto.setGeschwindigkeit(181),
    Error,
    "Geschwindigkeit",
  );
  assertThrows(() => auto.setGeschwindigkeit(-5), Error);
});

Deno.test("fahre erhöht kmStand, ohne ihn je zu senken", () => {
  const auto = new Fahrzeug("Steyr", 1000, 180);
  auto.setGeschwindigkeit(100);
  auto.fahre(2);
  assertEquals(auto.kmStand, 1200);
});

Deno.test("neues Fahrzeug steht still: v = 0, kmStand unverändert", () => {
  const auto = new Fahrzeug("Steyr", 1000, 180);
  assertEquals(auto.geschwindigkeit, 0);
  assertEquals(auto.kmStand, 1000);
});
