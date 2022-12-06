// Query selectors
var quizStart = document.querySelector('#start');
var quizQuestions = document.querySelectorAll('.question');
var endQuiz = document.querySelector('#results');

// Variables
var quizCursor = 0;
var correctAnswers = ["a", "c", "b", "b", "c", "b"];
var highScores = [];

// Timer starts when start button is selected, count down is shown
var timerEl = document.querySelector('#timer');
var timeRemaining = 75;

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
            timerEl.textContent = "Game's Ended!";
        }
    }, 1000);
}

setCountdown();

// Score variables
// Score never displays as anything other than 75, even though I want it to match time when the quiz ends; 
// I don't know how to identify wrong answers to attach a penalty to them
var scoreEl = document.querySelector('#total-score');
var score = timeRemaining--;
var penalty = 10;
scoreEl.innerHTML = score;


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
    }
};


// Quiz never seems to jump to end screen that I established no matter what functions I used. I set it
// up as a question, which I know must be wrong, in an attempt to not have it display at the bottom of every question.
// How can I correct this issue?
// How do I stop the timer at the end screen?
// How do I use the stopped timer value for the score??


document.addEventListener('click', advance);

displayQuestion();

// // local storage
// I don't think these variables are grabbing anything - as they never display any user submitted data
var initialsInput = document.getElementById("initials");

var highScore = {
    initials: initialsInput.value.trim(),
    score: score
}


// I don't think this works for initials. Score seems fine but user input never appears with initials
localStorage.setItem("highScore", JSON.stringify(highScore));

// I don't think this is working correclty? It doesn't seem to grab any user input
function renderInitials() {
    var highScoreOutput = JSON.parse(localstorage.getItem("highScore"));
    if (highScoreOutput !== null) {
        document.querySelector(".user-score").textContent = highScoreOutput
    }
}

// THINGS THAT AREN'T WORKING
// Quiz doesn't skip ahead when timer runs out
// Score always remains at 75, even when timer runs out
// How do you track incorrect answers to add a penalty?
// Local storage displays the user's initials as "initials", "undefined", or "[ojbect]" in the console log, not any user input
// Local storage doesn't display on the highscores board