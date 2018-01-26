function birthdayCakeCandles(n, ar) {
    count = 0;
    highestCandle = Math.max(...ar)
    ar.map(candle => {
        if(candle === highestCandle){
            count++;
        }
    })
    console.log(count);
    return count
}
birthdayCakeCandles(10, [44, 53, 31, 27, 77, 60, 66, 77, 26, 36]);