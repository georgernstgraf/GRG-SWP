import { faker } from "@faker-js/faker";
import * as passenger from "./repository/passenger.ts";
import * as plane from "./repository/plane.ts";
import * as airport from "./repository/airport.ts";
import * as flight from "./repository/flight.ts";
import { disconnect } from "./repository/db.ts";
const ensurePassengers = 20000;
const ensureAirports = 100;
const ensurePlanes = 250;
const ensureFlights = 5000;

console.log("🌱 Starting seed...");

// ensure passengers (no deps)
console.log(`Ensuring ${ensurePassengers} passengers...`);
const passengers_to_create = ensurePassengers - await passenger.count();
let passengers_created = 0;
while (passengers_created < passengers_to_create) {
    try {
        await passenger.create({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
        });
        passengers_created++;
    } catch (e) {
        console.error(`Error creating passenger:`, (e as Error).message);
    }
}

// ensure planes (no deps)
console.log(`Ensuring ${ensurePlanes} planes...`);
const planes_to_create = ensurePlanes - await plane.count();
let planes_created = 0;
while (planes_created < planes_to_create) {
    try {
        await plane.create({
            model: faker.airline.airplane().name,
            capacity: faker.number.int({ min: 10, max: 850 }),
        });
        planes_created++;
    } catch (e) {
        console.error(`Error creating plane:`, (e as Error).message);
    }
}

// ensure airports (no deps)
console.log(`Ensuring ${ensureAirports} airports...`);
const airports_to_create = ensureAirports - await airport.count();
let airports_created = 0;
while (airports_created < airports_to_create) {
    const fake_airport = faker.airline.airport();
    try {
        await airport.create({
            name: fake_airport.name,
            iataCode: fake_airport.iataCode,
            city: faker.location.city(),
        });
        airports_created++;
    } catch (e) {
        console.error(`Error creating airport:`, (e as Error).message);
    }
}

// ensure flights (depends on airport, plane)
console.log(`Ensuring ${ensureFlights} flights...`);
const flights_to_create = ensureFlights - await flight.count();

// Fetch available airports and planes (once!)
const airports = await airport.getAll();
const planes = await plane.getAll();

if (airports.length < 2) {
    console.error("❌ Need at least 2 airports to create flights!");
    Deno.exit(1);
}
if (planes.length === 0) {
    console.error("❌ Need at least 1 plane to create flights!");
    Deno.exit(1);
}

let flights_created = 0;
while (flights_created < flights_to_create) {
    const departure = faker.date.soon({ days: 30 });
    const arrival = new Date(departure.getTime() + faker.number.int({ min: 1, max: 12 }) * 3600000);

    const origin = airports[faker.number.int({ min: 0, max: airports.length - 1 })];
    let destination = airports[faker.number.int({ min: 0, max: airports.length - 1 })];
    while (destination.id === origin.id && airports.length > 1) {
        destination = airports[faker.number.int({ min: 0, max: airports.length - 1 })];
    }
    const plane = planes[faker.number.int({ min: 0, max: planes.length - 1 })];

    try {
        await flight.create({
            flightNumber: faker.airline.flightNumber(),
            departureTime: departure,
            arrivalTime: arrival,
            originId: origin.id,
            destinationId: destination.id,
            planeId: plane.id,
        });
        flights_created++;
    } catch (e) {
        console.error(`Error creating flight:`, (e as Error).message);
    }
}

console.log("✅ Seed complete!");
await disconnect();
