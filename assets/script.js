var quiz = document.querySelector(".quiz");
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

var score = 0;
var questionsIndex = 0;




// Still needs work:
// Questions to to appear and function
// Timer to function
// Score to tally
// Timer to remove time for wrong answers
// Scoreboard