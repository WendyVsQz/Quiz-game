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
        id: "0",
        question:'Which planet has the most moons?',
        choices: ["saturn","venus", "jupiter" ],
        answer: 'Saturn',
    },

    {
        id: "1",
        question:'What part of a plant conducts photosynthesis?', 
        choices: ["root", "leaf", "stalk"],
        answer: 'leaf',
    },

    {
        id: "2",
        question: 'How many elements are in the periodic table?choice1',
        choices: [100, 97, 118],    
        answer: 118,
    },

    {
        id: "3",
        question:'Where is the smallest bone in the human body located?',
        choices: ["phalanges", "femur", "stapes"],
        answer: 'stapes',
    },

    {
        id: "4",
        question:'How many hearts does an octopus have?',
        choices: [5, 3, 1],    
        answer: 3,
    },
];

    restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
})

//questions display
    nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;
    if (questionCount == questions.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your score is" + 
        scoreCount + "out of" + questionCount;
    } else {
        countOfQuestion.innerHTML = questionCount + 1 +
        "of" + questions.length + "Question";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }    
}));    

//Timer activation
const timerDisplay = () => {
    countdown = setInterval(() => {
        count --;
        timeleft.innerHTML = `${count}s`;
        if (count == 0) {
    clearInterval(countdown);        
    displayNext();
        }
    }, 1000);    
};    
// shuffle cards
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });    
    quizCards[questionCount].classList.remove("hide");
};    
// getting random questions
function quizCreater() {
    questions.sort(() => Math.random() - 0.5);
    
    for (let i of questions) {
        i.choices.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
//question count
        countOfQuestion.innerHTML = 1 + "of" +
        questions.length + "Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick = "checker(this)">
            ${i.choices[0]}
        </button>    
        <button class="option-div" onclick="checker(this)">
            ${i.choices[1]}
        </button>    
        <button class="option-div" onclick="checker(this)">
            ${i.choices[2]}
        </button>    
        <button class="option-div" onclick="checker(this)">
            ${i.choices[3]}
        </button>    
    `;    
    quizContainer.appendChild(div);
    }
}    
//Checking options
    function checker(userOption) {
        let userSolution = userOption.innerText;
        let question = document.getElementsByClassName
        ("container") [questionCount];
        let choices = question.querySelectorAll
        ("option-div");

        if(userSolution === questions[questionCount].
            answer) {
                userOption.classList.add("correct");
                scoreCount++;
            }else{
                userOption.classList.add("incorrect");
                
                choices.forEach((element)=>{
                    if (element.innerText = questions[questionCount].answer){
                            element.classList.add("correct");
                        }    
                });        
            }     

            clearInterval(countdown);
            options.forEach((element) =>{
                element.disabled = true;
            });    
    }        

    function initial(){
        quizContainer.innerHTML = "";
        questionCount = 0;
        scoreCount = 0;
        scoreCount = 0;
        count = 11;
        clearInterval(countdown);
        timerDisplay();
        quizDisplay(questionCount);
    }

    startButton.addEventListener("click", () => {
        startButton.classList.add("hide");
        displayContainer.classList.remove("hide");
        initial();
    });

    window.onload = () =>{
    startButton.classList.remove("hide");
    displayContainer.classList.add("hide");
    }   
    
            