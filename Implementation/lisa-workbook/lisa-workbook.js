function workbook(n, k, arr) {
  book = [];
  for (let i = 0; i < arr.length; i++) {
    page = [];
    let pageCount = 0;
    currentProblem = arr[i];
    for (let j = 1; j <= arr[i]; j++) {
      page.push(j);
    }
    book.push(page);
  }
  console.log(book);
}
workbook(5, 3, [4, 2, 6, 1, 10]);
