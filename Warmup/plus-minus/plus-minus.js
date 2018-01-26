function plusMinus(arr) {
    arrLen = arr.length;
    positive = 0;
    negative = 0;
    zero = 0;
    arr.map(number => {
        if(number === 0){
            zero+=1;
        }
        if(number < 0){
            negative+=1;
        }
        if(number > 0){
            positive+=1;
        }
    })
    console.log((positive / arrLen).toFixed(arrLen))
    console.log((negative / arrLen).toFixed(arrLen))
    console.log((zero / arrLen).toFixed(arrLen)) ;
}
arr = [-4, 3, -9, 0, 4, 1] 
plusMinus(arr) 
