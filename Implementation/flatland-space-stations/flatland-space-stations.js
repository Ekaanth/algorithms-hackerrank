function flatlandSpaceStations(n, c) {
  cities = new Array(n).fill(false);
  distanceArray = [];
  c.forEach(i => {
    cities[i] = true;
  });
  count = 0;
  for (let i = 0; i < n; i++) {
    c.forEach(element => {
      distanceArray.push(Math.abs(i - cities.indexOf(element)));
    });
  }
  console.log(distanceArray);
}
flatlandSpaceStations(5, [0, 4]);
