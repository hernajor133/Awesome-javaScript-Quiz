
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
        question: "",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
    {
        question: "",
        answers: [
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
            {text: "", correct: },
        ],
    },
];