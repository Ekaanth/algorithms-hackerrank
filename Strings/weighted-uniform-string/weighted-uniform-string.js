function getStringWeight(s, x) {
  alpha = '0abcdefghijklmnopqrstuvwxyz'.split('');
  counter = 1;
  const subValue = new Set([]);
  for (let i = 0; i < s.length; i++) {
    subValue.add(alpha.indexOf(s[i]));
    i + 1 != s.length && s[i + 1] == s[i] ? (counter += 1) : (counter = 1);
    subValue.add(alpha.indexOf(s[i]) * counter);
  }
  return subValue.has(x) ? 'Yes' : 'No';
}
console.log(getStringWeight('abccddde', 6));
