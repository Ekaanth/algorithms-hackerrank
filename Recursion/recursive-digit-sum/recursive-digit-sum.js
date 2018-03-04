function digitSum(n, k) {
  superDigit = (n * k) % 9;
  return superDigit != 0 ? superDigit : 9;
}
console.log(digitSum(861568688536788, 100000));
