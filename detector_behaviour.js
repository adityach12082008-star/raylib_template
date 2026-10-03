// creating detector
function createDetector(
  start,
  y,
  width,
  height,
  upperBound,
  lowerBound,
  velocity,
) {
  return {
    start,
    y,
    width,
    height,
    upperBound,
    lowerBound,
    velocity,
  };
}
// creating particle
function createPareticle(start, y, width, height) {
  return {
    start,
    y,
    width,
    height,
  };
}

function detectorVelocity(d) {
  return hasReachedBounds(d) ? -d.velocity : d.velocity;
}
function hasReachedBounds(d) {
  if (d.y === 0) return d.start < d.lowerBound || d.start > d.upperBound;
  else return d.y < d.lowerBound || d.y > d.upperBound;
}
function moveDetector(d) {
  if (d.y === 0) return d.start + d.velocity;
  else return d.y + d.velocity;
}

function detectorDetectsParticle(d, p) {
  if (d.y === 0)
    return d.start + d.width >= p.start && d.start <= p.start + p.width;
  else return d.y + d.height >= p.y && d.y <= p.y + p.height;
}

module.exports = {
  createDetector,
  detectorVelocity,
  hasReachedBounds,
  moveDetector,
  createPareticle,
  detectorDetectsParticle,
};
