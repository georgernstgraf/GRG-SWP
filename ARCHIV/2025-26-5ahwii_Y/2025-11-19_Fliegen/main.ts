import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

app.get("/json", (c) => c.json({ message: "Hello, JSON!" }));
// app.get("/question", (c) => {
//     return c.json(myquestion);
// });
Deno.serve({ port: 5000 }, app.fetch);
