/* 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura) */
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

let selectedPlay;
rockOption.addEventListener('click', () => {
  selectedPlay = rockOption.outerText;
  rockOption.classList.toggle('selected');
  papperOption.classList.remove('selected');
  scissorOption.classList.remove('selected');
  console.log(selectedPlay);
})

papperOption.addEventListener('click', () => {
  selectedPlay = papperOption.outerText;
  papperOption.classList.toggle('selected');
  rockOption.classList.remove('selected');
  scissorOption.classList.remove('selected');
  console.log(selectedPlay);
})

scissorOption.addEventListener('click', () => {
  selectedPlay = scissorOption.outerText;
  scissorOption.classList.toggle('selected');
  rockOption.classList.remove('selected');
  papperOption.classList.remove('selected');
  console.log(selectedPlay);
})
const optionsForEnemyPlay = [
  'rock',
  'papper',
  'scissor'
];


playButton.addEventListener('click', roundPlay);

function roundPlay() {
  const index = Math.floor(Math.random() * optionsForEnemyPlay.length);
  const enemyPlay = optionsForEnemyPlay[index];
  enemyOption.innerHTML = enemyPlay;
  
  let isWin = (selectedPlay == 'papper' && enemyPlay == 'rock') || (selectedPlay == 'scissor' && enemyPlay == 'papper') || (selectedPlay == 'rock' && enemyPlay == 'scissor');
  
  if (selectedPlay == enemyPlay) {
    result.innerText = 'Draw';
  } else if (isWin) {
    result.innerText = 'Win';
  } else {
    result.innerText = 'Fail'
  }
}
