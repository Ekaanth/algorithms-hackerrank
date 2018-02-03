function quickSort(arr) {
  let p = arr[0];
  let left = [];
  let right = [];
  let equal = [];
  equal.push(p)
  arr.map(number => {
    if (number !== p){
      number > p && number != p ? right.push(number): left.push(number);
    }
  })
  return [...left, ...equal, ...right]
}
console.log(quickSort([4, 5, 3, 7, 2]));
