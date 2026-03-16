import { Context, Hono } from "hono";
import { serveStatic } from "hono/deno";
import { Database } from "sqlite";

const app = new Hono();
const db = new Database("lieblingsessen.db");
const isDev = true;

app.get("/:path{.+\\.ts$}", async (c) => {
     const filePath = `./src/${c.req.param("path")}`;
    // prepend "src/"
    console.log(`Transpiling ${filePath}`);

    try {
        const result = await Deno.bundle({
            entrypoints: [filePath],
            platform: "browser",
            minify: !isDev,
            write: false, // Don't write to disk, keep in memory
        });
        console.log(result);
        if (!result.success) throw new Error("Bundling failed");

        // Extract the JS content from the result
        const js = result.outputFiles?.find((f) => f.path.endsWith(".js"))
            ?.text;

        return c.body(js, 200, {
            "Content-Type": "application/javascript; charset=utf-8",
            "Cache-Control": isDev ? "no-cache" : "public, max-age=31536000",
        });
    } catch (err) {
        return c.text(`Transpilation Error: ${err.message}`, 500);
    }
});

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
