"use strict";

const btnNewGame = document.querySelector(".btn--new-game");
const gameBtns = document.querySelector(".game-btns");
const btnRestart = document.querySelector(".btn--restart");
const btnYes = document.querySelector(".btn--yes");
const btnNo = document.querySelector(".btn--no");
const victoryMessage = document.querySelector(".settings__winning-text");
const areYouSureBox = document.querySelector(".are-you-sure");
const settingsContainer = document.querySelector(".settings");
const heading = document.querySelector(".heading");
const playerBtns = document.querySelectorAll(".player-btns");
const playerForm = document.querySelector(".player-form");
const scoreBoard = document.querySelector(".score-board");
const spaceBarText = document.querySelector(".objectives__space-bar");
const objectivesDiv = document.querySelector(".objectives");
const startScreen = document.querySelector(".start-screen");
const gameScreen = document.getElementById("game-screen");
const winLimit = document.querySelector(".objectives__win-limit span");
let inputEls, winningPlayer, numberRounds;
let inputElsArray = [];
let currentPlayers = [];

const initialiseVariables = () => {
  curveCount = 0;
  roundOver = false;
  currentPlayers = [];
  curves = [];
  playerBtns.forEach((btn) => {
    btn.style.background = "#FFF";
    btn.style.color = "#000";
  });
  const canvas = createCanvas(width, height);
  canvas.parent("game-screen");
  frameRate(48);
  createCurve();
};

const resetGame = () => {
  initialiseVariables();
  for (let i = 0; i < inputElsArray.length; i++) {
    currentPlayers[i] = players[i];
  }
  noLoop();
  isReset = true;
};

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
  playerBtns.forEach((btn) => {
    btn.style.background = "#fff";
    btn.style.color = "#000";
  });
  e.target.style.background = "#ce17f3";
  e.target.style.color = "#fff";

  playerForm.innerHTML = "";
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

  numberRounds = document.querySelector(".player-form__rounds");
  numberRounds.addEventListener("click", (e) => (e.target.value = ""));
  createStartButton();
};

const createStartButton = () => {
  inputEls = playerForm.querySelectorAll("input");
  inputElsArray = Array.from(inputEls);
  inputElsArray.pop();

  inputEls.forEach((input) => {
    input.addEventListener("keyup", () => {
      const hasValue = (currentValue) => currentValue.value !== "";
      const btnStartGame = document.querySelector(".btn--start-game");

      if (!btnStartGame && inputElsArray.every(hasValue)) {
        const btnStartGame = document.createElement("button");
        btnStartGame.classList.add("btn", "btn--start-game");
        btnStartGame.textContent = "Start Game";
        playerForm.appendChild(btnStartGame);
        btnStartGame.addEventListener("click", createScoreBoard);
      }
    });
  });
};

const createScoreBoard = (e) => {
  e.preventDefault();
  inputElsArray.forEach((input, i) => {
    const p = `<p class="score-board__player${i + 1}">${
      input.value
    }: <span>0</span></p>`;
    scoreBoard.innerHTML += p;
    players[i].playerName = input.value;
  });

  winLimit.textContent = `${numberRounds.value}`;
  resetGame(); // Initialises chosen number of curves onto the gameboard
  startScreen.style.display = "none";
  heading.style.display = "none";
  gameScreen.style.display = "flex";
};

const updateScoreBoard = () => {
  const playerScoreSpan = document.querySelector(
    `.score-board__player${winningPlayer.id} span`
  );
  playerScoreSpan.textContent = winningPlayer.score;
  if (gameIsFinished()) {
    roundOver = true;
    celebrateWinner(winningPlayer);
  }
};

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
};

const celebrateWinner = (winningPlayer) => {
  victoryMessage.textContent = `${winningPlayer.playerName} win!`;
  victoryMessage.style.display = "block";
};

const activateSpaceBar = (e) => {
  if (e.keyCode === 32 && gameOver && isReset && !roundOver) {
    startGame();
  }
};

const newGame = () => {
  initialiseVariables();
  playerForm.innerHTML = "";
  scoreBoard.innerHTML = "";
  players.forEach((player) => (player.score = 0));
  startScreen.style.display = "flex";
  heading.style.display = "flex";
  gameScreen.style.display = "none";
  victoryMessage.style.display = "none";
  spaceBarText.style.visibility = "visible";
  isFirstInitialise = true;
  gameOver = true;
  notSure();
};

const notSure = () => {
  gameBtns.style.display = "flex";
  areYouSureBox.style.display = "none";
};

const areYouSure = (btnType) => {
  if (btnType === btnNewGame) {
    areYouSureBox.querySelector("span").textContent = "start a new";
  } else if (btnType === btnRestart) {
    areYouSureBox.querySelector("span").textContent = "restart the";
  }
  btnYes.dataset.mode = btnType.textContent;
  gameBtns.style.display = "none";
  areYouSureBox.style.display = "inline-block";
};

const restartGame = () => {
  resetGame();
  players.forEach((player) => (player.score = 0));
  victoryMessage.style.display = "none";
  const scores = scoreBoard.querySelectorAll("span");
  scores.forEach((score) => (score.textContent = 0));
  spaceBarText.style.visibility = "visible";
  isFirstInitialise = true;
  gameOver = true;
  notSure();
};

window.addEventListener("keyup", activateSpaceBar);
btnNewGame.addEventListener("click", (e) => areYouSure(e.target));
btnRestart.addEventListener("click", (e) => areYouSure(e.target));
btnYes.addEventListener("click", () => {
  btnYes.dataset.mode === btnNewGame.textContent ? newGame() : restartGame();
});
btnNo.addEventListener("click", notSure);
playerBtns.forEach((btn) => btn.addEventListener("click", choosePlayers));
