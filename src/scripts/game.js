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

  curveCount++;
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    if (curveCount < curveSectionLength) {
      curve.collision();
    }
  });
}
