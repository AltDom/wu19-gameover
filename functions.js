'use strict';

const btnNewGame = document.querySelector('.btn--new-game');
const playerBtns = document.querySelectorAll('.player-btns');
const playerForm = document.querySelector('.player-form');
const scoreBoard = document.querySelector('.score-board');
const spaceBarText = document.querySelector('.objectives__space-bar');
const objectivesDiv = document.querySelector('.objectives');
const startScreen = document.querySelector('.start-screen');
const gameScreen = document.getElementById('game-screen');
const winLimit = document.querySelector('.objectives__win-limit span');
let inputEls, inputElsArray = [], winningPlayer;

const initialiseVariables = () => {
  curveCount = 0;
  curves = [];
  const canvas = createCanvas(width, height);
  canvas.parent('game-screen');
  frameRate(50);
  createCurve();
}

const resetGame = () => {
  initialiseVariables();
  for (let i = 0; i < inputElsArray.length; i++) {
    currentPlayers[i] = players[i];
  }
  noLoop();
  isReset = true;
}

const startGame = () => {
  gameOver = false;
  resetGame();
  spaceBarText.style.visibility = "hidden";
  isFirstInitialise = false;
  loop();
};

const createCurve = () => {
  for (let i = 0; i < inputElsArray.length; i++) {
    curves[i] = new Curve(
      players[i].color,
      players[i].startingX,
      players[i].startingY,
      players[i].leftKey,
      players[i].rightKey,
      players[i].id
    );
  }
};

const choosePlayers = (e) => {
  playerForm.innerHTML = '';
  const playerNumbers = parseInt(e.target.dataset.numPlayers);

  for (let i = 1; i <= playerNumbers; i++) {
    const input = `
      <input type="text" class="player-form__player${i}" 
      placeholder="Player ${i}" autocomplete="off" >
      `;
    playerForm.innerHTML += input;
  }
  const numberRoundsInput = `
    <p>First to reach 
      <input type="text" class="player-form__rounds" 
      value="10" autocomplete="off"> 
    rounds</p>
  `;
  playerForm.innerHTML += numberRoundsInput;

  createStartButton();
};

const createStartButton = () => {
  inputEls = playerForm.querySelectorAll('input');
  inputElsArray = Array.from(inputEls);
  inputElsArray.pop();

  inputEls.forEach((input) => {
    input.addEventListener('keyup', () => {
      const hasValue = (currentValue) => currentValue.value !== '';
      const btnStartGame = document.querySelector('.btn--start-game');

      if (!btnStartGame && inputElsArray.every(hasValue)) {
        const btnStartGame = document.createElement('button');
        btnStartGame.classList.add('btn', 'btn--start-game');
        btnStartGame.textContent = 'Start Game';
        playerForm.appendChild(btnStartGame);
        btnStartGame.addEventListener('click', createScoreBoard);
      }
    });
  });
};

const createScoreBoard = (e) => {
  e.preventDefault();
  inputElsArray.forEach((input, i) => {
    const p = `<p class="score-board__player${i + 1}">${input.value}: <span>0</span></p>`;
    scoreBoard.innerHTML += p;
    players[i].playerName = input.value; 
  });

  const numberRounds = document.querySelector('.player-form__rounds');
  winLimit.textContent = `${numberRounds.value}`;
  resetGame(); // Initialises chosen number of curves onto the gameboard
  startScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
};

const updateScoreBoard = () => {
  const playerScoreSpan = document.querySelector(`.score-board__player${winningPlayer.id} span`);
  playerScoreSpan.textContent = winningPlayer.score;
  if (gameIsFinished()) {
      celebrateWinner(winningPlayer);
  }
}

const gameIsFinished = () => {
   const loosingPlayers = players.filter(
     (player) => player.id !== winningPlayer.id
   );
   const hasWonByTwo = (el) => el.score + 2 <= winningPlayer.score;
   if (
     winningPlayer.score >= winLimit.textContent &&
     loosingPlayers.every(hasWonByTwo)
   ) {
     return true;
   }
}

const celebrateWinner = (winningPlayer) => {
  console.log(winningPlayer.playerName);
}

const activateSpaceBar = (e) => {
  if (e.keyCode === 32 && gameOver && isReset) {
    startGame();
  } 
}

window.addEventListener('keyup',  activateSpaceBar);


playerBtns.forEach((btn) => btn.addEventListener('click', choosePlayers));
