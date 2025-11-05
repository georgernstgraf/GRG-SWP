-- CreateTable
CREATE TABLE "Flight" (
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

-- CreateTable
CREATE TABLE "Passenger" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Plane" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FlightToPassenger" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FlightToPassenger_A_fkey" FOREIGN KEY ("A") REFERENCES "Flight" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FlightToPassenger_B_fkey" FOREIGN KEY ("B") REFERENCES "Passenger" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_email_key" ON "Passenger"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_FlightToPassenger_AB_unique" ON "_FlightToPassenger"("A", "B");

-- CreateIndex
CREATE INDEX "_FlightToPassenger_B_index" ON "_FlightToPassenger"("B");
