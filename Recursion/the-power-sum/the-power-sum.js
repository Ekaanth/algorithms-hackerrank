function powerSum(X, N, base = 1) {
  const power = Math.pow(base, N);
  const diff = X - power;
  return power > X
    ? 0
    : power == X ? 1 : powerSum(X, N, base + 1) + powerSum(diff, N, base + 1);
}
console.log(powerSum(100, 2));
