// Nur mit diesem Objekt in die Datenbank greifen!!
import { Prisma } from "../prisma/client/browser.ts";
import { prisma } from "./db.ts";

export async function count() {
    return await prisma.passenger.count();
}
export async function create(data: Prisma.PassengerCreateArgs["data"]) {
    return await prisma.passenger.create({ data });
}
