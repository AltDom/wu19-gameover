"use strict";

function setup() {

  // Reset canvas and all variables for a new game and create and populate snakes array
  initialiseVariables();
  noLoop();

}

function draw() {

  if (roundOver && !isFirstInitialise) {

    // Increment winning player's score and re-sort leaderboard
    updateScoreBoard();
    noLoop();
    if (!gameOver) {
      spaceBarText.style.visibility = "visible";
    }
    return;
  }

  // Increment point count for purpose of tracking periodic gaps in snakes
  snakePointCount++;

  // For each snake update position and direction, and check for collisions and game over
  snakes.forEach((snake) => {
    snake.update();
    snake.steering();
    if (snakePointCount < snakeSectionLength) {
      snake.collision();
    }
  });

}
