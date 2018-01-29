function getTotalX(a, b) {
    aFactors = [];
    bFactors = [];
    allFactorsArrayinA = [];

    a.map(number => {
        let currentNumberFactors = [number]
        for (let i = 1; i <= number; i++) {
            if(i * number === number){
            currentNumberFactors.push(i);
            }
            console.log('currentNumberFactors', currentNumberFactors);
            
            allFactorsArrayinA.push(currentNumberFactors)
        }
    })
    console.log(allFactorsArrayinA);
    
}
getTotalX([ 2, 4 ], [ 16, 32, 96 ])