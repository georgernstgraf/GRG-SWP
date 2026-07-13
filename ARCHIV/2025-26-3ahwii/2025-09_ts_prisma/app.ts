// main.ts
import { Hono } from "https://deno.land/x/hono@v3.10.4/mod.ts";
import { PrismaClient } from "./prisma/client/client.ts";
export const prisma = new PrismaClient();
const app = new Hono();

app.get("/", (c) => c.text("Hello Hono + Deno!"));
app.get("/hello/:name", (c) => c.json({ message: `Hi ${c.req.param("name")}` }));
app.get("/db", async (c) => {
    const hellos = await prisma.hello.findMany();
    return c.json(hellos);
});

Deno.serve(app.fetch);
