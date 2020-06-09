"use strict";

// Called when game is first loaded and whenever refreshed
const initialiseVariables = () => {
  snakePointCount = 0;
  gameOver = false;
  currentPlayers = [];
  snakes = [];
  playerBtns.forEach((btn) => {
    btn.style.background = "#FFF";
    btn.style.color = "#000";
  });
  const canvas = createCanvas(width, height);
  canvas.parent("game-screen");
  frameRate(46);
  createSnakes();
};

// Create snakes based on number of selected players
const createSnakes = () => {
  for (let i = 0; i < inputElsArray.length; i++) {
    snakes[i] = new Snake(
      players[i].color,
      players[i].startingX,
      players[i].startingY,
      players[i].leftKey,
      players[i].rightKey,
      players[i].id
    );
  }
};

// Called whenever game is reset
const resetGame = () => {
  initialiseVariables();
  for (let i = 0; i < inputElsArray.length; i++) {
    currentPlayers[i] = players[i];
  }
  noLoop();
  isReset = true;
};

// Called before each game begins (with spacebar) in the game screen
const startGame = () => {
  roundOver = false;
  resetGame();
  spaceBarText.style.visibility = "hidden";
  isFirstInitialise = false;
  loop();
};

// Starts a game if spacebar is pressed
const activateSpaceBar = (e) => {
  if (e.keyCode === 32 && roundOver && isReset && !gameOver) {
    startGame();
  }
};

// Reset player scores and default steering keys
const resetPlayersArray = () => {
  players.forEach((player) => (player.score = 0));
  players[1].leftKey = { key: 52, char: "4" };
  players[1].rightKey = { key: 82, char: "r" };
  players[2].leftKey = { key: 55, char: "7" };
  players[2].rightKey = { key: 85, char: "u" };
  players[3].leftKey = { key: 48, char: "0" };
  players[3].rightKey = { key: 80, char: "p" };
}

// Called whenever game is reset via the new game button
const newGame = () => {
  initialiseVariables();
  resetPlayersArray();
  snakeImg.style.display = "block";
  playerForm.innerHTML = "";
  scoreBoard.innerHTML = "";
  startScreen.style.display = "flex";
  heading.style.display = "flex";
  gameScreen.style.display = "none";
  victoryMessage.style.display = "none";
  spaceBarText.style.visibility = "visible";
  isFirstInitialise = true;
  roundOver = true;
  notSure();
};

// Called when no button is selected
const notSure = () => {
  gameBtns.style.display = "flex";
  areYouSureBox.style.display = "none";
};

// Called after restart or new game buttons are selected
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

// Called whenever game is restarted via the restart button
const restartGame = () => {
  resetGame();
  players.forEach((player) => (player.score = 0));
  victoryMessage.style.display = "none";
  const scores = scoreBoard.querySelectorAll(".score-span");
  scores.forEach((score) => (score.textContent = 0));
  spaceBarText.style.visibility = "visible";
  isFirstInitialise = true;
  roundOver = true;
  notSure();
};

// Set event listeners on new game and restart buttons
window.addEventListener("keyup", activateSpaceBar);
btnNewGame.addEventListener("click", (e) => areYouSure(e.target));
btnRestart.addEventListener("click", (e) => areYouSure(e.target));
btnYes.addEventListener("click", () => {
  btnYes.dataset.mode === btnNewGame.textContent ? newGame() : restartGame();
});
btnNo.addEventListener("click", notSure);
