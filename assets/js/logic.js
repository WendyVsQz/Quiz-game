
// 1. generateQuiz function
const showQuestions = document.querySelector('#question');
const choiceText = document.querySelector('#choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

// display question and answers
        var questions = [
            {
                questions:"Which planet has the most moons?,choice1:(a) saturn, choice2:(b), venus, choice3:(c)jupiter",
                answer: "Saturn",
            },
        
            {
                questions:"What part of a plant conducts photosynthesis?, choice1:(a) root, choice2:(b) leaf, choice3:(c)stalk",
                answer:"leaf",
            },
        
            {
                questions:"How many elements are in the periodic table?choice1:(a) 100, choice2:(b) 97, choice3:(c)118",
                answer: 118,
            },
        
            {
                question:"Where is the smallest bone in the human body located?choice1:(a) phalanges, choice2:(b) femur, choice3:(c)stapes",
                answer:"stapes"
            },
        
            {
                question:"How many hearts does an octopus have?choice1:(a) 5, choice2:(b) 3, choice3:(c)1",
                answer: 3,
            },
        ];

    const SCORE_POINTS = 100
    const MAX_QUESTIONS = 3

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion()
    }
    
    getNewQuestion = () => {
        if(availableQuestions.length === 0 || questionCounter > 
            MAX_QUESTIONS) {
            localStorage.setItem('mostRecentStore', score)

            return window.location.assign('/end.html')
        }

        questionCounter++
        progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
        
        const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question

        choice.forEach(choice => {
            const number = choice.dataset('number');
            choice.innerText = currentQuestion['choice' + number]
        })

        availableQuestions.splice(questionsIndex, 1)

        acceptingAnswers = true
    }

    choices.forEach(choices => {
        choice.addEventListener('click', e => {
            if(!acceptingAnswers) return

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset('number')

            var classToApply = selectedAnswer == currentQuestion.
        })
    })

    // Onclick event for all answer buttons
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();

       // Onclick event for "Start Quiz" button on welcome section
function startQuiz() {
    // Hide all sections, then unhide the first page
    hideAll();
    document.getElementById("end-screen").hidden = false;

    // Start timer:
    timerVal = 76; // start with 76 seconds - will be decremented before display
    clearInterval(interval); // make sure no timer is already running
    //Call updateTimer once every second
    interval = setInterval(updateTimer, 1000)

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

function initiateGameTimer() {
    CounterInterval = setInterval(function() {
    counter = counter + 1;
    timer = timer - 1;
    $('#GameTime').html(timer);
    console.log(timer);
      // Gamce condition check when timer =0: position of the star < or > 2308(bottom page limit)
    if (timer == 0) {
        clearInterval(CounterInterval);
        if (x >= 1440) {
        $("#GamePage").hide();
        $("#Congratulations").show();
        } else if (x < 1440) {
        console.log("fail");
        $("#GamePage").hide();
        $("#GameOver").show();
        }
    }
    }, 1000)
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
} }

