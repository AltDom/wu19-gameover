'use strict';

class Curve {
  constructor(color) {
    this.x = 0;
    this.y = 0;
    this.increment = 3.25;
    this.angle = Math.PI / 2;
    this.color = color;
  }

  updateAngle(value) {
    this.angle = this.angle + value;
  }

  update() {
    circle(this.x, this.y, 5);
    let c = color(this.color);
    fill(c);
    noStroke();
    this.x = this.x + this.increment * Math.sin(this.angle);
    this.y = this.y + this.increment * Math.cos(this.angle);
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
