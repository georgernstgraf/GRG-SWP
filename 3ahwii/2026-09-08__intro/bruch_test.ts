import { assertEquals, assertThrows } from "@std/assert";
import { Bruch } from "./bruch.ts";

// === Sofort-Tests: nach dem Live-Coding grün ===

Deno.test("1/2 + 1/3 = 5/6", () => {
  assertEquals(new Bruch(1, 2).addiere(new Bruch(1, 3)).toString(), "5/6");
});

Deno.test("toString: einfacher Bruch", () => {
  assertEquals(new Bruch(1, 2).toString(), "1/2");
});

// === HÜ-Tests: rot, bis die Hausübung erledigt ist ===

Deno.test("HÜ: Brüche werden gekürzt (3/6 -> 1/2)", () => {
  assertEquals(new Bruch(3, 6).toString(), "1/2");
});

Deno.test("HÜ: Ergebnis wird gekürzt (2/4 + 1/6 = 2/3)", () => {
  assertEquals(new Bruch(2, 4).addiere(new Bruch(1, 6)).toString(), "2/3");
});

Deno.test("HÜ: gemischte Form (25/8 -> 3 1/8)", () => {
  assertEquals(new Bruch(25, 8).toString(), "3 1/8");
});

Deno.test("HÜ: gemischte Form, ganzzahlig (8/2 -> 4)", () => {
  assertEquals(new Bruch(8, 2).toString(), "4");
});

Deno.test("HÜ: Nenner 0 wird abgelehnt", () => {
  assertThrows(() => new Bruch(1, 0));
});
