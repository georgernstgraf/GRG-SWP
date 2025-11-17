-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "correct_answer_id" TEXT NOT NULL,
    "difficultyId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    CONSTRAINT "Question_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_correct_answer_id_fkey" FOREIGN KEY ("correct_answer_id") REFERENCES "Answer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Question_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("categoryId", "correct_answer_id", "difficultyId", "id", "question", "typeId") SELECT "categoryId", "correct_answer_id", "difficultyId", "id", "question", "typeId" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
