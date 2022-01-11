
var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var timerCount = document.querySelector(".timer-count");
var questionContainerE1 = document.querySelector("#question-container");
var questionE1 = document.querySelector("#questions");
var answerButtonsE1 = document.querySelector("#answer-btns");
var instructions = document.querySelector(".instructions");
var form = document.querySelector("#form");
var scoreText = document.querySelector("#enter-score-text");

var timer;
var timeLeft;

var randomizeQuestion;
var questionPointer;

var questions = [
    {
        question: "Which animal features in the logo for Lamborghini?",
        answers: [
            {text: "A Bison", correct: false},
            {text: "A bull", correct: true},
            {text: "A Cow", correct: false},
            {text: "A Horse", correct: false},
        ],
    },
    {
        question: "What was the original color for all Ferrari models?",
        answers: [
            {text: "Yellow", correct: false},
            {text: "Black", correct: false},
            {text: "Red", correct: true},
            {text: "Blue", correct: false},
        ],
    },
    {
        question: "Which iconic car manufacturer also made airplane engines?",
        answers: [
            {text: "Ferrari", correct: false},
            {text: "Nissan", correct: false},
            {text: "Kia", correct: false},
            {text: "Rolls Royce", correct: true},
        ],
    },
    {
        question: "Who was a driver for Alpha Romeo before founding his own company?",
        answers: [
            {text: "Enzo Ferrari", correct: true},
            {text: "Ugo Sivocci", correct: false},
            {text: "Antonio Ascari", correct: false},
            {text: "Tazio Nuvolari", correct: false},
        ],
    },
    {
        question: "What is the world`s all-time best selling car?",
        answers: [
            {text: "Tesla Model 3", correct: false},
            {text: " Honda Accord", correct: false},
            {text: "Toyota Corolla", correct: true},
            {text: "Kia Spectra", correct: false},
        ],
    },
    {
        question: "Who designed the Volkswagen Beetle?",
        answers: [
            {text: "Ferdinand Porsche", correct: true},
            {text: "Laurens van den Acker", correct: false},
            {text: "Dirk van Braeckel", correct: false},
            {text: "Omer Halilhodžić", correct: false},
        ],
    },
    {
        question: "In which year did Henry Ford establish the Ford Motor Company?",
        answers: [
            {text: "1904", correct: false},
            {text: "1903", correct: true},
            {text: "1895", correct: false},
            {text: "1945", correct: false},
        ],
    },
    {
        question: "Which sports car features in the Back To The Future trilogy?",
        answers: [
            {text: "Celica", correct: false},
            {text: "Mustang", correct: false},
            {text: "DeLorean", correct: true},
            {text: "Camaro", correct: false},
        ],
    },
    {
        question: "What does Volkswagen mean?",
        answers: [
            {text: "The `people`s car`", correct: true},
            {text: "Human`s car", correct: false},
            {text: "Everyone`s car", correct: false},
            {text: "Future car", correct: false},
        ],
    },
    {
        question: "What is the best-selling electric car in history?",
        answers: [
            {text: "Studebaker Electric", correct: false},
            {text: "Detroit Electric", correct: false},
            {text: "Sebring-Vanguard Citicar", correct: false},
            {text: "The Tesla Model 3", correct: true},
        ],
    },
];




startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);

function startGame() {
    startButton.classList.add("hide");
    instructions.classList.add("hide");
    questionContainerE1.classList.remove("hide");
    nextButton.classList.remove("hide");
    form.classList.add("hide");

    timeLeft = 60;
    countDown();
    
    randomizeQuestion = questions.sort(() => Math.random()  - .5);
     questionPointer = 0;

     showQuestion();
}

function countDown() {

    timer = setInterval(function() {
    
        if (timeLeft > 0) {
            timerCount.textContent = timeLeft + "Seconds";
            timeLeft --;

        } if (timeLeft === 0) {
            clearInterval(timer);
            // trigger loseGame();
            questionContainerE1.classList.add("hide");
            startButton.classList.remove("hide");
            instructions.classList.remove("hide");
            nextButton.classList.add("hide");

            instructions.textContent=("YOU LOSE! TRY AGAIN");
        }
    }, 1000); 

} 


function showQuestion(questions) {
    questionE1.innerText = questions.questions;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", answerQuestion);
        answerButtonsE1.appendChild(button);
    });
}

function resetButton () {
    nextButton.classList.add("hide");
    while (answerButtonsE1.firstChild) {
        answerButtonsE1.removeChild (answerButtonsE1.firstChild)
    }
}



function answerQuestion (event) {
    var buttonE1 = event.target;
    var correct = buttonE1.dataset.correct;
    setCorrectAnswer(document.body, correct)
    Array.from(answerButtonsE1.children).forEach(button => {
        setCorrectAnswer(button, button.dataset.correct)
    })

    if(randomizeQuestion.length > questionPointer +1 ) {
        nextButton.classList.remove("hide");
    } else {
        var score = timeLeft +1;
        form.classList.remove("hide");
        scoreText.innerText = ("Enter Initials to Save Score" + score)
        startButton.innerText = ("Restart");
        startButton.classList.remove("hide");
        clearInterval(timer);
        return score;
    }
    console.log(correct);

    if (!correct === true) {
        console.log(timeLeft);
        timeLeft = timeLeft - 10;
        console.log(timeLeft);
    }
}


function clearAnswer (element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}


function nextQuestion () {
    questionPointer++;
    showQuestion ();
}

var userInitial = document.querySelector("#userinput.value");
var submitScoreBtn = document.querySelector("#high-score-btn");

submitScoreBtn.addEventListener("click", saveScore);

function saveScore () {
    localStorage.setItem("userInitialInput", JSON.stringify(userInitial));
}