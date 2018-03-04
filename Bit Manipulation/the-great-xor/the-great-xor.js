function theGreatXor(x) {
  count = 0;
  for (let a = 0; a <= x; a++) {
    xor = a ^ x;
    if (xor > x) {
      if (0 < a && a < x) {
        count++;
      }
    }
  }
  return count;
}
theGreatXor(10);
