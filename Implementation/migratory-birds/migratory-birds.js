function migratoryBirds(n, ar) {
    birdTypes = new Set([1, 2, 3 ,4, 5]);
    let currentFlock = {};
    ar.map(bird => {
        if (currentFlock[bird] === undefined){
            currentFlock[`${bird}`] = 0 ;
        }
        if (currentFlock[bird] === 0 || currentFlock[bird] > 0){
            currentFlock[`${bird}`] = currentFlock[bird] + 1 ;
        }
    })
    let max = 0;
     Object.keys(currentFlock).map(b => {
        if (currentFlock[b] > max){
            max = currentFlock[b];
        }
    })
    maxItems = Object.keys(currentFlock).filter(key => currentFlock[key] === max);
    if (maxItems.length === 1){
        return maxItems[0]
    }else {
        return Math.min(...maxItems.map(Number))
    }

     
}
console.log(migratoryBirds(6, [1, 4, 4, 2, 5, 5]));
