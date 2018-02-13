function caesarCipher(s, k) {
  //   console.log('Z'.charCodeAt(0));
  //   console.log(String.fromCharCode(59));
  let encrypted = s.split('').map(char => {
    cc = char.charCodeAt(0);
    if (cc > 96 && cc < 123) {
      if (cc + k % 26 <= 122) {
        return String.fromCharCode(cc + k % 26);
      } else {
        let key = Math.abs(96 + cc - 122 + k % 26);
        return String.fromCharCode(key);
      }
    } else if (cc > 64 && cc < 91) {
      if (cc + k % 26 <= 90) {
        return String.fromCharCode(cc + k % 26);
      } else {
        let key = Math.abs(64 + cc - 90 + k % 26);
        return String.fromCharCode(key);
      }
    } else {
      return char;
    }
  });
  console.log(encrypted);

  return encrypted.join('');
}
caesarCipher('Hello_World!', 4);
