function squares(a, b) {
  count = 0;
  for (let i = a; i <= b; i++) {
    Number.isInteger(Math.sqrt(i)) ? count++ : null;
  }
  return count;
}
squares(3, 9);
squares(17, 24);
