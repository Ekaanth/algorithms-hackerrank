let arr = [
  ['0', 'ab'],
  ['6', 'cd'],
  ['0', 'ef'],
  ['6', 'gh'],
  ['4', 'ij'],
  ['0', 'ab'],
  ['6', 'cd'],
  ['0', 'ef'],
  ['6', 'gh'],
  ['0', 'ij'],
  ['4', 'that'],
  ['3', 'be'],
  ['0', 'to'],
  ['1', 'be'],
  ['5', 'question'],
  ['1', 'or'],
  ['2', 'not'],
  ['4', 'is'],
  ['2', 'to'],
  ['4', 'the']
];
for (let i = 0; i < (arr.length) / 2; i++) {
  arr[i][1] = '-';
}
for (let i = 0; i < arr.length; i++) {
  arr[i][2] = i;
}

let compareNumbers = (a, b) => {
  if (a[0] === b[0]) {
    return a[2] - b[2];
  }
  return a[0] - b[0];
}
arr.sort(compareNumbers)

let strings = arr.map(d => d[1])
console.log(...strings);
