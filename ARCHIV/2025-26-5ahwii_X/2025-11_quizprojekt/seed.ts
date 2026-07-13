import { difficulties, question_types } from "./lib/seeddata.ts";
import { echo_blank } from "./lib/helpers.ts";
import { API_MAX_AMOUNT, DATABASE_URL } from "./lib/config.ts";
import * as api from "./lib/apiaccess.ts";
import { ApiQuestionData } from "./lib/apiaccess.ts";
import * as questionService from "./lib/questionservice.ts";
import he from "he";

async function seed() {
    echo_blank();
    console.log("================================================================================");
    console.log("🌱 STARTING DATABASE SEED");
    console.log(`📍 Database URL: ${DATABASE_URL}`);
    console.log("================================================================================");

    // Seed Question Types (multiple, boolean)
    console.log("\n🔧 SYNCING QUESTION TYPES");
    const my_qtypes = new Set((await questionService.getAllTypes()).map((qt) => qt.type));
    const their_qtypes = new Set(question_types);

    const to_add_qtypes = their_qtypes.difference(my_qtypes);
    const to_delete_qtypes = my_qtypes.difference(their_qtypes);

    for (const type of to_add_qtypes) {
        await questionService.createType({ type });
    }
    for (const type of to_delete_qtypes) {
        await questionService.deleteType(type);
    }

    console.log(`   ✅ Added: ${to_add_qtypes.size}, Deleted: ${to_delete_qtypes.size}, Total: ${their_qtypes.size}`);

    // Sync Difficulties
    console.log("\n🔧 SYNCING DIFFICULTIES");
    const my_difficulties = new Set((await questionService.getAllDifficulties()).map((d) => d.level));
    const their_difficulties = new Set(difficulties);

    const to_add_difficulties = their_difficulties.difference(my_difficulties);
    const to_delete_difficulties = my_difficulties.difference(their_difficulties);

    for (const level of to_add_difficulties) {
        await questionService.createDifficulty({ level });
    }
    for (const level of to_delete_difficulties) {
        await questionService.deleteDifficulty(level);
    }

    console.log(
        `   ✅ Added: ${to_add_difficulties.size}, Deleted: ${to_delete_difficulties.size}, Total: ${their_difficulties.size}`,
    );

    // Sync Categories
    // Sync Categories
    console.log("\n🔧 SYNCING CATEGORIES");

    const their_categories = new Map<string, number>(
        (await api.get_categories()).map((c) => [c.name, Number.parseInt(c.id)]),
    );
    const their_category_names = new Set(their_categories.keys());

    const my_categories = new Map((await questionService.getAllCategories()).map((c) => [c.name, c.opentdb_id]));
    const my_category_names = new Set(my_categories.keys());

    const to_delete = my_category_names.difference(their_category_names);
    const to_add_categories = their_category_names.difference(my_category_names);

    await questionService.deleteCategories(Array.from(to_delete));

    for (const name of to_add_categories) {
        await questionService.createCategory({
            name,
            opentdb_id: their_categories.get(name)!,
        });
    }

    console.log(`   ✅ Added: ${to_add_categories.size}, Deleted: ${to_delete.size}, Total: ${their_categories.size}`);
    console.log("\n✅ Base tables synchronized successfully!");

    // Now looping for all categories, their_categories is ok
    console.log("================================================================================");
    console.log("FETCHING QUESTIONS FROM API");
    console.log("================================================================================");

    let globalTotalAvailable = 0;
    let globalTotalProcessed = 0;
    let globalTotalStored = 0;

    console.log(`got args: ${Deno.args}`);
    for (const [categoryName, opentdb_id] of [...their_categories].toSorted((_a, _b) => Math.random() - 0.5)) {
        // continue if Deno.args > 0 && args not includes categoryName
        if (Deno.args.length > 0 && !Deno.args.includes(categoryName)) {
            console.log(`skipping category ${categoryName} as not in args`);
            continue;
        }
        const their_catcount = await api.questions_in_category(opentdb_id);
        globalTotalAvailable += their_catcount;

        console.log(`\n📁 CATEGORY: ${categoryName} (ID: ${opentdb_id})`);
        console.log(`   API has ${their_catcount} questions available`);
        const myQuestionCount = await questionService.getQuestionCountInCategory(categoryName);
        console.log(`   I have ${myQuestionCount} questions in my database for this category`);
        let categoryTotalProcessed = 0;
        let categoryTotalStored = 0;
        let batchNumber = 1;

        let not_fetched_count = their_catcount;
        while (not_fetched_count > 0 && await questionService.getQuestionCountInCategory(categoryName) < their_catcount) {
            console.log(
                `I have ${await questionService.getQuestionCountInCategory(categoryName)} from category ${categoryName} in my db`,
            );
            try {
                const batch_size = not_fetched_count > API_MAX_AMOUNT ? API_MAX_AMOUNT : not_fetched_count;
                console.log(`   📦 Batch ${batchNumber}: Fetching ${batch_size} questions...`);
                const response = await api.get_questions(batch_size, opentdb_id);
                not_fetched_count -= batch_size;

                if (response.response_code === 0 && Array.isArray(response.results)) {
                    let batchProcessed = 0;
                    let batchStored = 0;

                    // Process each question in the batch
                    for (const questionData of response.results as ApiQuestionData[]) {
                        batchProcessed++;
                        categoryTotalProcessed++;
                        globalTotalProcessed++;

                        try {
                            // Decode HTML-encoded category name to match UTF-8 names in database
                            const questionToStore = {
                                question: questionData.question,
                                difficulty: questionData.difficulty,
                                category: he.decode(questionData.category), // Decode to match UTF-8 category names
                                type: questionData.type,
                                correct_answer: questionData.correct_answer,
                                incorrect_answers: questionData.incorrect_answers,
                            };

                            const result = await questionService.createQuestion(questionToStore);
                            if (result) { // Only count if question was actually created (not duplicate)
                                batchStored++;
                                categoryTotalStored++;
                                globalTotalStored++;
                            }
                        } catch (error) {
                            const errorMessage = error instanceof Error ? error.message : String(error);
                            console.error(`      ❌ Error processing question: ${errorMessage}`);
                        }
                    }

                    console.log(
                        `   📦 Batch ${batchNumber}: Processed ${batchProcessed} from API, Stored ${batchStored} (${
                            batchProcessed - batchStored
                        } already in database)`,
                    );
                } else {
                    console.warn(`   ⚠️ Batch ${batchNumber}: Unexpected response code: ${response.response_code}`);
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                console.error(`   ❌ Batch ${batchNumber}: Error fetching questions: ${errorMessage}`);
                if (error instanceof Error && error.message.includes("Token Empty")) {
                    console.log("   🔄 Resetting token and retrying...");
                    await api.reset_token();
                    continue; // Don't increment batch number for retry, and don't update my_catcount
                }
            }
            batchNumber++;
        }

        console.log(
            `📁 ${categoryName} SUMMARY: Available: ${their_catcount}, Processed: ${categoryTotalProcessed}, Stored: ${categoryTotalStored}`,
        );
    }

    console.log("\n================================================================================");
    console.log("SEEDING SUMMARY");
    console.log("================================================================================");
    console.log(`Total Questions Available: ${globalTotalAvailable}`);
    console.log(`Total Questions Processed: ${globalTotalProcessed}`);
    console.log(`Total Questions Stored: ${globalTotalStored}`);
    console.log(`Duplicate/Skipped: ${globalTotalProcessed - globalTotalStored}`);
    console.log("================================================================================");
    console.log("✅ Seeding completed successfully!");
    await questionService.trimWhitespaceFromAllAnswers();
    await questionService.trimWhitespaceFromAllQuestions();
}
await seed();
await questionService.disconnectDatabase();
