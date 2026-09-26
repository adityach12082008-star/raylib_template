const r = require("raylib");
function calcOffset(outer, inner) {
  return (outer - inner) / 2;
}
function distanceBetweenTwoPoints(sX, sY, targetX, targetY) {
  return (
    (targetX - sX) ** 2 +
    (targetY - sY) ** 2
  ) ** 0.5;
}
function movingHorizontally(xValue, max, min) {
  if (xValue === max) {
    scannerDirection = -2
  }
  if (xValue === min) {
    scannerDirection = 2
  }
  return xValue + scannerDirection;
}
module.exports = {
  calcOffset,
  distanceBetweenTwoPoints,

};