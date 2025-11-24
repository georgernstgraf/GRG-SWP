import { Prisma, PrismaClient } from "../prisma/client/client.ts";

// Create a singleton instance of the Prisma client
export const prisma = new PrismaClient();

// ======= Cached data for performance =======
const cachedDifficulties = await prisma.difficulty.findMany();
const cachedCategories = await prisma.category.findMany();
const cachedTypes = await prisma.type.findMany();

// ======= Type definitions for minimal interface =======
export interface QuestionCreateData {
    question: string;
    difficulty: string;
    category: string;
    type: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface TypeData {
    type: string;
}

export interface DifficultyData {
    level: string;
}

export interface CategoryData {
    name: string;
    opentdb_id: number;
}

// ======= Helper Functions =======

async function findOrCreateAnswer(answerText: string) {
    // First try to find existing answer
    let answer = await prisma.answer.findFirst({
        where: { answer: answerText },
    });

    if (!answer) {
        try {
            // Try to create new answer
            answer = await prisma.answer.create({
                data: { answer: answerText },
            });
        } catch (_error) {
            // If creation fails due to unique constraint (race condition),
            // try to find the answer again
            answer = await prisma.answer.findFirst({
                where: { answer: answerText },
            });
            if (!answer) {
                throw new Error(
                    `Failed to create or find answer: ${answerText}`,
                );
            }
        }
    }

    return answer;
}

// a function to trim whitespace from all answers in the database
// upsert all where answer like ' %' or answer like '% '
export async function trimWhitespaceFromAllAnswers() {
    const answers = await prisma.answer.findMany();
    let trimmedCount = 0;
    for (const a of answers) {
        const trimmed = a.answer.trim();
        if (trimmed !== a.answer) {
            trimmedCount++;
            try {
                await prisma.answer.update({
                    where: { id: a.id },
                    data: { answer: trimmed },
                });
            } catch (error) {
                console.error(`Failed to update answer ${a.answer}: ${error} -- deleting answer, you will need to re-run seed`);
                await prisma.answer.delete({
                    where: { id: a.id },
                });
            }
        }
    }
    console.log(`Trimming completed. Total answers trimmed: ${trimmedCount}`);
}

// ======= Question Service Functions =======

export async function getAllQuestions() {
    return await prisma.question.findMany({
        include: {
            difficulty: true,
            category: true,
            type: true,
            correct_answer: true,
            incorrect_answers: true,
        },
    });
}

export async function createQuestion(
    new_question: QuestionCreateData,
): Promise<Prisma.QuestionModel | null> {
    // Check if question already exists (since question.question is now unique)
    const existingQuestion = await prisma.question.findFirst({
        where: { question: new_question.question },
        include: {
            difficulty: true,
            category: true,
            type: true,
            correct_answer: true,
            incorrect_answers: {
                orderBy: {
                    answer: "asc",
                },
            },
        },
    });
    if (existingQuestion) {
        let message = `Question already exists: ${new_question.question}`;
        let found_diff = false;
        if (existingQuestion.difficulty.level !== new_question.difficulty) {
            found_diff = true;
            message += `\nreceived difficulty: ${new_question.difficulty}, existing: ${existingQuestion.difficulty.level}`;
        }
        if (existingQuestion.category.name !== new_question.category) {
            found_diff = true;
            message += `\nreceived category: ${new_question.category}, existing: ${existingQuestion.category.name}`;
        }
        if (existingQuestion.type.type !== new_question.type) {
            found_diff = true;
            message += `\nreceived type: ${new_question.type}, existing: ${existingQuestion.type.type}`;
        }
        if (
            existingQuestion.correct_answer.answer !==
                new_question.correct_answer
        ) {
            found_diff = true;
            message +=
                `\nreceived correct_answer: '${new_question.correct_answer}', existing: '${existingQuestion.correct_answer.answer}'`;
        }
        if (
            existingQuestion.incorrect_answers.length !==
                new_question.incorrect_answers.length
        ) {
            found_diff = true;
            message +=
                `\nreceived incorrect_answers.length: ${new_question.incorrect_answers.length}, existing: ${existingQuestion.incorrect_answers.length}`;
        }
        const existingIncorrectAnswers = existingQuestion.incorrect_answers.map((a) => a.answer).toSorted();
        const newIncorrectAnswers = [...new_question.incorrect_answers].toSorted();
        for (let i = 0; i < existingIncorrectAnswers.length; i++) {
            if (
                existingIncorrectAnswers[i] !== newIncorrectAnswers[i]
            ) {
                found_diff = true;
                message += `\nincorrect_answer received: ${newIncorrectAnswers[i]}, existing: ${existingIncorrectAnswers[i]}`;
            }
        }
        if (!found_diff) {
            return null; // Return null to indicate duplicate/not stored
        } else {
            console.log("================================================================================");
            console.log("DUPED QUESTION WITH DIFFERENCES");
            console.log(message);
            console.log(`incoming question: ${JSON.stringify(new_question, null, 2)}`);
            console.log(
                `existing question: ${JSON.stringify(existingQuestion, null, 2)}`,
            );
            console.log("================================================================================");
        }
    }

    // Use cached data instead of database queries
    const difficulty = cachedDifficulties.filter((d) => d.level === new_question.difficulty)[0];
    if (!difficulty) {
        throw new Error(`Difficulty '${new_question.difficulty}' not found`);
    }

    const category = cachedCategories.filter((c) => c.name === new_question.category)[0];
    if (!category) {
        throw new Error(`Category '${new_question.category}' not found`);
    }

    const type = cachedTypes.filter((t) => t.type === new_question.type)[0];
    if (!type) {
        throw new Error(`Type '${new_question.type}' not found`);
    }

    // Find or create all answers (handles unique constraint)
    const allAnswers = await Promise.all([
        findOrCreateAnswer(new_question.correct_answer),
        ...new_question.incorrect_answers.map((answerText) => findOrCreateAnswer(answerText)),
    ]);

    const correctAnswer = allAnswers[0];
    const incorrectAnswers = allAnswers.slice(1);

    // Create the question
    return await prisma.question.create({
        data: {
            question: new_question.question,
            difficultyId: difficulty.id,
            categoryId: category.id,
            typeId: type.id,
            correct_answer_id: correctAnswer.id,
            incorrect_answers: {
                connect: incorrectAnswers.map((answer) => ({ id: answer.id })),
            },
        },
        include: {
            difficulty: true,
            category: true,
            type: true,
            correct_answer: true,
            incorrect_answers: true,
        },
    });
}

export async function deleteAllQuestions() {
    // First delete all questions (this will also handle the relations)
    await prisma.question.deleteMany();
    // Then clean up orphaned answers
    await prisma.answer.deleteMany();
}

export async function getQuestionsByCategory(categoryName: string) {
    return await prisma.question.findMany({
        where: {
            category: {
                name: categoryName,
            },
        },
        include: {
            difficulty: true,
            category: true,
            type: true,
            correct_answer: true,
            incorrect_answers: true,
        },
    });
}

export async function getQuestionByText(questionText: string) {
    return await prisma.question.findFirst({
        where: { question: questionText },
        include: {
            difficulty: true,
            category: true,
            type: true,
            correct_answer: true,
            incorrect_answers: true,
        },
    });
}

// a function to trim whitespace from all questions in the database
// upsert all where question like ' %' or question like '% '
export async function trimWhitespaceFromAllQuestions() {
    const questions = await prisma.question.findMany();
    let trimmedCount = 0;
    for (const q of questions) {
        const trimmed = q.question.trim();
        if (trimmed !== q.question) {
            trimmedCount++;
            await prisma.question.update({
                where: { id: q.id },
                data: { question: trimmed },
            });
        }
    }
    console.log(`Trimming completed. Total questions trimmed: ${trimmedCount}`);
}
// ======= Type Service Functions =======

export function getAllTypes() {
    return cachedTypes;
}

export async function createType(data: TypeData) {
    const result = await prisma.type.create({
        data: { type: data.type },
    });
    return result;
}

export async function deleteType(type: string) {
    const result = await prisma.type.deleteMany({
        where: { type },
    });
    return result;
}

// ======= Difficulty Service Functions =======

export function getAllDifficulties() {
    return cachedDifficulties;
}

export async function createDifficulty(data: DifficultyData) {
    const result = await prisma.difficulty.create({
        data: { level: data.level },
    });
    return result;
}

export async function deleteDifficulty(level: string) {
    const result = await prisma.difficulty.deleteMany({
        where: { level },
    });
    return result;
}

// ======= Category Service Functions =======

export function getAllCategories() {
    return cachedCategories;
}

export async function createCategory(data: CategoryData) {
    const result = await prisma.category.create({
        data: { name: data.name, opentdb_id: data.opentdb_id },
    });
    return result;
}

export async function deleteCategories(names: string[]) {
    const result = await prisma.category.deleteMany({
        where: { name: { in: names } },
    });
    // Note: Since cached data is loaded at module level,
    // it won't automatically refresh. Consider restarting the application.
    return result;
}

export function getCategoryByName(name: string) {
    return cachedCategories.find((c) => c.name === name) || null;
}

export function getCategoryByOpentdbId(opentdb_id: number) {
    return cachedCategories.find((c) => c.opentdb_id === opentdb_id) || null;
}

export async function getQuestionCountInCategory(categoryName: string): Promise<number> {
    return await prisma.question.count({
        where: {
            category: {
                name: categoryName,
            },
        },
    });
}

// ======= Utility Functions =======

export async function disconnectDatabase() {
    await prisma.$disconnect();
}

export async function questionsDifficultyCategoryAmount(difficulty: string, category: string, amount: number) {
    const allresults = await prisma.question.findMany({
        where: {
            difficulty: { level: difficulty },
            category: { name: category },
        },
        select: {
            question: true,
            correct_answer: { select: { answer: true } },
            incorrect_answers: { select: { answer: true } },
        },
    });
    allresults.sort(() => Math.random() - 0.5);
    return allresults.slice(0, amount);
}
