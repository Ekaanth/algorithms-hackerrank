function solve(n) {
  count = 0;
  for (let x = 0; x <= n; x++) {
    xor = n ^ x;
    n + x === xor ? count++ : null;
  }
  return count;
}
solve(1099511627776);
