import { assertEquals } from "@std/assert";
import { Bruch } from "./bruch.ts";

Deno.test(function bruchTest() {
  const bruch1 = Bruch.fromString("1/2");
  const bruch2 = Bruch.fromString("1/3");
  assertEquals(bruch1.addiere(bruch2).toString(), "5/6");
});
