
// 1. generateQuiz function
const showQuestions = document.querySelector('#question');
const choices = Array.from(document.querySelector('#.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

var currentQuestion = {}
var acceptAnswers = true;
var score = 0;
var questionCounter = 0
var availableQuestions = []

// Add event listeners to the rest of the buttons
document.getElementById("startBtn").addEventListener("click", startQuiz);


// 2. display question and answers


        var questions = [
            {
                prompt:"Which planet has the most moons?,choice1:(a) saturn, choice2:(b), venus, choice3:(c)jupiter",
                answer: "Saturn",
            },
        
            {
                prompt:"What part of a plant conducts photosynthesis?, choice1:(a) root, choice2:(b) leaf, choice3:(c)stalk",
                answer:"leaf",
            },
        
            {
                prompt:"How many elements are in the periodic table?choice1:(a) 100, choice2:(b) 97, choice3:(c)118",
                answer: 118,
            },
        
            {
                prompt:"Where is the smallest bone in the human body located?choice1:(a) phalanges, choice2:(b) femur, choice3:(c)stapes",
                answer:"stapes"
            },
        
            {
                prompt:"How many hearts does an octopus have?choice1:(a) 5, choice2:(b) 3, choice3:(c)1",
                answer: 3,
            },
        ];

        

       // Onclick event for "Start Quiz" button on welcome section
function startQuiz() {
    // Hide all sections, then unhide the first page
    hideAll();
    document.getElementById("page1").hidden = false;

    // Start timer:
    timerVal = 76; // start with 76 seconds - will be decremented before display
    clearInterval(interval); // make sure no timer is already running
    //Call updateTimer once every second
    interval = setInterval(updateTimer, 1000);
}

        // Onclick event for all answer buttons
function answerButtons(event) {
    var currentPage = event.target.parentElement.getAttribute("name"); // index of current page
    var nextPage = parseInt(currentPage) + 1; // index of next page
    var correctAnswer = event.target.parentElement.getAttribute("value"); // index of correct answer
    var userAnswer = event.target.value; // index of user's answer

    // If time is up, go to last page; can be less than 0 because 10 subtracted for wrong answers
    if (timerVal <= 0) {
        nextPage = lastPage;
    }
    // Advance to next page
    goToPage(nextPage);

    // If user entered correct answer, then display "Correct"
    if (userAnswer === correctAnswer) {
        document.getElementById("correct").hidden = false;
    }
    // If user entered incorrect answer, then display "Incorrect", and take away 10 seconds from timer
    else {
        document.getElementById("incorrect").hidden = false;
        timerVal = timerVal - 10;
    }
}
// Adds onclick event to all 20 answer buttons
function setAnswerButtons() {
    var answerBtns = document.getElementsByClassName("answerBtn")
    for (var i = 0; i < answerBtns.length; i++) {
        answerBtns[i].addEventListener("click", answerButtons);
    }
}

// Hides all sections; used before displaying current section
function hideAll() {
    var sections = document.getElementsByTagName("section");

    for (var i=0; i < sections.length; i++) {
        sections[i].hidden = true;
    }
}
// when user clicks submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
    }
function updateTimer() {
    // Check for <0 just in case - can happen because 10 seconds subtracted for wrong answers!
    if (timerVal <= 0) {
        goToPage(lastPage);
        alert("Time's up!");
    }
    else {
        timerVal--; // decrement timer
        document.getElementById("timerValue").textContent = timerVal.toString(); // display current timer value
    }
}

function goToPage(nextPg) {
    // If quiz is done, stop timer, update score on Complete section
    if (nextPg === lastPage) {
        clearInterval(interval);
        document.getElementById("finalScore").textContent = timerVal.toString();
    }

    // Hide everything, then determine which sections to unhide
    hideAll();

    // Advance to next page
    document.getElementsByName(nextPg.toString())[0].hidden = false;
}