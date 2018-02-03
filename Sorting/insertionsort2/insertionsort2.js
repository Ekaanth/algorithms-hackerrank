function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let prevIndex = i - 1;
    while (prevIndex >= 0 && arr[prevIndex] > key){
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex = prevIndex - 1;
    }
    arr[prevIndex + 1 ] = key;
    console.log(...arr);
  }  
}
insertionSort2(6, [1, 4, 3, 5, 6, 2])