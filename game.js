'use strict';

if(btnNewGame) {
  btnNewGame.addEventListener('click', () => startGame());
}

function setup() {
  startGame();
  noLoop();
}

function draw() {
  if (gameOver) {
    updateScoreBoard();
    noLoop();
    return;
  }
  
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    curve.collision();
  });
}

