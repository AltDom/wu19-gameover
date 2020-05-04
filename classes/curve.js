class Curve {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.increment = 3;
    this.angle = Math.PI / 2;
  }

  updateAngle(value) {
    this.angle = this.angle + value;
  }

  update() {
    circle(this.x, this.y, 5);
    this.x = this.x + this.increment * Math.sin(this.angle);
    this.y = this.y + this.increment * Math.cos(this.angle);
  };
}