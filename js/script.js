
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
            {text: "", correct: },
            {text: "A bull", correct: true},
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "What was the original color for all Ferrari models?",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "Red", correct: true},
            {text: "", correct: },
        ],
    },
    {
        question: "Which iconic car manufacturer also made airplane engines?",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "Rolls Royce", correct: true},
        ],
    },
    {
        question: "Who was a driver for Alpha Romeo before founding his own company?",
        answers: [
            {text: "Enzo Ferrari", correct: true},
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "What is the world`s all-time best selling car?",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "Toyota Corolla", correct: true},
            {text: "", correct: },
        ],
    },
    {
        question: "Who designed the Volkswagen Beetle?",
        answers: [
            {text: "Ferdinand Porsche", correct: true},
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "In which year did Henry Ford establish the Ford Motor Company?",
        answers: [
            {text: "", correct: },
            {text: "1903", correct: true},
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "Which sports car features in the Back To The Future trilogy?",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "DeLorean", correct: true},
            {text: "", correct: },
        ],
    },
    {
        question: "What does Volkswagen mean?",
        answers: [
            {text: "The `people`s car`", correct: true},
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "What is the best-selling electric car in history?",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "The Tesla Model 3", correct: true},
        ],
    },
];