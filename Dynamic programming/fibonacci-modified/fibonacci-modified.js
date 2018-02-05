function fibonacciModified(t1, t2, n) {
  fibArray = [t1, t2]
  for (let i = 1; i < n; i++) {
      for (let j = 0; j <= n; j++) {
        tx = fibArray[j] + parseFloat(Math.pow(fibArray[j + i], 2))
        fibArray.push(tx)
      }
  }
  return fibArray[n - 1] ;
}
console.log(fibonacciModified(0, 1, 10));
