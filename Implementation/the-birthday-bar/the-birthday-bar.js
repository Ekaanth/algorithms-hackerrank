function solve(n, s, d, m){
    totalWays = 0;
    chocoArray = s;
    for (let i = 0; i < n; i++) {
        let currentElementsSum = 0;
        for (let j = 0; j < m; j++) {
         currentElementsSum += chocoArray[j];
         if (currentElementsSum === d) {
            totalWays+=1;
            for (let k = 0; k < m; k++) {
                chocoArray.pop(i)
            }
         }
        }
        console.log(chocoArray, totalWays);

    }
    return totalWays;
}
solve(5, [ 1, 2, 1, 3, 2 ], 3, 2)
// solve(6, [ 1, 1, 1, 1, 1, 1 ], 3, 2)
// solve(19, [ 2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)