function generatePermutations(array) {
  let result = [];
  array.sort();
  for (let i = 0; i < array.length; i = i + 1) {
    let rest = generatePermutations(
      array.slice(0, i).concat(array.slice(i + 1))
    );
    if (!rest.length) {
      result.push([array[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        result.push([array[i]].concat(rest[j]));
      }
    }
  }
  return result;
}
function isPalindrome(str) {
  let p = str.reverse().join('');
  return p === str ? true : false;
}
function gameOfThrones(s) {
  permutations = generatePermutations(s.split(''));
  for (let i = 0; i < permutations.length; i++) {
    current = permutations[i];
    console.log(isPalindrome(current) ? 'YES' : 'NO');

    return isPalindrome(current) ? true : false;
  }
}
gameOfThrones('aaabbbb');
gameOfThrones('cdefghmnopqrstuvw');
