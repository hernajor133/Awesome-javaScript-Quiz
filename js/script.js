
var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var timerCount = document.querySelector(".timer-count");
var questionContainerE1 = document.querySelector("#question-container");
var questionE1 = document.querySelector("#question");
var answerButtonsE1 = document.querySelector("#answer-btns");
var instructions = document.querySelector(".instructions-text");
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