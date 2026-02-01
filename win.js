// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawWin() {
  // Green-tinted background to communicate success
  background(60, 180, 90); // green background

  fill(0); // white text
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(42);
  text("HEADS", width / 2, 280);

  textSize(28);
  text("YOU WIN!", width / 2, 330);

  const backBtn = {
    x: width / 2,
    y: 480,
    w: 220,
    h: 70,
    label: "BACK",
  };

  drawWinButton(backBtn);
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  const backBtn = { x: width / 2, y: 480, w: 220, h: 70 };

  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games

function drawWinButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  noStroke();

  const hover = isHover({ x, y, w, h });

  fill(hover ? 180 : 0); // grey hover, white button
  rect(x, y, w, h, 14);

  fill(255); // white text
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
