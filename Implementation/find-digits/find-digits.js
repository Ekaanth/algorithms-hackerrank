function findDigits(n) {
  num = n.toString().split('');
  count = 0;
  num.map(x => {
    if( n % parseInt(x) === 0){
      count++;
    }
  })
  return count;
}
console.log(findDigits(1012));
