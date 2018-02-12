function problemSplitter(array, size) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
}
function workbook(n, k, arr) {
  book = [];
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    page = [];
    currentProblem = arr[i];
    for (let j = 1; j <= arr[i]; j++) {
      page.push(j);
    }
    book.push(...problemSplitter(page, k));
  }
  let c = 1;
  book.map(b => {
    if (b.includes(c)) {
      count++;
    }
    c++;
  });
  return count;
}
workbook(5, 3, [4, 2, 6, 1, 10]);
