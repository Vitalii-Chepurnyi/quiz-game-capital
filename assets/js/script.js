const startButton = document.getElementById('start-button');
const contentMain = document.getElementById('main-content');
const contentScore = document.getElementById('scoreboard');
const refreshButton = document.getElementById('refresh');
const questionElement = document.getElementById('country');
const answerButtons = document.getElementsByClassName('answer-button');
const nextButton = document.getElementById('next');
const incorrectElement = document.getElementById('incorrect');
const scoreElement = document.getElementById('score');
const endTotalScore = document.getElementById('totalscore');
const endFailedScore = document.getElementById('failedscore');
const displayPassGame = document.getElementById('passendofgame');
const displayFailedGame = document.getElementById('failedendofgame');

let score = 0;
let incorrect = 0;
let questionIndex = 0;

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

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function startQuiz() {
    startButton.classList.add('hide');
    contentMain.classList.remove('hide');
    contentScore.classList.remove('hide');
    nextButton.disabled = true;
    nextQuizQuestions();
}

function nextQuizQuestions() {
    showQuestion(questions[getRandomArbitrary(0, questions.length - 1)]);

    if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
        questionIndex++;
    } else {
        endQuiz();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach((answer, index) => {
        const answerButton = answerButtons[index]
        answerButton.innerText = answer.text;
        resetAnswerButton(answerButton);

        answerButton.innerText = answer.text;
        if (answer.correct) {
            answerButton.dataset.correct = answer.correct
        }

        answerButton.addEventListener('click', selectAnswer);
    })
}

function resetAnswerButton(answerButton) {
    answerButton.classList.remove('incorrect');
    answerButton.classList.remove('correct');
    answerButton.disabled = false;
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
        scoreElement.innerText = score;
    } else {
        selectedButton.classList.add('incorrect');
        incorrect++;
        incorrectElement.innerText = incorrect;
    }

    Array.from(answerButtons).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct) {
            button.classList.add('correct');
        } else if (!button.classList.contains('incorrect')) {
            button.classList.add('disabled');
        }
    })

    nextButton.disabled = false;
}

function endQuiz() {
    contentMain.classList.add('hide');
    contentScore.classList.add('hide');
    nextButton.disabled = true;
    showTotalScore();
}

function showTotalScore() {
    if (score === 5) {
        endTotalScore.innerText = score;
        displayPassGame.style.display = "block";
    } else {
        endFailedScore.innerText = score;
        displayFailedGame.style.display = "block";
    }
    alert(`Your correct answers: ${score}, Your wrong answers: ${incorrect}`)
}

nextButton.addEventListener('click', () => {
    nextQuizQuestions();
    nextButton.disabled = true;
})