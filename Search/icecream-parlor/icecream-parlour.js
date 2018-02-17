function icecreamParlor(m, arr) {
  iceCreamId = {};
  for (let i = 0; i < arr.length; i++) {
    iceCreamId[arr[i]] > 0 ? console.log(iceCreamId[arr[i]], i + 1) : null;

    arr[i] < m ? (iceCreamId[m - arr[i]] = i + 1) : null;
  }
}
console.log(icecreamParlor(4, [1, 4, 5, 3, 2]));
