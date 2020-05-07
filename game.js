let curve;

function setup() {
    createCanvas(600, 600);
    curve = new Curve();
}

function draw() {
    curve.update();
    if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
        curve.updateAngle(0)
    } else if (keyIsDown(LEFT_ARROW)) {
        curve.updateAngle(2 * Math.PI / 90)
    } else if (keyIsDown(RIGHT_ARROW)) {
        curve.updateAngle(-2 * Math.PI / 90)
    } else {
        curve.updateAngle(0)
    }
    curve.collision();
}