import { PrismaClient } from "../prisma/client/client.ts";
export const prisma = new PrismaClient();

export async function disconnect() {
    await prisma.$disconnect();
}
