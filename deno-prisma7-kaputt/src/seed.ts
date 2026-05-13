import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const dburl = Deno.env.get("DATABASE_URL");
console.log(dburl);
if (!dburl) Deno.exit(1);

const adapter = new PrismaBetterSqlite3({ url: dburl });

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
console.log("Seeding script executed.");
main().then(() => console.log("Seeding completed."))
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Seeding finished.");
  });
