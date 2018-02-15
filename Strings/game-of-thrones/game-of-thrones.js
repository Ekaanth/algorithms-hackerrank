function gameOfThrones(s) {
  count = 0;
  alphaCount = {};
  s.split('').map(val => (alphaCount[val] = (alphaCount[val] || 0) + 1));
  keys = Object.keys(alphaCount);
  keys.map(key => {
    if (alphaCount[key] % 2 !== 0) {
      count++;
    }
  });
  return count > 1 ? 'NO' : 'YES';
}
console.log(gameOfThrones('aaabbbb'));

console.log(gameOfThrones('cdefghmnopqrstuvw'));
