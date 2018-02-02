function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
           if(i < j){
            const elementSum = ar[i] + ar[j];
            if (elementSum % k === 0) {
                count++;
            }
           }
        }
    }
    return count;
}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])