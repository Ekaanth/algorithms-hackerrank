function isValid(s) {
  count = 0;
  str = s.split('');
  for (let i = 0; i < 26; i++) {
    str[i] !== 0 ? str.push(str[i]) : null;
    str[i] === 1 ? count++ : null;
    return str.length > 2 || count > 1 ? 'NO' : 'YES';
  }
}
console.log(isValid('aabbcd'));
