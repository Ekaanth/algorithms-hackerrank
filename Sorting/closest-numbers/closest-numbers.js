function closestNumbers(arr) {
  let sorter = (a, b) => a - b;
  arr.sort(sorter);
  minAbsDiffArray = arr.slice(0, 2);
  minAbsDiff = Math.abs(arr[0] - arr[1]);
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] < minAbsDiff) {
      minAbsDiffArray = [];
      minAbsDiffArray.push(arr[i], arr[i + 1]);
      minAbsDiff = Math.abs(arr[i + 1] - arr[i]);
    } else if (arr[i + 1] - arr[i] === minAbsDiff) {
      minAbsDiffArray.push(arr[i], arr[i + 1]);
    }
  }
  return [...minAbsDiffArray];
}
closestNumbers([
  -20,
  -3916237,
  -357920,
  -3620601,
  7374819,
  -7330761,
  30,
  6246457,
  -6461594,
  266854
]);
