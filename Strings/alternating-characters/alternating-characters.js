function eliminator(array) {
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    next = array[i + 1];
    if (current === next && array.length >= 2) {
      array.splice(i + 1, 1);
    }
  }
  return array;
}
function checker(array) {
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    next = array[i + 1];
    if (array[i] === next && array.length >= 2) {
      return true;
    } else false;
  }
}
function alternatingCharacters(s) {
  const length = s.split('').length;
  stringArray = s.split('');
  do {
    stringArray = eliminator(stringArray);
  } while (checker(stringArray));
  return length - stringArray.length;
}
alternatingCharacters('AAAA');
alternatingCharacters('BBBBB');
alternatingCharacters('ABABABAB');
alternatingCharacters('BABABA');
alternatingCharacters('AAABBB');
