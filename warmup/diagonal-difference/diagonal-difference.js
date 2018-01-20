function diagonalDifference(a) {
    matrixRowCount = Object.keys(a).length;
    diagCount = matrixRowCount ;
    diagOneSum = 0;
    diagTwoSum = 0;
    for (i= 0; i < matrixRowCount; i++){
       diagOneSum += a[i][i];
       diagTwoSum += a[i][diagCount - 1];
       console.log('Test', a[i][diagCount- 1])
       diagCount-= 1;
    }
    return Math.abs(diagOneSum - diagTwoSum);
}
let matrix ={
    0: [11, 2, 4],
    1: [4, 5, 6],
    2: [10, 8, -12]
}

diagonalDifference(matrix);