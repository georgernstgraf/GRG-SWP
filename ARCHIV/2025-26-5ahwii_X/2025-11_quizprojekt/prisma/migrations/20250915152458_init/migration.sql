-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "correct_answer_id" TEXT NOT NULL,
    "difficultyId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    CONSTRAINT "Question_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_correct_answer_id_fkey" FOREIGN KEY ("correct_answer_id") REFERENCES "Answer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "opentdb_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Difficulty" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "answer" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_IncorrectAnswers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_IncorrectAnswers_A_fkey" FOREIGN KEY ("A") REFERENCES "Answer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IncorrectAnswers_B_fkey" FOREIGN KEY ("B") REFERENCES "Question" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_type_key" ON "Type"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_opentdb_id_key" ON "Category"("opentdb_id");

-- CreateIndex
CREATE UNIQUE INDEX "Difficulty_level_key" ON "Difficulty"("level");

-- CreateIndex
CREATE UNIQUE INDEX "_IncorrectAnswers_AB_unique" ON "_IncorrectAnswers"("A", "B");

-- CreateIndex
CREATE INDEX "_IncorrectAnswers_B_index" ON "_IncorrectAnswers"("B");
