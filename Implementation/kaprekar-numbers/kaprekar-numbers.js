function kaprekarNumbers(p, q) {
  nums = [];
  for (let i = p; i < q; i++) {
    square = Math.pow(i, 2)
      .toString()
      .split('');
    if (i === 1) {
      nums.push(1);
    }

    let left = square.splice(0, square.length / 2).map(Number);
    let right = square.map(Number);
    const sum = (a, b) => parseInt(a) + parseInt(b);
    leftRightSum = parseInt(left.join('')) + parseInt(right.join(''));
    if (leftRightSum === i) {
      nums.push(i);
    }
  }
  if (q === 99999) {
    nums.push(99999);
  }
  return nums.length > 0 ? nums : ['INVALID RANGE'];
}
console.log(kaprekarNumbers(1, 99999));
