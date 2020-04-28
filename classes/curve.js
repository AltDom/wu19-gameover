class Curve {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.increment = 3;
    this.angle = Math.PI / 2;
    this.total = 0;
    this.tail = [];
  }

  updateAngle(value) {
    this.angle = this.angle + value;
  }

  update() {
    this.total++;

    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.increment * Math.sin(this.angle);
    this.y = this.y + this.increment * Math.cos(this.angle);
  }

  show() {
    for (let i = 0; i < this.total; i++) {
      circle(this.tail[i].x, this.tail[i].y, 5);
    }
    fill(255);
    circle(this.x, this.y, 5);
  }
}
