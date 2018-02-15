function fairRations(B) {
  n = B.length;
  count = 0;
  for (let i = 0; i < B.length; i++) {
    if (n - 1 === i) {
      return B[i] % 2 === 1 ? 'NO' : count;
    }
    if (B[i] % 2 === 1) {
      B[i] = B[i] + 1;
      B[i + 1] = B[i + 1] + 1;
      count = count + 2;
    }
  }
}

console.log(fairRations([1, 2]));

fairRations([1, 2]);
