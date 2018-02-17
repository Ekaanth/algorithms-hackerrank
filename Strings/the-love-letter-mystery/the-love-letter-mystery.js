function theLoveLetterMystery(s) {
  count = 0;
  array = s.split('');
  for (let i = 0; i < parseInt(array.length / 2); i++) {
    let charCodeDiff =
      array[i].charCodeAt(0) - array[array.length - i - 1].charCodeAt(0);
    count += Math.abs(charCodeDiff);
  }
  return count;
}
theLoveLetterMystery('abc');
theLoveLetterMystery('abcba');
