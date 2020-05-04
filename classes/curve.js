class Curve {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.increment = 3;
    this.angle = Math.PI / 2;
    this.colors = {
      player1: [255, 204, 0],
    };
  }

  updateAngle(value) {
    this.angle = this.angle + value;
  }

  update() {
    circle(this.x, this.y, 5);
    let c = color(this.colors.player1);
    fill(c);
    noStroke();
    this.x = this.x + this.increment * Math.sin(this.angle);
    this.y = this.y + this.increment * Math.cos(this.angle);
  }

  collision() {
    const currentPostion = get(this.x, this.y);

    if (
      currentPostion[0] === this.colors.player1[0] &&
      currentPostion[1] === this.colors.player1[1] &&
      currentPostion[2] === this.colors.player1[2]
    ) {
      console.log('GAME ENDED');
    }
  }
}
