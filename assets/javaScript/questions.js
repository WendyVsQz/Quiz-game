
// 1. generateQuiz function

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 2. display question and answers
    function questions (questions, quizContainer){

        var questions = [
            {
                prompt:"Which planet has the most moons?\n(a) saturn \n\(b) venus \n(c)jupiter",
                answer:"Saturn"
            },
        
            {
                prompt:"What part of a plant conducts photosynthesis?\n(a) root \n\(b) leaf \n(c)stalk",
                answer:"leaf"
            },
        
            {
                prompt:"How many elements are in the periodic table?\n(a) 100 \n\(b) 97 \n(c)118",
                answer:"118"
            },
        
            {
                prompt:"Where is the smallest bone in the human body located?\n(a) phalanges \n\(b) femur  \n(c)stapes",
                answer:"stapes"
            },
        
            {
                prompt:"How many hearts does an octopus have?\n(a) 5 \n\(b) 3 \n(c)1",
                answer:"3"
            },
        ];
    }
}
    function showQuestions(question, quizContainer){
    
    var output = [];
    var answers;
    // for each question...
    for(letter in questions[i].answers){
        answers.push(
            '<label>'
            +'<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
        + '</label>'
    );
}

// add this question and its answers to the output
output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
);
}

// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = output.join('');






// 3. for loop wrong or correct

var score =0;
for(var i=0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response === questions[i].answer){
    score++;
    alert("correct");
    } else {
    alert("wrong");
    }
}
alert("you got" + score + "/" + questions.length);

