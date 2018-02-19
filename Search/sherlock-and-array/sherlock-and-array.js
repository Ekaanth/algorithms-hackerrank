function solve(a) {
  let sum = (a, b) => a + b;
  total = a.reduce(sum);
  let left = 0;
  for (let i = 0; i < a.length; i++) {
    total -= a[i];
    if (left === total) {
      return 'YES';
    }
    left += a[i];
  }
  return 'NO';
}
solve([1, 2, 3]);
solve([1, 2, 3, 3]);
