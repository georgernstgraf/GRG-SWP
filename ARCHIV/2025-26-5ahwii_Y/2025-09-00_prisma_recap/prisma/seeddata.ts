export const difficulties = ['any', 'easy', 'medium', 'hard'];
export const categories = await (await fetch("https://opentdb.com/api_category.php")).json().then((data) => data.trivia_categories);  // [{id: 9, name: "General Knowledge"}, ...]
//console.log("Categories from opentdb:", categories);
export const question_types = ['multiple', 'boolean'];
