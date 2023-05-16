const startButton = document.getElementById('start-button');
const contentMain = document.getElementById('main-content');
const contentScore = document.getElementById('scoreboard');
const refreshButton = document.getElementById('refresh');
const questionElement = document.getElementById('country');
const answerButtons = document.getElementsByClassName('answer-button');
const nextButton = document.getElementById('submit');

refreshButton.addEventListener('click', refreshPage);
startButton.addEventListener('click', startQuiz);

const questions = [
    {
        question: 'Ireland',
        answers: [
            { text: 'Dublin', correct: true },
            { text: 'Porto', correct: false },
            { text: 'Yalta', correct: false },
            { text: 'Krakow', correct: false }
        ]
    },
    {
        question: 'Germany',
        answers: [
            { text: 'Berlin', correct: true },
            { text: 'Koln', correct: false },
            { text: 'London', correct: false },
            { text: 'Lviv', correct: false }
        ]
    },
    {
        question: 'France',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Oslo', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Venice', correct: false }
        ]
    },
    {
        question: 'Poland',
        answers: [
            { text: 'Warsaw', correct: true },
            { text: 'Cork', correct: false },
            { text: 'Washington', correct: false },
            { text: 'New York', correct: false }
        ]
    },
    {
        question: 'Spain',
        answers: [
            { text: 'Barcelona', correct: true },
            { text: 'Pekin', correct: false },
            { text: 'Tibilicy', correct: false },
            { text: 'Kyiv', correct: false }
        ]
    }
]

function refreshPage() {
    window.location.reload();
}

function startQuiz() {
    startButton.classList.add('hide');
    contentMain.classList.remove('hide');
    contentScore.classList.remove('hide');
    console.log('startquiz')
}

function nextQuizQuestions() {

}

function showQuestion() {

}

function nextQuiz() {

}

function checkAnswer() {

}