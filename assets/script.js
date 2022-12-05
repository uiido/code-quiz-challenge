// Query selectors
var quizStart = document.querySelector('#start');
var questions = document.querySelectorAll('.questions');
var quizIndex = 0;

// Questions, options, answers for quiz
// var questions = [
//     {
//         question: "You can write CSS and/or Javscript in HTML files:",
//         choices: ["true", "false"],
//         answer: "true"
//     },
//     {
//         question: "HTML semmantic code doesn't include:",
//         choices: ["<p>", "<aside>", "<span>", "<footer>"],
//         answer: "<span>"
//     },
//     {
//         question: "The style 'color' in CSS refers to the color of:",
//         choices: ["the border color", "the text color", "the background color", "the text decoration color"],
//         answer: "the text color"
//     },
//     {
//         question: "Media Queries only work on widths below 1000px:",
//         choices: ["true", "false"],
//         answer: "false"
//     },
//     {
//         question: "What should enclose conditions in an if / else statement",
//         choices: ["[]", "()", "{}", "nothing"],
//         answer: "{}"
//     },
//     {
//         question: "In JavaScript, a boolean can be a number:",
//         choices: ["true", "false"],
//         answer: "false"
//     },
// ];





// var correctAnswers = ["true", "<span>", "the text color", "false", "{}", "false"];

// Variables


// Timer starts when start button is selected, count down is shown





// Displays questions on quiz
var displayQuestion = function () {
    for (var question of questions) {
        console.log(question);
        if (question.dataset.index != quizIndex) {
            question.style.display = "none";
        } else {
            question.style.display = "block";
        }
    }
};


// moves the quiz forward
var advance = function (event) {
    var element = event.target;
    if (element.matches('question button')) {
        if (quizIndex < questions.length - 1) {
            quizIndex++;
        }
        displayQuestion();
    }
};

document.addEventListener('click', advance);

displayQuestion();





// Event listener for the start button
// startBtn.addEventListener("click", INPUTHERE);