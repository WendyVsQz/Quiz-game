// Starting point
const showQuestions = document.querySelector('#question');
const choiceText = document.querySelector('#choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

// get elements
const startScreen = document.getElementById('start-screen');
const difficultyChoice = document.querySelectorAll('.inline-input-group input');
const startBtn = document.getElementById('start');
const questionsDiv = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const inputGroup = endScreen.querySelectorAll('.reveal');
const feedback = document.getElementById('feedback');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// display question and answers
let questions = [
        {
    questions:
    'Which planet has the most moons?,choice1:(a) saturn, choice2:(b), venus, choice3:(c)jupiter',
    answer: 'Saturn',
    },

    {
    questions:
    'What part of a plant conducts photosynthesis?, choice1:(a) root, choice2:(b) leaf, choice3:(c)stalk',
    answer: 'leaf',
    },

    {
    questions:
    'How many elements are in the periodic table?choice1:(a) 100, choice2:(b) 97, choice3:(c)118',
    answer: 118,
    },

    {
    question:
    'Where is the smallest bone in the human body located?choice1:(a) phalanges, choice2:(b) femur, choice3:(c)stapes',
    answer: 'stapes',
    },

    {
    question:
    'How many hearts does an octopus have?choice1:(a) 5, choice2:(b) 3, choice3:(c)1',
    answer: 3,
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 3;

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentStore', score);

    return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}';

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questions.innerText = currentQuestion.question;

    choice.forEach((choice) => {
    const number = choice.dataset('number');
    choice.innerText = currentQuestion['choice' + number];
});

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

//* test that this produces correct results

let questionIndex = 0;

function renderQuestion() {
if (questionIndex >= questions.length) return;
let show = document.getElementById('question');
let q = questions[questionIndex];
show.innerHTML = q.question;
Object.entries(q.answer).forEach(([letter,text]) => {
    const but = document.getElementById(letter);
    but.innerHTML = text
    but.dataset.correct = q.correctAnswer === letter;
    })
    questionIndex++;
}
renderQuestion()

document.getElementById("buts").addEventListener("click", function(e) {
const tgt = e.target;
if (tgt.type && tgt.type === "button") {
    document.getElementById("result").innerText = tgt.dataset.correct === "true" ? "Correct" : "Incorrect"
    }
})

document.getElementById("next").addEventListener("click", renderQuestion)

// Onclick event for all answer buttons
choices.forEach((choice) => {
choice.addEventListener('click', (e) => {
    //* if not accepting answers go to end screen
    if (!acceptingAnswers) {
    end();
    }

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    let classToApply =
    selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
    incrementScore(SCORE_POINTS);
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
    selectedChoice.parentElement.classList.remove(classToApply);
    getNewQuestion();
    }, 1000);
    });
});

incrementScore = (num) => {
score += num;
scoreText.innerText = score;
};

//* add event listener to the button
startButton.addEventListener('click', startGame);

startGame = () => {
questionCounter = 0;
score = 0;
availableQuestions = [...questions];
getNewQuestion();

  //* hide start-screen
startScreen.classList.add('hide');

  //* show questions div
questionsDiv.classList.remove('hide');
questionShow();
}, 1000;
  //* start timer
timerVal = 76; // start with 76 seconds - will be decremented before display
startTimer();

function checkAnswer() {
  // If user entered correct answer, then display "Correct"
if (userAnswer === correctAnswer) {
    document.getElementById('correct').hidden = false;
    }
  // If user entered incorrect answer, then display "Incorrect", and take away 10 seconds from timer
else {
    document.getElementById('incorrect').hidden = false;
    timerVal = timerVal - 10;
    }
}

answerButtons.forEach((answerButtons) => {

answerButtons.removeEventListener('click', processAnswer);
setTimeout(() => {
questionTitle.classList.remove('show');
    }, 850);
});


// Adds onclick event to all answer buttons
function setAnswerButtons() {
var answerBtns = document.getElementsByClassName('answerBtn');
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener('click', answerButtons);
    }
}

function initiateGameTimer() {
CounterInterval = setInterval(function () {
    timerVal--;
    //* get the span id='time' from html

    timeSpan.innerText = time;
    timer.classList.add('show');

    // when timer is 0
    if (timerVal <= 0) {
    end();
    if (soundToggle.checked) {
        quizOverTimer.play();
    }
    setTimeout(() => {
        let title = document.querySelector('#end-screen p');
        let subtitle = document.createElement('span');
        subtitle.setAttribute('class', 'subtitle');
        subtitle.textContent = `Time is up! `;
        endScreen.insertBefore(subtitle, title);
    }, 250);
    }
}, 1000);
}
// end screen
function end() {
  // If quiz is done, stop timer, update score on Complete section
clearInterval(interval);
document.getElementById("finalScore").textContent = timerVal.toString();

  //* set timer to 0
timerVal = 0;
questionsDiv.classList.add('hide');
endScreen.classList.remove('hide');
setTimeout(() => {
inputGroup.forEach((el) => el.classList.add('show'));
}, 200);
finalScore.textContent = score;
scores(score);
}

    // Hide everything, then determine which sections to unhide
    hideAll();

    // Advance to next page
    document.getElementsByName(nextPg.toString())[0].hidden = false;


