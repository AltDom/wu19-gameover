"use strict";

class Curve {
  constructor(color, startingX, startingY, leftKey, rightKey, id) {
    this.id = id;
    this.x = startingX;
    this.y = startingY;
    this.increment = 3.8;
    this.angle = (Math.floor(Math.random() * 8 + 1) * Math.PI) / 4;
    this.color = color;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.stopCurve = false;
  }

  update() {
    // Check if curve has game over
    if (this.stopCurve) {
      return;
    }
    // Check if curve has game over
    if (currentPlayers.length === 1) {
      winningPlayer = players.find(
        (player) => player.id === currentPlayers[0].id
      );
      winningPlayer.score++;
      roundOver = true;
      return;
    }

    // Print the curve and make holes
    if (curveCount < curveSectionLength) {
      let c = color(this.color);
      fill(c);
      noStroke();
      circle(this.x, this.y, 5);
    }
    if (curveCount === curveSectionLength + holeLength) {
      curveCount = 0;
    }

    // Set curve position
    if (this.x + this.increment * Math.sin(this.angle) > width) {
      this.x = 0;
    } else if (this.x + this.increment * Math.sin(this.angle) < 0) {
      this.x = width;
    } else {
      this.x = this.x + this.increment * Math.sin(this.angle);
    }
    if (this.y + this.increment * Math.cos(this.angle) > height) {
      this.y = 0;
    } else if (this.y + this.increment * Math.cos(this.angle) < 0) {
      this.y = height;
    } else {
      this.y = this.y + this.increment * Math.cos(this.angle);
    }
  }

  steering() {
    if (this.stopCurve) {
      return;
    }
    if (keyIsDown(this.leftKey.key) && keyIsDown(this.rightKey.key)) {
      this.angle = this.angle + 0;
    } else if (keyIsDown(this.leftKey.key)) {
      this.angle = this.angle + (2 * Math.PI) / 90;
    } else if (keyIsDown(this.rightKey.key)) {
      this.angle = this.angle + (-2 * Math.PI) / 90;
    } else {
      this.angle = this.angle + 0;
    }
  }

  collision() {
    if (this.stopCurve) {
      return;
    }

    const currentPositionColor = get(this.x, this.y);
    if (
      currentPositionColor[0] > 10 ||
      currentPositionColor[1] > 10 ||
      currentPositionColor[2] > 10
    ) {
      this.stopCurve = true;
      currentPlayers = currentPlayers.filter((player) => player.id !== this.id);
    }
  }
}
