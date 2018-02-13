function funnyString(s) {
  str = s.split('');
  revStr = s.split('').reverse();
  count = 0;
  console.log(str);
  console.log(revStr);

  alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 1; i < str.length; i++) {
    let exp1 = Math.abs(
      alphabets.indexOf(str[i]) - alphabets.indexOf(str[i - 1])
    );
    let exp2 = Math.abs(
      alphabets.indexOf(revStr[i]) - alphabets.indexOf(revStr[i - 1])
    );
    console.log(`Normal |${str[i]}| - |${str[i - 1]}|= ${exp1}`);
    console.log(`Rev |${revStr[i]}| - |${revStr[i - 1]}|= ${exp1}`);

    if (exp1 !== exp2) {
      count++;
    }
  }
  console.log('count', count);

  if (count === 0) {
    return 'Funny';
  } else {
    return 'Not Funny';
  }
}
// console.log(funnyString('acxz'));
console.log(funnyString('bcxz'));
