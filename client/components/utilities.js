const boxCoordinates = (lat, long, boxSize) => {
  const milesLongPerDeg = Math.cos(lat * (Math.PI / 180)) * 69.172;
  const longChange = boxSize / milesLongPerDeg;
  const latChange = boxSize / 69;
  const north = (lat + latChange / 2).toFixed(4);
  const south = (north - latChange).toFixed(4);
  const west = (long + longChange / 2).toFixed(4);
  const east = (west - longChange).toFixed(4);
  return `${north},${west},${south},${east}`;
};

console.log(boxCoordinates(39.1677, 120.1452, 10));
