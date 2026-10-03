const r = require("raylib");
const d = require("./detector_behaviour");
const windowWidth = 500;
const windowHeight = 500;

const d1width = 20;
const d2width = 30;
const d3width = 25;

const d1 = d.createDetector(
  0,
  0,
  d1width,
  windowHeight,
  windowWidth / 2 - d1width,
  0,
  2,
);
const d2 = d.createDetector(
  windowWidth / 2,
  0,
  d2width,
  windowHeight,
  windowWidth - d2width,
  windowWidth / 2,
  4,
);
const d3 = d.createDetector(
  0,
  0,
  windowWidth,
  25,
  windowHeight - d3width,
  0,
  3,
);

const p1 = d.createPareticle(100, 0, 30, windowHeight);
const p2 = d.createPareticle(300, 0, 30, windowHeight);
const p3 = d.createPareticle(0, 250, windowWidth, 40);
function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "particle_detector");
  r.SetTargetFPS(60);
}

function update() {
  d1.velocity = d.detectorVelocity(d1);
  d1.start = d.moveDetector(d1);

  d2.velocity = d.detectorVelocity(d2);
  d2.start = d.moveDetector(d2);

  d3.velocity = d.detectorVelocity(d3);
  d3.y = d.moveDetector(d3);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  let color1 = d.detectorDetectsParticle(d1, p1) ? r.RED : r.WHITE;
  let color2 = d.detectorDetectsParticle(d2, p2) ? r.RED : r.WHITE;
  let color3 = d.detectorDetectsParticle(d3, p3) ? r.RED : r.WHITE;

  r.DrawRectangle(p1.start, p1.y, p1.width, p1.height, r.BLUE);
  r.DrawRectangle(p2.start, p2.y, p2.width, p2.height, r.BLUE);
  r.DrawRectangle(p3.start, p3.y, p3.width, p3.height, r.BLUE);

  r.DrawRectangle(d1.start, d1.y, d1.width, d1.height, color1);
  r.DrawRectangle(d2.start, d2.y, d2.width, d2.height, color2);
  r.DrawRectangle(d3.start, d3.y, d3.width, d3.height, color3);
  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
