function countingSort(arr) {
  var numberCount = new Array(100).fill(0);
  arr.map(num => {
      numberCount[num] = numberCount[num] + 1;
  })
  console.log(...numberCount);
  
}
countingSort([1, 3, 4, 5, 4, 3])