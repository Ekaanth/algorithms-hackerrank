function encryption(s) {
  s = s.replace(/\s+/g, '');
  str = s.split('');
  console.log(s);
  len = s.length;
  rows = Math.floor(Math.sqrt(len));
  cols = Math.ceil(Math.sqrt(len));
  strMatrix = [];
  if (rows * cols >= len) {
    console.log('R', rows);
    console.log('C', cols);
    while (str.length) {
      strMatrix.push(str.splice(0, cols));
    }
  }
  console.log(strMatrix);
}
// encryption('haveaniceday');
encryption(
  'if man was meant to stay on the ground god would have given us roots'
);
