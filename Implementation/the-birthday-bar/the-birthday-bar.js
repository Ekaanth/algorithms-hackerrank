function solve(n, s, d, m) {
  totalWays = 0;
  expectedTotal = m * n;
  chocoArray = s;
  const add = (a, b) => a + b;

  for (let i = 0; i < n; i++) {
    const currentSLice = chocoArray.slice(i, i + m)
    console.log('currentSLice', currentSLice);
    const sum = currentSLice.reduce(add);
    console.log(`sum of ${currentSLice} = `, sum);
    if (sum === d) {
      totalWays += 1;
    }
  }
  // console.log(totalWays);
  return totalWays;
}
// solve(5, [ 1, 2, 1, 3, 2 ], 3, 2)
// solve(6, [ 1, 1, 1, 1, 1, 1 ], 3, 2)
solve(19, [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)