function aVeryBigSum(n, ar) {
    let total = 0;
    ar.map(number => {
        total += number;
    })
    return total;
}   
console.log(aVeryBigSum(3, [1,2,3]));
