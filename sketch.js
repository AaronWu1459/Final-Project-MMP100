let message = '';

function setup() {
  createCanvas(500, 500);
  textSize(36);
}

function draw() {
  background(0,139,255);
  fill(255);
  text(message, 25, 150);
}

function keyTyped() {
  message += key;
}