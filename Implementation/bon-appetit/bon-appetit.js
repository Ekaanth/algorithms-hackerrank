function bonAppetit(n, k, b, ar) {
    const sum = (a, b) => a+b;
    ar[k] = 0;
    console.log(ar);
    
    let sumOfArray = ar.reduce(sum);
    console.log(sumOfArray);
    
    bActual = b - (sumOfArray / 2)
    if (bActual === 0){
        return 'Bon Appetit'
    }else {
       return bActual; 
    }

}
console.log(bonAppetit(10, 6, 288, [ 72, 53, 60, 66, 90, 62, 12, 31, 36, 94]));
