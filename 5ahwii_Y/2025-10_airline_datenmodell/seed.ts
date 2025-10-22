import { PrismaClient } from "model";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

for (let i = 0; i < 10; i++) {
    const fake_airport = faker.airline.airport();
    await prisma.airport.create({
        data: {
            name: fake_airport.name,
            iataCode: fake_airport.iataCode,
            city: faker.location.city(),
        },
    });
}
