var quizEl = document.querySelector(".quiz");
var cursor = 0;

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

var displayQuiz = function () {
    quizEl.querySelector('h3').textContent = questions[cursor].text;
    for (var buttonLabel of questions[cursor].possible)
        var buttonEl = document.createElement('button');
    buttonEl.textContent = buttonLabel;
    buttonEl.dataset.choice = buttonLabel[0];
    quizEl.appendChild(buttonEl);
};

var score = 0;
var questionsIndex = 0;

var advance = function (event) {
    var element = event.target;
    if (element.matches('question button')) {
        var answer = element.dataset.choice === correctAnswer[cursor];
        console.log(element.dataset.choice);
        console.log(correctAnswers[cursor]);
        console.log(answer);
        if (cursor < questions.length - 1) {
            cursor++;
            quizEl.dataset.index = cursor;
        }
        displayQuestion();
    }
};





// Still needs work:
// Questions to to appear and function
// Timer to function
// Score to tally
// Timer to remove time for wrong answers
// Scoreboard