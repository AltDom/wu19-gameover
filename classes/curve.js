'use strict';

class Curve {
  constructor() {
    // (this.r = r), (this.g = g), (this.b = b),
    this.x = 0;
    this.y = 0;
    this.increment = 3;
    this.angle = Math.PI / 2;
    this.colors = getColor();
  }

  updateAngle(value) {
    this.angle = this.angle + value;
  }

  update() {
    circle(this.x, this.y, 5);
    let c = color(this.colors);
    fill(c);
    noStroke();
    this.x = this.x + this.increment * Math.sin(this.angle);
    this.y = this.y + this.increment * Math.cos(this.angle);
  }

  collision() {
    const currentPositionColor = get(this.x, this.y);

    if (
      currentPositionColor[0] === this.colors[0] &&
      currentPositionColor[1] === this.colors[1] &&
      currentPositionColor[2] === this.colors[2]
    ) {
      console.log('GAME ENDED');
    }
  }
}
