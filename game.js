'use strict';

if(btnNewGame) {
  btnNewGame.addEventListener('click', () => startGame());
}

function setup() {
  startGame();
}

function draw() {
  if (gameOver) {
    noLoop();
    return;
  }
  
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    curve.collision();
  });
}

