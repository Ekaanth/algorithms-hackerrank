function getTotalX(a, b) {
    aFactors = [];
    bFactors = [];
    allFactorsArrayinA = new Set([])

    a.map(number => {

        for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= 10; j++) {
            // console.log(`${i} * ${j}=`, j * i );
            const current = j * i;
            if(current === number){
                allFactorsArrayinA.add(i)
            }

        }

        }
    })
    console.log(allFactorsArrayinA);
    
}
getTotalX([ 2, 4 ], [ 16, 32, 96 ])