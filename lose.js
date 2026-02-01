// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function drawLose() {
  // Red-tinted background to communicate failure
  background(200, 40, 40); // red background

  fill(255); // white text
  textAlign(CENTER, CENTER);

  // Main message
  textSize(42);
  text("TAILS", width / 2, 280);

  textSize(28);
  text("YOU LOSE", width / 2, 330);

  const backBtn = {
    x: width / 2,
    y: 480,
    w: 220,
    h: 70,
    label: "BACK",
  };

  drawLoseButton(backBtn);
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  const backBtn = { x: width / 2, y: 480, w: 220, h: 70 };

  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games

function drawLoseButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  noStroke();

  const hover = isHover({ x, y, w, h });

  fill(hover ? 180 : 0); // grey hover, white button
  rect(x, y, w, h, 14);

  fill(255); // black text
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
