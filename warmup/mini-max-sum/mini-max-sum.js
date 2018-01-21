function miniMaxSum(arr) {
    minMaxSumArray = [];
    let array = arr;
    for (let index = 0; index < arr.length; index++) {
        let total = 0;
        array.map(num => {
            if(array[index] !== num){
                total += num;
            }
        })
        minMaxSumArray.push(total);
    }
    return [Math.min(...minMaxSumArray), Math.max(...minMaxSumArray)]
}
console.log(miniMaxSum([1, 2, 3, 4, 5]));
