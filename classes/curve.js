'use strict';

class Curve {
  constructor(color, leftKey, rightKey) {
    this.x = 0;
    this.y = 0;
    this.increment = 3.25;
    this.angle = Math.PI / 2;
    this.color = color;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
  }

  update() {
    circle(this.x, this.y, 5);
    let c = color(this.color);
    fill(c);
    noStroke();
    this.x = this.x + this.increment * Math.sin(this.angle);
    this.y = this.y + this.increment * Math.cos(this.angle);
  }

  steering() {
    if (keyIsDown(this.leftKey) && keyIsDown(this.rightKey)) {
      this.angle = this.angle + 0;
    } else if (keyIsDown(this.leftKey)) {
      this.angle = this.angle + ((2 * Math.PI) / 90);
    } else if (keyIsDown(this.rightKey)) {
      this.angle = this.angle + ((-2 * Math.PI) / 90);
    } else {
      this.angle = this.angle + 0;
    }
  }

  collision() {
    const currentPositionColor = get(this.x, this.y);
    // console.log(currentPositionColor[0])

    if (
      currentPositionColor[0] != 0 ||
      currentPositionColor[1] != 0 ||
      currentPositionColor[2] != 0
    ) {
      console.log('GAME ENDED');
    }
  }
}
