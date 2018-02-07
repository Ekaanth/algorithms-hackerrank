
function equalizeArray(arr) {
  indices = {};
  count = 0;
  arr.map(key => {
    index = arr.indexOf(key);
    while (index != -1) {
      if (indices[key] === undefined){
        indices[key] = 0;
      }
      indices[key] += index;
      index = arr.indexOf(key, index + 1);
    }
  });
  highKey = Object.keys(indices).reduce((a, b) => indices[a] > indices[b] ? a : b);
  arr.map(x => {
    if (x !== parseInt(highKey)){
      count++;
    }
  })
  return count;
}
equalizeArray([3, 3, 2, 1, 3])