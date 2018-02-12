function flatlandSpaceStations(n, c) {
  cities = new Array(n).fill(0);
  distanceArray = [];
  c.forEach(i => {
    cities[i] = 1;
  });
  if (n === c.length) {
    return 0;
  }
  for (let j = 0; j < cities.length; j++) {
    prevIndex = j - 1;
    nextIndex = j + 1;
    while (cities[prevIndex] == 1 || cities[nextIndex] == 1) {
      distanceArray.push(Math.min(prevIndex, nextIndex));
      prevIndex = prevIndex - 1;
      nextIndex = nextIndex + 1;
    }
  }
  return Math.max(...distanceArray);
}
flatlandSpaceStations(5, [0, 4]);
flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5]);
