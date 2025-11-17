// "cook" numbers from .env and use *only these*
export const DATABASE_URL = Deno.env.get("DATABASE_URL");
export const API_HUG_MS = Number.parseInt(Deno.env.get("API_HUG_MS") || "5000");
export const API_MAX_AMOUNT = Number.parseInt(Deno.env.get("API_MAX_AMOUNT") || "50");
