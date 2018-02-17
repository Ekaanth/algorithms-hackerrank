function alternatingCharacters(s) {
  stringArray = s.split('');
  count = 0;
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] === stringArray[i + 1] ? count++ : null;
  }
  return count;
}
alternatingCharacters('AAAA');
alternatingCharacters('BBBBB');
alternatingCharacters('ABABABAB');
alternatingCharacters('BABABA');
alternatingCharacters('AAABBB');
