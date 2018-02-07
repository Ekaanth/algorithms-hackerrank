function checkOccurance(array, key){
  indices = [];
  index = array.indexOf(key);
  while (index != -1) {
    indices.push(index);
    index = array.indexOf(key, index + 1);
  }
  return indices
}
function minimumDistances(a) {
  indicesDiffArray = [];
  a.map(number => {    
    diff = checkOccurance(a, number);
    if (diff.length > 0){
      d = Math.abs(diff[0] - diff[1]);
      if (Number.isInteger(d)) {
        indicesDiffArray.push(d)
      }
    }
  })  
  if(Number.isInteger(Math.min(...indicesDiffArray))) {
    return Math.min(...indicesDiffArray)
  } else {
    return -1
  }
}

minimumDistances([7, 1, 3, 4, 1, 7]);