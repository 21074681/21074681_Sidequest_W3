// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawStart() {
  // Background colour for the start screen
  background(255, 170, 200);

  // ---- Blue polka dots ----
  noStroke();
  fill(80, 150, 255); // blue dots

  for (let x = 0; x < width; x += 80) {
    for (let y = 0; y < height; y += 80) {
      ellipse(x + 50, y + 54, 20, 20);
    }
  }

  // red background

  // ---- Title text ----
  fill(0); // black text
  textSize(52); // bigger = more impact
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Heads or Tails", width / 2, 180);
  textStyle(NORMAL);

  textSize(20);
  fill(255);
  text("Choose an option to begin", width / 2, 240);

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const startBtn = {
    x: width / 2,
    y: 320,
    w: 240,
    h: 80,
    label: "START",
  };

  const instrBtn = {
    x: width / 2,
    y: 430,
    w: 240,
    h: 80,
    label: "INSTRUCTIONS",
  };

  // Draw both buttons
  drawButton(startBtn);
  drawButton(instrBtn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(startBtn) || isHover(instrBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "start"
function startMousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const startBtn = { x: width / 2, y: 320, w: 240, h: 80 };
  const instrBtn = { x: width / 2, y: 430, w: 240, h: 80 };

  // If START is clicked, go to the game screen
  if (isHover(startBtn)) {
    currentScreen = "game";
  }
  // If INSTRUCTIONS is clicked, go to the instructions screen
  else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts the game
// - I opens instructions
function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "game";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Helper: drawButton()
// ------------------------------------------------------------
// This function draws a button and changes its appearance on hover.
// It does NOT decide what happens when you click the button.
// That logic lives in startMousePressed() above.
//
// Keeping drawing separate from input/logic makes code easier to read.
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  // ---- Visual feedback (hover vs not hover) ----
  // This is a common UI idea:
  // - normal state is calmer
  // - hover state is brighter + more “active”
  //
  // We also add a shadow using drawingContext (p5 lets you access the
  // underlying canvas context for effects like shadows).
  if (hover) {
    fill(180); // grey hover

    drawingContext.shadowBlur = 12;
    drawingContext.shadowColor = color(120);
  } else {
    fill(255); // white button

    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(150);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // Important: reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;

  // Draw the label text on top of the button
  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
