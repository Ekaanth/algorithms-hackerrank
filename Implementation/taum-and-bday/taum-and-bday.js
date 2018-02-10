function taumBday(b, w, x, y, z) {
  if ((x == y && y == z) || (x < z && y < z)) {
    return b * x + w * y;
  }
  if (x > y && x > z) {
    let whiteToBlackCost = y + z;
    return b * whiteToBlackCost + w * y;
  }
  if (y > x && y > z) {
    let blackToWhiteCost = x + z;
    return b * x + w * y;
  }
}
console.log(taumBday(10, 10, 1, 1, 1));
console.log(taumBday(5, 9, 2, 3, 4));
console.log(taumBday(3, 6, 9, 1, 1));
console.log(taumBday(7, 7, 4, 2, 1));
console.log(taumBday(3, 3, 1, 9, 2));
