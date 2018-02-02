function getFactors(arr) {
	let factorSet = new Set([])
	arr.map(number => {
		for (let i = 1; i <= number; i++) {
			for (let j = 1; j <= number; j++) {
					const current = i * j;
					if(current === number){
							factorSet.add(i)
					}
			}
		}

})
return factorSet;
}
function getTotalX(a, b) {
    aFactors = [];
    bFactors = [];
    allFactorsArrayinA = getFactors(a);
    allFactorsArrayinB = getFactors(b);

    
		let factorsOfArrayB = [];
	b.map(n => {
		let currentSet = getFactors([n])
		factorsOfArrayB.push(currentSet);
	})
	let filteredSet = new Set([]);
	[...allFactorsArrayinB].map(x => {
		factorsOfArrayB.map(n => {
			if(!n.has(x)){
				filteredSet.add(x);
			}
		})

	
	})
	
	let newList = [...filteredSet].map(num => { // This makes common factors to all.
		allFactorsArrayinB.delete(num)
	});
  let mainCount = 0;
	// console.log(allFactorsArrayinB);
	[...allFactorsArrayinB].map(x => {
		// console.log('current',x, getFactors([x]));
		let temp = getFactors([x]);
		let count = 0;
		for (let i = 0; i < a.length; i++) {
			// console.log(a[i],temp,temp.has(a[i]));
			
			if (temp.has(a[i])){
				count ++;
			}
		}
		if (count === a.length){
			mainCount++;
		}

	})
	return mainCount;

}

// getTotalX([ 2, 4 ], [ 16, 32, 96 ]);

getTotalX([ 100, 99, 98, 97, 96, 95, 94, 93, 92, 91], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
