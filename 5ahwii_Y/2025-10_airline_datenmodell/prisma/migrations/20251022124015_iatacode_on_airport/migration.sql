/*
  Warnings:

  - Added the required column `iataCode` to the `Airport` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Airport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "iataCode" TEXT NOT NULL,
    "city" TEXT NOT NULL
);
INSERT INTO "new_Airport" ("city", "id", "name") SELECT "city", "id", "name" FROM "Airport";
DROP TABLE "Airport";
ALTER TABLE "new_Airport" RENAME TO "Airport";
CREATE UNIQUE INDEX "Airport_iataCode_key" ON "Airport"("iataCode");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
