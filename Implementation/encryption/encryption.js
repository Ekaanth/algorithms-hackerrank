function encryption(s) {
  s = s.replace(/\s+/g, '');
  str = s.split('');
  len = s.length;
  rows = Math.floor(Math.sqrt(len));
  cols = Math.ceil(Math.sqrt(len));
  strMatrix = [];
  while (str.length) {
    strMatrix.push(str.splice(0, cols));
  }

  encrypted = '';
  for (let i = 0; i < cols; i++) {
    encrypted += strMatrix.map(c => c[i]).join('') + ' ';
  }
  return encrypted;
}
encryption('chillout');
