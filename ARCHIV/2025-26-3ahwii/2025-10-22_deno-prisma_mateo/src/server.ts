import { PrismaClient } from "../prisma/client/client.ts";
const prisma = new PrismaClient();

async function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const { pathname } = url;
  const method = req.method.toUpperCase();

  try {
    if (method === "GET" && pathname === "/health") {
      return new Response("OK", { status: 200 });
    }

    if (method === "GET" && pathname === "/users") {
      await prisma.user.findMany();
      return new Response("Users fetched successfully", { status: 200 });
    }

    if (method === "POST" && pathname === "/users") {
      const body = await req.json().catch(() => ({}));
      const email = typeof body.email === "string" ? body.email.trim() : "";
      const name = typeof body.name === "string" ? body.name : null;
      if (!email) return new Response("email required", { status: 400 });

      await prisma.user.create({ data: { email, name } });
      return new Response("User created successfully", { status: 201 });
    }

    return new Response("Not Found", { status: 404 });
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

Deno.serve({ port: 8000 }, handleRequest);
console.log("HTTP server running on http://localhost:8000");
