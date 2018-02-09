function beautifulTriplets(d, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = i + 2; k < arr.length; k++) {
        if (arr[i] < arr[j] && arr[j] < arr[k]) {
          // if ((arr[j] - arr[i] === arr[k] - arr[j]) === d) {
          console.log('i , k , j', [arr[i], arr[j], arr[k]]);
          // }
        }
      }
    }
  }
}
beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);
