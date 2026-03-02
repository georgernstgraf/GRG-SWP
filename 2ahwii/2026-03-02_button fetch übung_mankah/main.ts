import { Context, Hono } from "hono";
import { serveStatic } from "hono/deno";
import { Database } from "sqlite";

const app = new Hono();
const db = new Database("lieblingsessen.db");

app.use("/*", serveStatic({ root: "./static" }));

app.get("/essen", (c: Context) => {
  const rows = db.prepare(`
    SELECT person.name, essen.essen
    FROM person
    JOIN essen ON person.lieblingsessen = essen.id
  `).all();

  return c.json(rows);
});

Deno.serve(app.fetch);
