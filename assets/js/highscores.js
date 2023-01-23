
var highScores=[] // initialization
getHighScores(); // retrieve high score list from local storage
setAnswerButtons(); // add event listeners to all answer buttons

// Add event listeners to the rest of the buttons
document.getElementById("highScoresBtn").addEventListener("click", displayHighScores);
document.getElementById("goBackBtn").addEventListener("click", goBack);
document.getElementById("clearScores").addEventListener("click", clearHighscores);
document.getElementById("initialsBtn").addEventListener("click", saveInitials);

// Onclick event for "View Highscores" button on navigation bar
function displayHighScores() {
    var highscoresSection = document.getElementById("highscores");
    var highscoresList = document.getElementById("highscoreList");

    clearInterval(interval); // Just in case timer is running

    // Delete current list items
    clearHighscoresList();

    // Create list items for each high scorer
    for (var i=0; i < highScores.length; i++) {
        var newListItem = document.createElement("li");
        newListItem.textContent = highScores[i];
        highscoresList.appendChild(newListItem);
    }

    // Hide all sections, including navigation bar, then unhide highscores section
    hideAll();
    document.querySelector("nav").hidden = true;
    highscoresSection.hidden = false;
}

// Onclick event for "Go Back" button on Highscores section
function goBack() {
    // Reset timer
    timerVal = 75;
    document.getElementById("timerValue").textContent = timerVal.toString();

    // Hide all sections, then unhide navigation bar and welcome section
    hideAll();
    document.querySelector("nav").hidden = false;
    document.getElementById("welcome").hidden = false;
}
// Retrieves highscore list from localstorage, if it's there
function getHighScores() {
    var hsList = JSON.parse(localStorage.getItem(hsStorage));

    if (hsList) {
        highScores = hsList;
    }
}

// Stores highscore list to localstorage
function setHighScores() {
    localStorage.setItem(hsStorage, JSON.stringify(highScores));
}
// Onclick event for "Submit" button on Complete section
function saveInitials() {
    var initialsInput = document.getElementById("initials"); // get Input element
    var score = 0; // for retrieving scores from highScores list
    var newIndex = 0; // index of new high score

    // Determine where in the list the new initials belong
    for (newIndex=0; newIndex < highScores.length; newIndex++) {
        // get just the score out of the string
        score = parseInt(highScores[newIndex].substr(-2));
        // If current score (timerVal) is greater than the indexed score, we've found where it goes
        if (timerVal > score) {
            break;
            }
        }
    }

// Removes list items from Highscores section
function clearHighscoresList() {
    var highscoresList = document.getElementById("highscoreList");

    // Delete each list item until none remain
    while (highscoresList.childNodes.length > 0) {
        highscoresList.removeChild(highscoresList.childNodes[0]);
    }
}

// Onclick event for "Clear Highscores" button on Highscores section
function clearHighscores() {
    // Delete each list item form Highscores section
    clearHighscoresList();
    
    // Clear highscores list and write to localstorage
    highScores = [];
    setHighScores();
}
highScores.splice(newIndex, 0, initialsInput.value + " - " + timerVal.toString()); // add high score to beginning
    initialsInput.value = ""; // clear Input element
    setHighScores(); // save new highscores list to localstorage
    displayHighScores(); // display the highscores
