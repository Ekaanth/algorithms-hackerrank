function missingNumbers(arr, brr) {
  max = Math.max(...arr, ...brr);
  hashArray = new Array(max).fill(0);
  arr.forEach(element => {
    hashArray[element] += 1;
  });
  brr.forEach(element => {
    hashArray[element] -= 1;
  });
  const result = [];
  for (let i = 0; i < hashArray.length - 1; i++) {
    if (hashArray[i] != 0) {
      result.push(i);
    }
  }
  console.log(result);

  return [...result];
}
missingNumbers(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);
