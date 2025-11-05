import { PrismaClient } from "model";
import { faker, pl } from "@faker-js/faker";
const prisma = new PrismaClient();

const ensurePassengers = 20000;
const ensureAirports = 100;
const ensurePlanes = 250;

// ensure passengers (no deps)
while (await prisma.passenger.count() < ensurePassengers) {
    try {
        await prisma.passenger.create({
            data: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
            },
        });
    } catch (e) {
        console.error(`Error creating passenger`, (e as Error).message);
    }
}
// ensure planes (no deps)
const planes_to_create = ensurePlanes - await prisma.plane.count();
for (let i = 0; i < planes_to_create;) {
    await prisma.plane.create({
        data: {
            model: faker.airline.airplane().name,
            capacity: faker.number.int({ min: 10, max: 850 }),
        },
    });
}

// ensure 20 airports (no deps)
// for (let i = 0; i < 10; i++) {
//     const fake_airport = faker.airline.airport();
//     await prisma.airport.create({
//         data: {
//             name: fake_airport.name,
//             iataCode: fake_airport.iataCode,
//             city: faker.location.city(),
//         },
//     });
// }

// ensure 20 fligths (depends on airport, plane)
