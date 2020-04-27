function Curve() {
    this.x = 0;
    this.y = 0;
    this.increment = 3;
    this.angle = Math.PI / 2;

    this.updateAngle = function(value) {
        this.angle = this.angle + value
    }

    this.update = function() {
        this.x = this.x + this.increment * Math.sin(this.angle)
        this.y = this.y + this.increment * Math.cos(this.angle)
    }

    this.show = function() {
        fill(255)
        circle(this.x, this.y, 5)
    }
}