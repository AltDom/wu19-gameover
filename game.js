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
  
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    curve.collision();
  });
}

