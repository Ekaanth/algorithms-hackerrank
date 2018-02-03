function countingSort(arr) {
  var numberCount = new Array(100).fill(0);
  arr.map(num => {
      numberCount[num] = numberCount[num] + 1;
  })
  let sorted = [];
  for (let i = 0; i < numberCount.length; i++) {
    let v = numberCount[i];
      for (let j = 0; j < v; j++) {
        sorted.push(i)
      }
  }
  console.log(...sorted);
  
}
// var test = Array.from({length: 100}, () => Math.floor(Math.random() * 99));
// countingSort(test)