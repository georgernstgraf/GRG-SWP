import { Hono } from "hono";
import { prisma } from "./lib/questionservice.ts";
const app = new Hono();

const myquestion = await prisma.question.findFirst({
    where: {
        question:
            "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
    },
    select: {
        question: true,
        difficulty: { select: { level: true } },
        category: { select: { name: true } },
        type: { select: { type: true } },
        correct_answer: { select: { answer: true } },
        incorrect_answers: { select: { answer: true } },
    },
});

app.get("/", (c) => c.text("Hono!"));
app.get("/json", (c) => c.json({ message: "Hello, JSON!" }));
app.get("/question", (c) => {
    return c.json(myquestion);
});
Deno.serve({ port: 5000 }, app.fetch);
