function runningTime(arr) {
  n = arr.length;
  shiftCount = 0;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let prevIndex = i - 1;
    while (prevIndex >= 0 && arr[prevIndex] > key){
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex = prevIndex - 1;
      shiftCount++;

    }
    arr[prevIndex + 1 ] = key;
  }
  console.log(shiftCount);
  
}
runningTime([2, 1, 3, 1, 2])