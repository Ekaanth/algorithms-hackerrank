function bigSorting(arr) {
  arr.map(Number);
  let compareNumbers = (a, b) => {
      return a - b;
   }
   arr.sort(compareNumbers)
   return [...arr]
}