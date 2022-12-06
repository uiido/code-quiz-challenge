// Query selectors
var quizStart = document.querySelector('#start');
var quizQuestions = document.querySelectorAll('.question');
var endQuiz = document.querySelector('#results');

// Variables
var quizCursor = 0;
var correctAnswers = ["a", "c", "b", "b", "c", "b"];

// Timer starts when start button is selected, count down is shown
var timerEl = document.querySelector('#timer');
var timeRemaining = quizQuestions.length * 10;

// displays text for timer
function displayTimer() {
    timerEl.textContent = "Time Remaining: " + timeRemaining;
}

// timer function
function setCountdown() {
    displayTimer(timeRemaining);
    var timeInterval = setInterval(function () {
        timeRemaining--;
        displayTimer(timeRemaining);

        if (timeRemaining === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's up!";
        }
    }, 1000);
}

setCountdown();

// Score variables
var scoreEl = document.querySelector('#total-score');
var score = timeRemaining;
scoreEl.innerHTML = score;
var penalty = 10;

// Score functions


// Displays questions on quiz
var displayQuestion = function () {
    for (var indQuestion of quizQuestions) {
        console.log(indQuestion);
        if (indQuestion.dataset.index != quizCursor) {
            indQuestion.style.display = "none";
        } else {
            indQuestion.style.display = "block";
        }
    }
};


// moves the quiz forward
var advance = function (event) {
    var element = event.target;
    if (element.matches('.question button')) {
        var answer = element.dataset.choice === correctAnswers[quizCursor];
        console.log(element.dataset.choice);
        console.log(correctAnswers[quizCursor++]);
        console.log(answer);
        if (quizCursor < quizQuestions.length - 1) {
            // quizCursor++;
        }
        displayQuestion();
    } else {
        if (timeRemaining === 0) {
            quizCursor === 6;
        }
        displayQuestion(6);
    }
};

document.addEventListener('click', advance);

displayQuestion();


// Skip to end screen when out of time
// Keep score
// Penalty
// Local storage
// Submit score