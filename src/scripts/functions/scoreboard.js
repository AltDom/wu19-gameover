"use strict";

// Create the scoreboard on the game screen
const createScoreBoard = (e) => {
  e.preventDefault();
  if (numberRoundsInput.value === "") {
    numberRoundsInput.focus();
    return;
  }
  players[inputElsArray.length-1].leftKey = { key: 37, char: "<" };
  players[inputElsArray.length-1].rightKey = { key: 39, char: ">" };
  inputElsArray.forEach((input, i) => {
    const p = `
    <p class="score-board__player${i + 1}">
    <span class="steering-span">
    LEFT: ${players[i].leftKey.char}
    RIGHT:
   ${players[i].rightKey.char}
    </span>
    <span>${input.value}:
    <span class="score-span">0</span></span>
    </p>
    `;
    scoreBoard.innerHTML += p;
    players[i].playerName = input.value;
  });

  winLimit.textContent = `${numberRounds.value}`;
  resetGame(); // Initialises chosen number of snakes onto the gameboard
  startScreen.style.display = "none";
  heading.style.display = "none";
  gameScreen.style.display = "flex";
};

// Increment winning player's score
const updateScoreBoard = () => {
  const playerScoreSpan = document.querySelector(
    `.score-board__player${winningPlayer.id} .score-span`
  );
  playerScoreSpan.textContent = winningPlayer.score;
  sortScoreBoard();
  if (gameIsFinished()) {
    gameOver = true;
    celebrateWinner(winningPlayer);
  }
};

// Sort the scoreboard after winning player's increment
const sortScoreBoard = () => {
  [].slice.call(scoreBoard.querySelectorAll("p")).forEach((p) => {
    const playerScore = p.querySelector(".score-span").textContent;
    arrayToBeSorted.push(`${playerScore}+${p.outerHTML}`);
  });
  scoreBoard.innerHTML = "";

  const sortedArray = arrayToBeSorted.sort();
  for (let i = sortedArray.length - 1; i >= 0; i--) {
    const p = sortedArray[i].split("+")[1];
    scoreBoard.innerHTML += p;
  }
  arrayToBeSorted = [];
};

// Check for winning player
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

// Announce winner
const celebrateWinner = (winningPlayer) => {
  victoryMessage.textContent = `${winningPlayer.playerName} win!`;
  victoryMessage.style.display = "block";
};
