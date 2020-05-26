"use strict";

class Snake {
  constructor(color, startingX, startingY, leftKey, rightKey, id) {
    this.id = id;
    this.increment = 3.8;
    this.x = startingX;
    this.y = startingY;
    this.angle = (Math.floor(Math.random() * 8 + 1) * Math.PI) / 4;
    this.color = color;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.stopSnake = false;
  }

  update() {
    // Check if snake has game over
    if (this.stopSnake) {
      return;
    }
    // Check if snake has game over
    if (currentPlayers.length === 1) {
      winningPlayer = players.find(
        (player) => player.id === currentPlayers[0].id
      );
      winningPlayer.score++;
      roundOver = true;
      return;
    }

    // Print the snake and make holes
    if (snakePointCount < snakeSectionLength) {
      let c = color(this.color);
      fill(c);
      noStroke();
      circle(this.x, this.y, 5);
    }
    if (snakePointCount === snakeSectionLength + holeLength) {
      snakePointCount = 0;
    }

    // Set snake position
    const nextX = this.x + this.increment * Math.sin(this.angle);
    const nextY = this.y + this.increment * Math.cos(this.angle);
    if (nextX > width) {
      this.x = 0;
    } else if (nextX < 0) {
      this.x = width;
    } else {
      this.x = nextX;
    }
    if (nextY > height) {
      this.y = 0;
    } else if (nextY < 0) {
      this.y = height;
    } else {
      this.y = nextY;
    }
  }

  steering() {
    if (this.stopSnake) {
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
    if (this.stopSnake) {
      return;
    }

    const currentPositionColor = get(this.x, this.y);
    if (
      currentPositionColor[0] > 10 ||
      currentPositionColor[1] > 10 ||
      currentPositionColor[2] > 10
    ) {
      this.stopSnake = true;
      currentPlayers = currentPlayers.filter((player) => player.id !== this.id);
    }
  }
}
