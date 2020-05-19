'use strict';

const btnNewGame = document.querySelector('.btn--new-game');
const playerBtns = document.querySelectorAll('.player-btns');
const playerForm = document.querySelector('.player-form');

const startGame = () => {
  gameOver = false;
  curveCount = 0;
  curves = [];
  for (let i = 0; i < playersCount; i++) {
    currentPlayers[i] = players[i];
  }
  loop();
  const canvas = createCanvas(width, height);
  canvas.parent('game-screen');
  frameRate(50);
  createCurve();
};

const createCurve = () => {
  for (let i = 0; i < playersCount; i++) {
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

  createStartButton();
};

const createStartButton = () => {
  const inputEls = playerForm.querySelectorAll('input');
  const inputElsArray = Array.from(inputEls);

  inputEls.forEach((input) => {
    input.addEventListener('keyup', () => {
      const hasValue = (currentValue) => currentValue.value !== '';
      const btnStartGame = document.querySelector('.btn--start-game');

      if (!btnStartGame && inputElsArray.every(hasValue)) {
        const btnStartGame = document.createElement('button');
        btnStartGame.classList.add('btn', 'btn--start-game');
        btnStartGame.textContent = 'Start Game';
        playerForm.appendChild(btnStartGame);
      }
    });
  });
};

playerBtns.forEach((btn) => btn.addEventListener('click', choosePlayers));
