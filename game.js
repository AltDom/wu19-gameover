'use strict';

function setup() {
  initialiseVariables();
  noLoop();
}

function draw() {
  if (gameOver && !isFirstInitialise) {
    updateScoreBoard();
    spaceBarText.style.visibility = "visible";
    noLoop();
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

