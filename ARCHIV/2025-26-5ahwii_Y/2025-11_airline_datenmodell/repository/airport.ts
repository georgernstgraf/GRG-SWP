import { Prisma } from "../prisma/client/browser.ts";
import { prisma } from "./db.ts";
export async function count() {
    return await prisma.airport.count();
}
export async function create(data: Prisma.AirportCreateArgs["data"]) {
    return await prisma.airport.create({ data });
}
export async function getAll() {
    return await prisma.airport.findMany();
}
