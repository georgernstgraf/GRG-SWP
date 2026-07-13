import { Hono } from "hono";
import { PrismaClient } from "generated_prisma";
export const prisma = new PrismaClient(/* { log: ['query'] } */);

const app = new Hono();

app.get("/", async (c) => {
    const users = await prisma.user.findMany({
        include: { posts: true },
    });
    return c.json(users);
});

// now just serve
Deno.serve({
    port: 8000,
    hostname: "localhost",
}, app.fetch);
