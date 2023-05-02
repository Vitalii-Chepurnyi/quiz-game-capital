
/**
 * display array of questions, choices and answers
 */
let quiz = [
    {
        question: "Ireland",
        choices: ['London','Lviv','Paris','Dublin'],
        answer: "Dublin"
    },
    {
        question: "Poland",
        choices: ['Washington','Odessa','Warsaw','New York'],
        answer: "Warsaw"
    },
    {
        question: "Italy",
        choices: ['Rome','Milan','Cork','Berlin'],
        answer: "Rome"
    },
    {
        question: "Ukraine",
        choices: ['Zlin','Kyiv','Modlin','Bundoran'],
        answer: "Kyiv"
    },
    {
        question: "Cannada",
        choices: ['Toronto','Chicago','Vegas','Tibilisi'],
        answer: "Toronto"
    }
];

let currentQuestion = 0;
let score = 0;

/**
 * changing choices for user and when clicked 
 * calling function checkAnswer
 */
function displayQuestion() {
    let countryName = document.getElementById('country-name');
    let choiceName = document.querySelectorAll('#choices button');

    let currentQuiz = quiz[currentQuestion];
    countryName.textContent = currentQuiz.question;

    for (let i = 0; i < choiceName; i++) {
        choiceName[i].textContent = currentQuiz.choices[i];
        choiceName[i].addEventListener('click', checkAnswer);
    }
}

/**
 * checking correct answer
 */
function checkAnswer() {
    let userChoice = this.textContent;
    let currentQuiz = quiz[currentQuestion];

    if (userChoice === currentQuiz.answer) {
        alert('Good Job!')
        incrementScore();
    } else {
        alert('Sorry Wrong Answer :(')
        incrementWrongAnswer();
    }
}

/**
 * adding score from checking an answer
 */
function incrementScore() {
    let oldscore = perseInt(document.getElementById('score').innetText);
    document.getElementById('score').innerText = ++oldscore;

}

/**
 * adding incorrect score from checking answer
 */
function incrementWrongAnswer() {
    let oldscore = perseInt(document.getElementById('incorrect').innetText);
    document.getElementById('incorrect').innerText = ++oldscore;
}