/* ===== DOM Elements ======= */
const enemyOption = document.querySelector('.enemyOption');
const rockOption = document.querySelector('.rock');
const papperOption = document.querySelector('.papper');
const scissorOption = document.querySelector('.scissor');
const playButton = document.getElementById('playButton');
const resetPlayButton = document.getElementById('resetPlayButton');
const newPlayButton = document.getElementById('newMatchButton');
const playerScore = document.querySelector('span#playerScore');
const enemyScore = document.querySelector('span#enemyScore');
const lastScore = document.querySelector('div#lastScore');
const enemyLastPlay = document.querySelector('div#enemyLastPlay');
const playerLastPlay = document.querySelector('div#playerLastPlay');
const result = document.querySelector('.roundResult');
const modalCloseButton = document.querySelector('.modalButton');
const modal = document.querySelector('.modal');
const matchResult = document.querySelector('.matchResult');

let playerScoreCounter = 0;
let enemyScoreCounter = 0;

playerScore.innerHTML = 0;
enemyScore.innerHTML = 0;

let selectedPlay;

function resetMatch() {
  playerScoreCounter = 0;
  enemyScoreCounter = 0;
  updateScore();
  rockOption.classList.remove('selected');
  papperOption.classList.remove('selected');
  scissorOption.classList.remove('selected');
  result.innerText = '';
}

function updateScore() {
  playerScore.innerHTML = playerScoreCounter;
  enemyScore.innerHTML = enemyScoreCounter;
  checkWinner();
}

function checkWinner() {
  if (playerScoreCounter === 3 || enemyScoreCounter === 3) {
    modal.classList.add('active');
    if (playerScoreCounter === 3) {
      matchResult.innerHTML = 'Congratulations! You are the winner!';
    } else {
      matchResult.innerHTML = 'Oh no, You lost!';
    }
  } else if (
    (playerScoreCounter === 2 && enemyScoreCounter === 0) ||
    (playerScoreCounter === 0 && enemyScoreCounter === 2)
  ) {
    modal.classList.add('active');
    if (playerScoreCounter === 2) {
      matchResult.innerHTML = 'Congratulations! You are the winner!';
    } else {
      matchResult.innerHTML = 'Oh no, You lost!';
    }
  }
}

modalCloseButton.addEventListener('click', () => {
  resetMatch();
  modal.classList.remove('active');
});

resetPlayButton.addEventListener('click', resetMatch);

rockOption.addEventListener('click', () => {
  selectedPlay = rockOption.outerText;
  rockOption.classList.toggle('selected');
  papperOption.classList.remove('selected');
  scissorOption.classList.remove('selected');
  console.log(selectedPlay);
});

papperOption.addEventListener('click', () => {
  selectedPlay = papperOption.outerText;
  papperOption.classList.toggle('selected');
  rockOption.classList.remove('selected');
  scissorOption.classList.remove('selected');
  console.log(selectedPlay);
});

scissorOption.addEventListener('click', () => {
  selectedPlay = scissorOption.outerText;
  scissorOption.classList.toggle('selected');
  rockOption.classList.remove('selected');
  papperOption.classList.remove('selected');
  console.log(selectedPlay);
});

const optionsForEnemyPlay = ['rock', 'papper', 'scissor'];

playButton.addEventListener('click', roundPlay);

function roundPlay() {
  const index = Math.floor(Math.random() * optionsForEnemyPlay.length);
  const enemyPlay = optionsForEnemyPlay[index];
  enemyOption.innerHTML = enemyPlay;

  let isWin =
    (selectedPlay == 'papper' && enemyPlay == 'rock') ||
    (selectedPlay == 'scissor' && enemyPlay == 'papper') ||
    (selectedPlay == 'rock' && enemyPlay == 'scissor');

  if (selectedPlay == enemyPlay) {
    result.innerText = 'Draw';
  } else if (isWin) {
    result.innerText = 'Win';
    playerScoreCounter += 1;
    updateScore();
  } else {
    result.innerText = 'Fail';
    enemyScoreCounter += 1;
    updateScore();
  }
}
