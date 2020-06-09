"use strict";

// Create player name and number of rounds input fields based on number of players selected
const choosePlayers = (e) => {
  snakeImg.style.display = "none";

  playerBtns.forEach((btn) => {
    btn.style.background = "#fff";
    btn.style.color = "#000";
  });
  e.target.style.background = "#757575";
  e.target.style.color = "#fff";

  playerForm.innerHTML = "";
  const playerNumbers = parseInt(e.target.dataset.numPlayers);

  for (let i = 1; i <= playerNumbers; i++) {
    const input = `
      <input type="text" class="player-form__player${i}"
      placeholder="Player ${i}"
      autocomplete="off"
      maxlength="7">
      `;
    playerForm.innerHTML += input;
  }
  const numberRoundsHTML = `
    <p>First to reach
      <input type="text" class="player-form__rounds"
      value="10" autocomplete="off"
      maxlength="3" >
    rounds</p>
  `;
  playerForm.innerHTML += numberRoundsHTML;

  numberRounds = document.querySelector(".player-form__rounds");
  numberRounds.addEventListener("click", (e) => (e.target.value = ""));
  createStartButton();
};

// Create start button which toggles from start screen to game screen if all input fields filled correctly
const createStartButton = () => {
  inputEls = playerForm.querySelectorAll("input");
  inputEls[0].focus();
  inputElsArray = Array.from(inputEls);
  numberRoundsInput = inputElsArray.pop();

  numberRoundsInput.addEventListener("keyup", (e) => {
    const isValidNumber =
      Number(e.target.value) && parseInt(e.target.value) > 0;
    if (!isValidNumber) {
      numberRoundsInput.value = "";
    }
  });

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

// Add event listeners to the initial number of players buttons
playerBtns.forEach((btn) => btn.addEventListener("click", choosePlayers));
