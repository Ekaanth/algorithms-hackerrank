function eliminator(array){
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    next = array[i + 1];
    if (current === next) {
      array.splice(i, 2);
    }
  }
  return array
}
function checker(array) {
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    next = array[i + 1];
    if (array[i] === next) {
     return true
    }
    else false
  }
  
}
function super_reduced_string(s) {
  let temp = s.split('');
  const stringArray = temp.slice();
  do {
    temp = eliminator(temp);
  } while (checker(temp));
  
  if (temp.length > 0) {
    return temp.join('')
  } else {
    return 'Empty String';
  }
}
console.log(super_reduced_string('aaabccddd'));
console.log(super_reduced_string('lrfkqyuqfjjfquyqkfrlkxyqvnrtyssytrnvqyxkfrzrmzlygffgylzmrzrfveulqfpdbhhbdpfqluevlqdqrrcrwddwrcrrqdql'));
console.log(super_reduced_string('baab'));
