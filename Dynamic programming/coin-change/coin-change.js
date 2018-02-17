function getWays(n, c) {
  ways = [];
  for (let i = 0; i <= n; i++) {
    ways[i] = 0;
  }
  ways[0] = 1;
  for (let j = 0; j < c.length; j++) {
    currentCoin = c[j];
    for (let highestAmount = currentCoin; highestAmount <= n; highestAmount++) {
      remainder = highestAmount - currentCoin;
      ways[highestAmount] += ways[remainder];
    }
  }
  console.log(ways[n]);

  return ways[n];
}

getWays(4, [1, 2, 3]);
