import { PrismaClient } from "../prisma/client/client.ts";
import { fakerDE_AT } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
    try {
        const users_without_fullname = await prisma.user.findMany({
            where: {
                fullname: null,
            },
        });
        for (const user of users_without_fullname) {
            const new_fullname = fakerDE_AT.person.fullName();
            await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    fullname: new_fullname,
                },
            });
            console.log(
                `Benutzer-ID ${user.id} aktualisiert: fullname = ${new_fullname}`,
            );
        }
    } catch (e) {
        console.error("Fehler beim Seeden", e);
    }
}

await main();

await prisma.$disconnect();
