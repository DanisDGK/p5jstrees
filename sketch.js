function setup() {
  createCanvas(windowWidth-25, windowHeight-25, WEBGL);
  angleMode(DEGREES);

  // Comment noLoop(); and uncomment randomSeed(); and rotateY(); if you want it to spin
  noLoop();
}

function draw() {
  background(40, 42, 54, 200);

  //randomSeed(1);
  
  translate(0, 200, 0);

  //rotateY(frameCount);

  branch(150);
}

function branch(len) {
  strokeWeight(map(len, 10, 100, 0.5, 5));
  stroke(70, 40, 20);
  
  line(0, 0, 0, 0, -len - 2, 0);

  translate(0, -len, 0);

  if (len > 10) {
    for(var i = 0; i < 3; i++) {
      rotateY(random(100, 140));

      push();

      rotateZ(random(20, 50));
      branch(len * random(0.6, 0.7));

      pop();
    }
  } else {

    var r = 220 + random(-20, 20);
    var g = 120 + random(-20, 20);
    var b = 170 + random(-20, 20);

    fill(r, g, b, 200);
    noStroke();

    translate(5, 0, 0);

    rotateZ(90);
    
    beginShape();

    for (var i = 45; i < 135; i++) {
      var rad = 10;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }

    for (var i = 135; i > 45; i--) {
      var rad = 10;
      var x = rad * cos(i);
      var y = rad * sin(-i);
    }
    
    endShape(CLOSE);
  }
}
