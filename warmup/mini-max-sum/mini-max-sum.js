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
    let isSameArrayValues = !!array.reduce((a, b) => (a === b) ? a : NaN);
    if (isSameArrayValues){
        minMaxSumArray = arr;
        console.log(arr[0]* (arr.length - 1), arr[0]* (arr.length - 1))
    }else {
        console.log(Math.min(...minMaxSumArray), Math.max(...minMaxSumArray))
    }
     
}
miniMaxSum([5, 5, 5, 5, 5]) 