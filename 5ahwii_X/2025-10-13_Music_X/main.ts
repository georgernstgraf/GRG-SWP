import { fakerDE_AT } from "@faker-js/faker";
import prisma from "./prisma/client/client.ts";

function main() {
  prisma;
  const musik_faker = fakerDE_AT.music;
  console.log("Random Music Genre:", musik_faker.genre());
  console.log("Random Album:", musik_faker.album());
  console.log("Random Song Name:", musik_faker.songName());
  console.log("Random Artist:", musik_faker.artist());
}
// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}
