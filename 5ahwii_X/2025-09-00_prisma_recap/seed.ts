import { PrismaClient } from "./prisma/client/client.ts";
import { difficulties, categories } from "./prisma/seeddata.ts";
// Wir instanziieren den Client genau wie in der Hauptanwendung
const prisma = new PrismaClient();

async function seed() {
    console.log(`Seeding...db url: ${Deno.env.get("DATABASE_URL")}`);

    // Difficulty 1: einfache Liste
    const given_difficulties = new Set(difficulties);
    const db_difficulties = new Set((await prisma.difficulty.findMany()).map(d => d.level));
    console.log("DB Difficulties found: ", db_difficulties);
    console.log("Difficulties found: ", given_difficulties);
    const to_add_difficulties = given_difficulties.difference(db_difficulties);
    console.log("Difficulties to add: ", to_add_difficulties);
    for (const level of to_add_difficulties) {
        await prisma.difficulty.create({ data: { level } });
    }
    const to_delete_difficulties = db_difficulties.difference(given_difficulties);
    console.log("Difficulties to delete: ", to_delete_difficulties);
    for (const level of to_delete_difficulties) {
        await prisma.difficulty.deleteMany({ where: { level } });
    }

    // Difficulty 2: Liste von Objekten
    const given_categories_map = new Map<string, number>(categories.map((c: any) => [c.name, Number.parseInt(c.id)]));
    const db_categories = new Map((await prisma.category.findMany()).map(c => [c.name, c.id]));
    const given_names = new Set(given_categories_map.keys());
    const db_names = new Set(db_categories.keys());
    console.log(`Given Category names: ${given_names.size}`);
    console.log(`DB Category names: ${db_names.size}`);

    const to_add_categories = given_names.difference(db_names);
    console.log("Categories to add: ", to_add_categories.size);
    for (const name of to_add_categories) {
        await prisma.category.upsert({
            where: { name },
            update: { opentdb_id: given_categories_map.get(name) },
            create: { name, opentdb_id: given_categories_map.get(name)! },
        });
    }
    console.log(`Upserted ${to_add_categories.size} categories.`);

    // Optionally delete categories not in the given list
    const to_delete = db_names.difference(given_names);
    console.log(`Categories to delete: ${to_delete.size}`);
    await prisma.category.deleteMany({ where: { name: { in: Array.from(to_delete) } } });
    console.log(`Deleted ${to_delete.size} categories.`);
}

await seed();
console.log("Seeding finished.");
