let currentScene = "start";

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  background(220, 235, 215);

  if (currentScene === "start") {
    drawStart();
  } else if (currentScene === "forest") {
    drawForest();
  } else if (currentScene === "mountain") {
    drawMountain();
  } else if (currentScene === "trustFox") {
    drawTrustFox();
  } else if (currentScene === "exploreAlone") {
    drawExploreAlone();
  } else if (currentScene === "climbPeak") {
    drawClimbPeak();
  } else if (currentScene === "hiddenTunnel") {
    drawHiddenTunnel();
  } else if (currentScene === "ending1") {
    drawEnding1();
  } else if (currentScene === "ending2") {
    drawEnding2();
  } else if (currentScene === "ending3") {
    drawEnding3();
  } else if (currentScene === "ending4") {
    drawEnding4();
  } else if (currentScene === "ending5") {
    drawEnding5();
  } else if (currentScene === "ending6") {
    drawEnding6();
  } else if (currentScene === "ending7") {
    drawEnding7();
  } else if (currentScene === "ending8") {
    drawEnding8();
  }
}

function drawButton(x, y, w, h, label) {
  rectMode(CENTER);

  if (isMouseOver(x, y, w, h)) {
    fill(80, 120, 80);
  } else {
    fill(45, 85, 55);
  }

  stroke(30, 60, 35);
  strokeWeight(2);
  rect(x, y, w, h, 10);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text(label, x, y);
}

function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

function drawTitle(t) {
  fill(35, 60, 35);
  noStroke();
  textAlign(CENTER);
  textSize(38);
  text(t, width / 2, 90);
}

function drawBody(t) {
  fill(45, 35, 30);
  noStroke();
  textAlign(CENTER);
  textSize(20);

  text(
    t,
    width / 2,
    170,
    600,
    200
  );
}

function mousePressed() {
  if (currentScene === "start") {
    if (isMouseOver(250, 320, 220, 60)) currentScene = "forest";
    else if (isMouseOver(550, 320, 220, 60)) currentScene = "mountain";
  } else if (currentScene === "forest") {
    if (isMouseOver(250, 320, 220, 60)) currentScene = "trustFox";
    else if (isMouseOver(550, 320, 220, 60)) currentScene = "exploreAlone";
  } else if (currentScene === "mountain") {
    if (isMouseOver(250, 320, 220, 60)) currentScene = "climbPeak";
    else if (isMouseOver(550, 320, 220, 60)) currentScene = "hiddenTunnel";
  } else if (currentScene === "trustFox") {
    if (isMouseOver(250, 320, 220, 60)) currentScene = "ending1";
    else if (isMouseOver(550, 320, 220, 60)) currentScene = "ending2";
  } else if (currentScene === "exploreAlone") {
    if (isMouseOver(250, 320, 220, 60)) currentScene = "ending3";
    else if (isMouseOver(550, 320, 220, 60)) currentScene = "ending4";
  } else if (currentScene === "climbPeak") {
    if (isMouseOver(250, 320, 220, 60)) currentScene = "ending5";
    else if (isMouseOver(550, 320, 220, 60)) currentScene = "ending6";
  } else if (currentScene === "hiddenTunnel") {
    if (isMouseOver(250, 320, 220, 60)) currentScene = "ending7";
    else if (isMouseOver(550, 320, 220, 60)) currentScene = "ending8";
  }
}