"use strict";

function setup() {
  initialiseVariables();
  noLoop();
}

function draw() {
  if (roundOver && !isFirstInitialise) {
    updateScoreBoard();
    noLoop();
    if (!gameOver) {
      spaceBarText.style.visibility = "visible";
    }
    return;
  }

  snakePointCount++;
  snakes.forEach((snake) => {
    snake.update();
    snake.steering();
    if (snakePointCount < snakeSectionLength) {
      snake.collision();
    }
  });
}
