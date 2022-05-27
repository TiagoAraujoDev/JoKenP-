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
const switchToggle = document.querySelector('.switch');

let playerScoreCounter = 0;
let enemyScoreCounter = 0;
let selectedPlay;

playerScore.innerHTML = 0;
enemyScore.innerHTML = 0;

function resetMatch() {
  playerScoreCounter = 0;
  enemyScoreCounter = 0;
  updateScore();
  selectedPlay = undefined;
  rockOption.classList.remove('selected');
  papperOption.classList.remove('selected');
  scissorOption.classList.remove('selected');
  result.innerText = ``;
  enemyOption.innerHTML = ``;
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
      matchResult.innerHTML = `<p style="text-align: center">Congratulations! You are the winner!</p>`;
      lastScore.innerHTML += `<p>${playerScore.outerText} x ${enemyScore.outerText}</p>`;
    } else {
      matchResult.innerHTML = `<p style="text-align: center">Oh no, You lost!</p>`;
      lastScore.innerHTML += `<p>${playerScore.outerText} x ${enemyScore.outerText}</p>`;
    }
  } else if (
    (playerScoreCounter === 2 && enemyScoreCounter === 0) ||
    (playerScoreCounter === 0 && enemyScoreCounter === 2)
  ) {
    modal.classList.add('active');
    if (playerScoreCounter === 2) {
      matchResult.innerHTML = `<p style="text-align: center">Congratulations! You are the winner!</p>`;
      lastScore.innerHTML += `<p>${playerScore.outerText} x ${enemyScore.outerText}</p>`;
    } else {
      matchResult.innerHTML = `<p style="text-align: center">Oh no, You lost!</p>`;
      lastScore.innerHTML += `<p>${playerScore.outerText} x ${enemyScore.outerText}</p>`;
    }
  }
}

rockOption.addEventListener('click', () => {
  if (selectedPlay === 'rock') {
    selectedPlay = undefined;
    rockOption.classList.remove('selected');
  } else {
    selectedPlay = rockOption.outerText;
    rockOption.classList.toggle('selected');
    papperOption.classList.remove('selected');
    scissorOption.classList.remove('selected');
    console.log(selectedPlay);
  }
});

papperOption.addEventListener('click', () => {
  if (selectedPlay === 'papper') {
    selectedPlay = undefined;
    papperOption.classList.remove('selected');
  } else {
    selectedPlay = papperOption.outerText;
    papperOption.classList.toggle('selected');
    rockOption.classList.remove('selected');
    scissorOption.classList.remove('selected');
    console.log(selectedPlay);
  }
});

scissorOption.addEventListener('click', () => {
  if (selectedPlay === 'scissor') {
    selectedPlay = undefined;
    scissorOption.classList.remove('selected');
  } else {
    selectedPlay = scissorOption.outerText;
    scissorOption.classList.toggle('selected');
    rockOption.classList.remove('selected');
    papperOption.classList.remove('selected');
    console.log(selectedPlay);
  }
});

modalCloseButton.addEventListener('click', () => {
  resetMatch();
  modal.classList.remove('active');
});

resetPlayButton.addEventListener('click', resetMatch);

const optionsForEnemyPlay = ['rock', 'papper', 'scissor'];

playButton.addEventListener('click', roundPlay);

function roundPlay() {
  if (selectedPlay === undefined) {
    modal.classList.add('active');
    matchResult.innerHTML = `<p style="color: red;text-align: center">INVALID PLAY! Select an option!</p>`;
  } else {
    const index = Math.floor(Math.random() * optionsForEnemyPlay.length);
    const enemyPlay = optionsForEnemyPlay[index];
    enemyOption.innerHTML = enemyPlay;
    enemyLastPlay.innerText = enemyPlay;
    playerLastPlay.innerText = selectedPlay;

    let isWin =
      (selectedPlay == 'papper' && enemyPlay == 'rock') ||
      (selectedPlay == 'scissor' && enemyPlay == 'papper') ||
      (selectedPlay == 'rock' && enemyPlay == 'scissor');

    if (selectedPlay == enemyPlay) {
      result.innerHTML = `<p>Draw</p>`;
    } else if (isWin) {
      result.innerHTML = `<p>Win</p>`;
      playerScoreCounter += 1;
      updateScore();
    } else {
      result.innerHTML = `<p>Fail</p>`;
      enemyScoreCounter += 1;
      updateScore();
    }
  }
}

newPlayButton.addEventListener('click', () => {
  resetMatch();
  lastScore.innerHTML = ``;
});

switchToggle.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('lightMode');
})
