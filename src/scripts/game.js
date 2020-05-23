"use strict";

function setup() {
  initialiseVariables();
  noLoop();
}

function draw() {
  if (gameOver && !isFirstInitialise) {
    updateScoreBoard();
    noLoop();
    if (!roundOver) {
      spaceBarText.style.visibility = "visible";
    }
    return;
  }

  curveCount++;
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    if (curveCount < curveSectionLength) {
      curve.collision();
    }
  });
}
