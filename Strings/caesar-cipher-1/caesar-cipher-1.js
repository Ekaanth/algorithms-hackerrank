function caesarCipher(s, k) {
  let encrypted = s.split('').map(char => {
    cc = char.charCodeAt(0);
    if (cc > 96 && cc < 123) {
      return cc + k % 26 <= 122
        ? String.fromCharCode(cc + k % 26)
        : String.fromCharCode(Math.abs(96 + cc - 122 + k % 26));
    } else if (cc > 64 && cc < 91) {
      return cc + k % 26 <= 90
        ? String.fromCharCode(cc + k % 26)
        : String.fromCharCode(Math.abs(64 + cc - 90 + k % 26));
    } else {
      return char;
    }
  });
  return encrypted.join('');
}
caesarCipher('Hello_World!', 4);
