const startButton = document.getElementById('start-button');
const contentMain = document.getElementById('main-content');
const contentScore = document.getElementById('scoreboard');
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', refreshPage);
startButton.addEventListener('click', startQuiz);

function refreshPage() {
    window.location.reload();
}


function startQuiz() {
    startButton.classList.add('hide');
    contentMain.classList.remove('hide');
    contentScore.classList.remove('hide');
    console.log(startButton);
}

function nextQuizQuestions() {

}

function selectAnswer() {

}