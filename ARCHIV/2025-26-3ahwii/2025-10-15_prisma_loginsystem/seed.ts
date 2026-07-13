import { PrismaClient } from "./prisma/client/client.ts";
const prisma = new PrismaClient();

const seed_users = [
    { name: "Ben", email: "ben@example.com", password: "abc123" },
    { name: "Georgi", email: "georgi@example.com", password: "abc123" },
    { name: "Marcel", email: "marcel@example.com", password: "abc123" },
];
const seed_posts = [{
    title: "hello world",
    content: "guten tag",
    username: "Marcel",
}, {
    title: "hello mars",
    content: "its cold",
    username: "Georgi",
}, {
    title: "Guten Morgen",
    content: "hab hunger",
    username: "Georgi",
}, {
    title: "Notebook",
    content: "dell hat blöde stecker",
    username: "Ben",
}, {
    title: "grüne gieskanne",
    content: "neben mir",
    username: "Georgi",
}];

export async function seed() {
    for (const user of seed_users) {
        await prisma.user.create({
            data: user,
        });
    }
    for (const post of seed_posts) {
        await prisma.post.create({
            data: {
                title: post.title,
                content: post.content,
                user: {
                    connect: {
                        name: post.username,
                    },
                },
            },
        });
    }
}

if (import.meta.main) {
    await seed();
    console.log("Seeding finished.");
}
