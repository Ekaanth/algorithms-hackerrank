function pairs(k, arr) {
  count = 0;
  numberSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    numberSet.has(current + k) ? count++ : null;
    numberSet.has(current - k) ? count++ : null;
    numberSet.add(current);
  }
  return count;
}
pairs(2, [1, 5, 3, 4, 2]);
