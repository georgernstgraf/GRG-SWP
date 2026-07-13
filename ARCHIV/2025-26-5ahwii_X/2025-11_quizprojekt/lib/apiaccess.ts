import { API_HUG_MS } from "./config.ts";
import { api_result_codes, sleep_ms, TheirCategory } from "./helpers.ts";

let TOKEN = ""; // will be set in reset_token()

// ======= Main API constants =======
// Type for API question data structure
export interface ApiQuestionData {
    question: string;
    difficulty: string;
    category: string;
    type: string;
    correct_answer: string;
    incorrect_answers: string[];
}
export type Response = { response_code: number; results?: ApiQuestionData[]; [key: string]: unknown };

// ======= API Client Class =======
class OpenTDBClient {
    private static lastCalledApiDate = new Date(Date.now() - API_HUG_MS);

    /**
     * Makes an API call with configurable rate limiting and validation
     * @param url - The API endpoint URL
     * @param validate - Whether to validate response_code (default: false)
     * @param useRateLimit - Whether to apply rate limiting (default: false)
     * @returns The parsed JSON response
     */
    static async apiCall(url: string, validate: boolean = false, useRateLimit: boolean = false): Promise<unknown> {
        if (useRateLimit) {
            await this.respectRateLimit();
        }

        const response = await fetch(url);
        const result = await response.json();

        if (validate) {
            this.validateResult(result as Response);
        }

        // Only update timestamp for rate-limited calls
        if (useRateLimit) {
            this.lastCalledApiDate = new Date();
        }
        return result;
    }

    /**
     * Respects API rate limiting by waiting if necessary
     */
    private static async respectRateLimit(): Promise<void> {
        const elapsed = new Date().valueOf() - this.lastCalledApiDate.valueOf();
        const waitTime = API_HUG_MS - elapsed;
        if (waitTime > 0) {
            console.log(`          spent ${elapsed} ms working, now waiting ${waitTime} ms.`);
            await sleep_ms(waitTime);
        }
    }

    /**
     * Validates API response and throws on bad result codes
     */
    private static validateResult(result: Response): void {
        if (result.response_code !== 0) {
            throw new Error(`Error from API: ${result.response_code} - ${api_result_codes.get(result.response_code)}`);
        }
    }
}

// ======= Main API functions using the client: =======
export async function get_questions(amount: number, category_id: number): Promise<Response> {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category_id}&token=${TOKEN}`;
    const to_return = await OpenTDBClient.apiCall(url, true, true) as Response; // validate=true, useRateLimit=true
    // Trim whitespace from questions and answers
    if (to_return.results) {
        for (const q of to_return.results) {
            q.question = q.question.trim();
            q.correct_answer = q.correct_answer.trim();
            q.incorrect_answers = q.incorrect_answers.map((ans) => ans.trim());
        }
    }
    return to_return;
}

export async function questions_in_category(category_id: number) {
    const url = `https://opentdb.com/api_count.php?category=${category_id}`;
    const result = await OpenTDBClient.apiCall(url) as { category_question_count: { total_question_count: number } };
    return result.category_question_count.total_question_count;
}

export async function get_categories(): Promise<TheirCategory[]> {
    const url = "https://opentdb.com/api_category.php";
    const result = await OpenTDBClient.apiCall(url) as { trivia_categories: TheirCategory[] };
    return result.trivia_categories;
}

export async function reset_token() {
    const url = `https://opentdb.com/api_token.php?command=request`;
    const result = await OpenTDBClient.apiCall(url, true) as Response; // validate=true, useRateLimit=false
    TOKEN = result.token as string; // Set the global TOKEN variable
    console.log(`   🔑 New token acquired: ${TOKEN}`);
}

// Reset token on import to ensure it's valid
await reset_token();
