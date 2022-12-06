// Query selectors
var quizStart = document.querySelector('#start');
var quizQuestions = document.querySelectorAll('.question');

// Variables
var quizCursor = 0;
var correctAnswers = ["a", "c", "b", "b", "c", "b"];


// Score is added to with correct answers and displayed at the end of the quiz to submit
var score = 0;

// Timer starts when start button is selected, count down is shown
var timerEl = document.querySelector('#timer');
var timeRemaining = quizQuestions.length * 15;

function displayTimer() {
    timerEl.textContent = "Time Remaining: " + timeRemaining;
}

function countdown() {
    displayTimer(timeRemaining);
    var timerInterval = setInterval(function () {
        timeRemaining--;
        displayTimer(timeRemaining);

        if (timeRemaining === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            displayMessage();
            timerEl.textContent = "";
        }

    }, 1000);
}

// Starts the quiz questions, timer, and score
var startQuiz = function () {
    quizStart.setAttribute("class", "hide");
}



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
    }
};

//create end screen

document.addEventListener('click', advance);

displayQuestion();


// Local storage to store high scores




// Event listener for the start button
startBtn.addEventListener("click", startQuiz);