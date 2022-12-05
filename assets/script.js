// Query selectors
var quizStart = document.querySelector('#start');
var questions = document.querySelectorAll('.question');

// Variables
var quizIndex = 0;
var correctAnswers = ["a", "c", "b", "b", "c", "b"];

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
    if (element.matches('.question button')) {
        var answer = element.dataset.choice === correctAnswers[quizIndex];
        console.log(element.dataset.choice);
        console.log(correctAnswers[quizIndex++]);
        console.log(answer);
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