function beautifulTriplets(d, arr) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = i + 2; k < arr.length; k++) {
        if (arr[i] && arr[k] && arr[k]) {
          if (arr[i] < arr[j] && arr[j] < arr[k]) {
            if ((arr[j] - arr[i] === d && arr[k] - arr[j]) === d) {
              count++;
            }
          }
        }
      }
    }
  }
  return count;
}
beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);
