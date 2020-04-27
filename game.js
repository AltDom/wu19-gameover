var curve;

function setup() {
    createCanvas(600, 600);
    curve = new Curve();
}

function draw() {
    background(51);
    curve.update();
    curve.show();
    if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
        curve.updateAngle(0)
    } else if (keyIsDown(LEFT_ARROW)) {
        curve.updateAngle(2 * Math.PI / 90)
    } else if (keyIsDown(RIGHT_ARROW)) {
        curve.updateAngle(-2 * Math.PI / 90)
    } else {
        curve.updateAngle(0)
    }
}