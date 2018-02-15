function stringConstruction(s) {
  stringArray = s.split('');
  var charCount = new Set();
  for (var i = 0; i < stringArray.length; i++) {
    charCount.add(stringArray[i]);
  }

  return charCount.size;
}
stringConstruction('abcd');
stringConstruction('abab');
