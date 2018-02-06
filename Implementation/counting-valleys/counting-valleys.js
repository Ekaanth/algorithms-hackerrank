function countingValleys(n, s) {
  stepArray = s.split('');
  currentPosition = 0;
  valleyCount = 0;
  stepArray.map(move => {
    if (move === 'U'){
      currentPosition += 1; 
    }
    if (move === 'D'){
      currentPosition -= 1; 
    }
    if(move === 'U' && currentPosition === 0){
      valleyCount++;
    }
  })
  return valleyCount;
}
console.log(countingValleys(8, 'UDDDUDUU'));
console.log(countingValleys(10, 'UDUUUDUDDD'));
