import { PrismaClient } from "./prisma/client/client.ts";
const prisma = new PrismaClient();

const users = ["Ben", "Georgi", "Marcel", "Dejan", "Moritz"];

export async function seed() {
    for (const user of users) {
        await prisma.user.create({
            data: {
                name: user,
            },
        });
    }
}

if (import.meta.main) {
    await seed();
    console.log("Seeding finished.");
}
