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
    console.log(currentFlock);
    let max = Object.keys(currentFlock).reduce((a, b) => currentFlock[a] > currentFlock[b] ? currentFlock[b] : currentFlock[b]);
    console.log(max);
    
    
    console.log('XXXX', Object.keys(currentFlock).filter(key => currentFlock[key] === max));
     
}
migratoryBirds(6, [1, 4, 4, 4, 5, 3]);
