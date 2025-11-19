// This file contains JavaScript code specific to the game functionality, handling game logic and user interactions.

let score = 0;
let currentQuestionIndex = 0;
let questions = [];

// Fetch questions from the server
async function fetchQuestions() {
    const response = await fetch('/api/game/getQuestion.php');
    questions = await response.json();
    displayQuestion();
}

// Display the current question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        optionsElement.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-button');
            button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer);
            optionsElement.appendChild(button);
        });
    } else {
        endGame();
    }
}

// Check the selected answer
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

// End the game and show the score
function endGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `<h2>Your Score: ${score}</h2>`;
    // Optionally, send the score to the server
}

// Initialize the game
function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    fetchQuestions();
}

// Event listener for starting the game
document.getElementById('start-button').addEventListener('click', startGame);