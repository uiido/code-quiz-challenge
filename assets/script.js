var questionEl = document.querySelector(".question");
var cursor = 0;

var questions = [
    {
        question: "You can write CSS and/or Javscript in HTML files:",
        choices: ["true", "false"],
        answer: "true",
    },
    {
        question: "HTML semmantic code doesn't include:",
        choices: ["<p>", "<aside>", "<span>", "<footer>"],
        answer: "<span>",
    },
    {
        question: "The style 'color' in CSS refers to the color of:",
        choices: ["the border color", "the text color", "the background color", "the text decoration color"],
        answer: "the text color",
    },
    {
        question: "Media Queries only work on widths below 1000px:",
        choices: ["true", "false"],
        answer: "false",
    },
    {
        question: "What should enclose conditions in an if / else statement",
        choices: ["[]", "()", "{}", "nothing"],
        answer: "{}",
    },
    {
        question: "In JavaScript, a boolean can be a number:",
        choices: ["true", "false"],
        answer: "false",
    },
];

var correctAnswers = ["true", "<span>", "the text color", "false", "{}", "false"]

var displayQuestion = function () {
    questionEl.querySelector('h2').textContent = questions[cursor].text;

    questionEl.querySelector('#choices').innherHTML = null;
    for (var buttonLabel of questions[cursor].possible)
        var buttonEl = document.createElement('button');
    buttonEl.textContent = buttonLabel;
    buttonEl.dataset.choice = buttonLabel[0];
    questionEl.querySelector('#choices').appendChild(buttonEl);
};

var advance = function (event) {
    var element = event.target;
    if (element.matches('.question button')) {
        var answer = element.dataset.choice === correctAnswers[cursor];
        console.log(element.dataset.choice);
        console.log(correctAnswers[cursor]);
        console.log(answer);
        if (cursor < questions.length - 1) {
            cursor++;
        }
        displayQuestion();
    }
};

document.addEventListener('click', advance);

displayQuestion();



// Still needs work:
// Questions to to appear and function
// Timer to function
// Score to tally
// Timer to remove time for wrong answers
// Scoreboard