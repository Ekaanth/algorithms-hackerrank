function maximizingXor(l, r) {
  max = new Set([]);
  for (let i = l; i <= r; i++) {
    for (let j = i; j <= r; j++) {
      max.add(i ^ j);
    }
  }
  return Math.max(...max);
}
maximizingXor(10, 15);
