CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS "Airport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "iataCode" TEXT NOT NULL,
    "city" TEXT NOT NULL
);
CREATE UNIQUE INDEX "Airport_iataCode_key" ON "Airport"("iataCode");
CREATE TABLE IF NOT EXISTS "Flight" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flightNumber" TEXT NOT NULL,
    "departureTime" DATETIME NOT NULL,
    "arrivalTime" DATETIME NOT NULL,
    "originId" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "planeId" TEXT NOT NULL,
    CONSTRAINT "Flight_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Airport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flight_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Airport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flight_planeId_fkey" FOREIGN KEY ("planeId") REFERENCES "Plane" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "Passenger" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "Plane" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS "_FlightToPassenger" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FlightToPassenger_A_fkey" FOREIGN KEY ("A") REFERENCES "Flight" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FlightToPassenger_B_fkey" FOREIGN KEY ("B") REFERENCES "Passenger" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "Passenger_email_key" ON "Passenger"("email");
CREATE UNIQUE INDEX "_FlightToPassenger_AB_unique" ON "_FlightToPassenger"("A", "B");
CREATE INDEX "_FlightToPassenger_B_index" ON "_FlightToPassenger"("B");
