function aVeryBigSum(n, ar) {
    let total = 0;
    ar.map(number => {
        total += number;
    })
    return total;
}
