// Query selectors
var quizStart = document.querySelector('#start');
var quizQuestions = document.querySelectorAll('.question');

// Variables
var quizCursor = 0;
var correctAnswers = ["a", "c", "b", "b", "c", "b"];



// Timer starts when start button is selected, count down is shown





// Displays questions on quiz
var displayQuiz = function () {
    for (var question of quizQuestions) {
        console.log(question);
        if (question.dataset.index != quizCursor) {
            question.style.display = "none";
        } else {
            question.style.display = "block";
        }
    }
};


// moves the quiz forward
var advance = function (event) {
    var element = event.target;
    if (element.matches('.question button')) {
        var answer = element.dataset.choice === correctAnswers[quizIndex];
        console.log(element.dataset.choice);
        console.log(correctAnswers[quizCursor++]);
        console.log(answer);
        if (quizCursor < quizQuestions.length - 1) {
            quizCursor++;
        }
        displayQuiz();
    }
};

document.addEventListener('click', advance);

displayQuiz();





// Event listener for the start button
// startBtn.addEventListener("click", INPUTHERE);