// Quiz-Komponente für Lessons der 3AHWII.
// Markup:
//   <div class="quiz" data-answer="1">
//     <p class="quiz-question">…</p>
//     <button class="quiz-option">…</button>  (Reihenfolge = data-answer-Index, 0-basiert)
//     <p class="quiz-feedback">Erklärung …</p>
//   </div>
// Alle Optionen sollen inhaltlich gleiche Wortzahl haben, damit die Form nicht verrät.
export function initQuizzes(root = document) {
  root.querySelectorAll(".quiz").forEach((quiz) => {
    const correct = Number(quiz.dataset.answer);
    const options = quiz.querySelectorAll("button.quiz-option");
    const feedback = quiz.querySelector(".quiz-feedback");
    options.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (quiz.classList.contains("answered")) return;
        quiz.classList.add("answered");
        options.forEach((b, j) => {
          if (j === correct) b.classList.add("correct");
        });
        if (i !== correct) btn.classList.add("wrong");
        if (feedback) {
          feedback.classList.add(i === correct ? "good" : "bad");
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => initQuizzes());
