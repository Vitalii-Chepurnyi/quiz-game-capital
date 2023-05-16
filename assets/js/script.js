const startButton = document.getElementById('start-button');
const contentMain = document.getElementById('main-content');
const contentScore = document.getElementById('scoreboard');
const refreshButton = document.getElementById('refresh');
const questionElement = document.getElementById('country');
const answerButtons = document.getElementsByClassName('answer-button');
const nextButton = document.getElementById('submit');

refreshButton.addEventListener('click', refreshPage);
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuiz);


let shuffledQuestions, currentQuestionIndex
let score = 0;


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
    nextQuizQuestions()
}

function nextQuizQuestions() {
    if (currentQuestionIndex !== undefined) {
        checkAnswer();
    }
    showQuestion(questions[getRandomArbitrary(0, questions.length - 1)]);
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach((answer, index) => {
        const answerButton = answerButtons[index]

        answerButton.innerText = answer.text;
        if (answer.correct) {
            answerButton.dataset.correct = answer.correct
        }
      });

      enableAnswerButtons();
      hideNextButton();
}

function checkAnswer() {
    const selectedButton = document.querySelector('.answer-button.selected');
    if (!selectedButton) {
        return; // No answer selected
    }

    const selectedAnswer = selectedButton.innerText.trim();
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);

    if (selectedAnswer === correctAnswer.text) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    disableAnswerButtons();
    showNextButton();
}

function nextQuiz() {
    showQuestion(questions[getRandomArbitrary(0, questions.length - 1)]);
    hideNextButton();
    nextQuizQuestions();
}



for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function() {
         checkAnswer(this);
        });
     }

     
    
function disableAnswerButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].disabled = true;
    }
}
    
function showNextButton() {
    nextButton.classList.remove('hide');
}
    
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
       clearAnswerButtons();
    hideNextButton();
    
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            // Quiz finished, display final score or perform any other actions
            displayScore();
        }
    });
    
    function clearAnswerButtons() {
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].classList.remove('correct', 'wrong');
            answerButtons[i].disabled = false;
        }
    }
    
    function hideNextButton() {
        nextButton.classList.add('hide');
    }
    
    function displayScore() {
        // Display the final score or perform any other actions
        console.log('Your score:', score);
    }

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