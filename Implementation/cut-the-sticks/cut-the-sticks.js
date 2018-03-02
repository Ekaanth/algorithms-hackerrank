function cutTheSticks(arr) {
  const sort = (a, b) => a - b;
  arr.sort(sort);
  count = [];
  console.log(arr.length);
  for (let idx = 0; idx < arr.length - 1; idx++) {
    arr[idx] != arr[idx + 1] ? console.log(arr.length - (idx + 1)) : null;
  }
  return count;
}
cutTheSticks([5, 4, 4, 2, 2, 8]);
