function range(start, end) {
  diff = Math.abs(start - end);
  numbers = [];
  for (let i = 0; i <= diff; i++) {
    numbers.push(start + i)
  }
  return numbers
}
function beautifulDays(i, j, k) {
  days = range(i, j)
  count = 0;
  days.map(day => {
    rev = parseInt(day.toString().split('').reverse().join(''));    
    beauty = (day - rev) / k;
    if (Number.isInteger(beauty)){
      count++;
    }
  })
  return count
}
beautifulDays(49860, 205494, 155635764)
