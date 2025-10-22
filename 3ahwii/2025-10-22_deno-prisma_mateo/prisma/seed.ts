import { PrismaClient } from "../prisma/client/client.ts";
import { fakerDE_AT } from "@faker-js/faker";
// const prisma = new PrismaClient({
//    log: ["query", "info", "warn", "error"],
// });
const prisma = new PrismaClient();

const target_user_count = 10 ** 6;

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
      const existing_user_count = await prisma.user.count();
      const users_missing = target_user_count - existing_user_count;
      for (let i = 0; i < users_missing; i++) {
         const fullname = fakerDE_AT.person.fullName();
         const email = fakerDE_AT.internet.email();
         try {
            await prisma.user.create({
               data: {
                  fullname,
                  email,
               },
            });
         } catch (e) {
            console.error(
               "Fehler beim Erstellen eines Benutzers",
               (e as Error).message,
            );
            console.error(`Email: ${email}, Fullname: ${fullname} `);
         }
      }
      console.log(`seed: ${users_missing} Benutzer hinzugefügt.`);
   } catch (e) {
      console.error("Fehler beim Seeden", e);
   }
}

await main();

await prisma.$disconnect();
