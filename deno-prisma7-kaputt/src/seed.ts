import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaLibSql } from "@prisma/adapter-libsql";
// import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const dburl = process.env.DATABASE_URL;
console.log(dburl);
if (!dburl) {
    process.exit(1);
}

// const client = createClient({ url: dburl });

const adapter = new PrismaLibSql({ url: dburl });

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