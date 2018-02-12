function hasOdd(B) {
  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0) {
      return true;
    } else return false;
  }
}

function fairRations(B) {
  count = 0;
  for (let i = 0; i < B.length; i++) {
    if (
      B[i] !== undefined &&
      B[i + 1] !== undefined &&
      B[i - 1] !== undefined
    ) {
      do {
        if (B[i] % 2 !== 0) {
          count++;
          B[i] += 1;
          if (B[i + 1] % 2 !== 0 || B[i + 1] % 2 === 0) {
            count++;
            B[i + 1] += 1;
          }
          if (B[i - 1] % 2 !== 0) {
            count++;
            B[i - 1] += 1;
          }
        }
      } while (hasOdd(B));
    }
  }
  if (count < 0) {
    return 'NO';
  } else {
    return count;
  }
}

fairRations([2, 3, 4, 5, 6]);
fairRations([1, 2]);
