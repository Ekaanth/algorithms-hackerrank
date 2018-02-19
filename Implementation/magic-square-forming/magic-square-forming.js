function formingMagicSquare(s) {
  sumArray = [];
  flatArray = [...s[0], ...s[1], ...s[2]];
  std = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [4, 9, 2, 3, 5, 7, 8, 1, 6]
  ];
  for (let i = 0; i < std.length; i++) {
    let temp = [];
    for (let j = 0; j < 9; j++) {
      temp.push(Math.abs(flatArray[j] - std[i][j]));
    }
    const sum = (a, b) => a + b;
    sumArray.push(temp.reduce(sum));
  }
  return Math.min(...sumArray);
}
formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]);
