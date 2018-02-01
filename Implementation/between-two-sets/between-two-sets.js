function getTotalX(a, b) {
    aFactors = [];
    bFactors = [];
    allFactorsArrayinA = new Set([])
    allFactorsArrayinB = new Set([])

    a.map(number => {
        for (let i = 1; i <= number; i++) {
					for (let j = 1; j <= 10; j++) {
							const current = j * i;
							if(current === number){
									allFactorsArrayinA.add(i)
							}
					}
        }
		})
		b.map(number => {
			for (let i = 1; i <= number; i++) {
				for (let j = 1; j <= 10; j++) {
						const current = j * i;
						if(current === number){
								allFactorsArrayinB.add(i)
						}
				}
			}
	})
	let filteredSetA = new Set([]);
	Array.from(allFactorsArrayinA).map(x => {
	// console.log(d);

	for (let i=0; i < a.length; i++){
		let acc = [];
		console.log(`${x} % ${a[i]}`,x % a[i]);

		if (x % a[i] === 0 ){
			filteredSetA.add(x);
		}
		
	}
	
	})
	
	console.log(filteredSetA);
		
    
}
getTotalX([ 2, 4 ], [ 16, 32, 96 ])