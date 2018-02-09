function repeatedString(s, n) {
  str = [];
  count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < s.length; j++) {
      do {
        str.push(s[j]);
      } while (str.length === n);
    }
  }
  str.length = n;
  var count = 0;
  var pos = str.indexOf('a');

  while (pos !== -1) {
    count++;
    pos = str.indexOf('a', pos + 1);
  }
  console.log(str.length, count);

  return count;
}
repeatedString('a', 1000000000000);
