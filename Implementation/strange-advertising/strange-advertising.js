function viralAdvertising(n) {
  reach = [2];
  for (let i = 0; i < n - 1; i++) {
    reach.push(Math.floor(3 * reach[i] / 2));
  }
  const sum = (a, b) => a + b;
  return reach.reduce(sum);
}
viralAdvertising(3);
