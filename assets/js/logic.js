let timeleft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector("number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer =  document.querySelector("score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector("start-screen");
let startButton = document.getElementById("start-button");
//------------------------------------------------------
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
//-------------------------------------------------------
const questions = [
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

//hide listener
restart.addEventListener("click", () =>{
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//questions display
nextBtn.addEventListener("click", (displayNext = ()=> {
    questionCount += 1;
    if (questionCount == questions.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your score is" + 
        scoreCount + "out of" + questions.length + "Question"
    }
}))