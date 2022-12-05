// Query selectors
var quizEl = document.querySelector('#quiz');
var quizIndex = 0;

// Questions, options, answers for quiz
var questions = [
    {
        question: "You can write CSS and/or Javscript in HTML files:",
        choices: ["true", "false"],
        answer: "true"
    },
    {
        question: "HTML semmantic code doesn't include:",
        choices: ["<p>", "<aside>", "<span>", "<footer>"],
        answer: "<span>"
    },
    {
        question: "The style 'color' in CSS refers to the color of:",
        choices: ["the border color", "the text color", "the background color", "the text decoration color"],
        answer: "the text color"
    },
    {
        question: "Media Queries only work on widths below 1000px:",
        choices: ["true", "false"],
        answer: "false"
    },
    {
        question: "What should enclose conditions in an if / else statement",
        choices: ["[]", "()", "{}", "nothing"],
        answer: "{}"
    },
    {
        question: "In JavaScript, a boolean can be a number:",
        choices: ["true", "false"],
        answer: "false"
    },
];
var correctAnswers = ["true", "<span>", "the text color", "false", "{}", "false"];

// Variables





// Displays questions on quiz
var displayQuestion = function () {
    quizEl.textContent = questions[quizIndex];
    for (var buttonLabel of questions[quizIndex].choices) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = buttonLabel;
        questionEl.appendChild('buttonEl');
    }
};


// moves the quiz forward
var advance = function () {
    if (quizIndex < questions.length - 1) {
        quizIndex++;
        displayQuestion();
    }
};

quizEl.addEventListener('click', advance);

displayQuestion()





// Event listener for the start button
// startBtn.addEventListener("click", INPUTHERE);