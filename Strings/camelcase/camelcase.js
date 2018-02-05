function isUpper(s) {
  if (s === s.toUpperCase()){
    return true;
  }
  else return false;
}
function camelcase(s) {
  upperCaseCount = 0;
  let str = s.split('');
  str.map(alpha => {
    if (isUpper(alpha)){
      upperCaseCount+=1;
    }
  })
  return upperCaseCount + 1;
}
console.log(camelcase('saveChangesInTheEditor'));
