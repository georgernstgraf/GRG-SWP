import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const dburl = Deno.env.get("DATABASE_URL")!;
console.log(dburl);

if (dburl) {
  // Deno 2+ usually handles 'process' globally, but this ensures
  // the specific key is present for the Prisma engine.
  (globalThis as any).process = {
    env: { ...Deno.env.toObject(), DATABASE_URL: dburl },
  };
}

const libsqlClient = createClient({
  url: dburl,
});

const adapter = new PrismaLibSql(libsqlClient as any);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.user.createMany({
    data: [
      { email: "georg@graf.priv.at", name: "Georg" },
      { email: "alice@example.com", name: "Alice" },
    ],
  });
}
await main();
await prisma.$disconnect();
