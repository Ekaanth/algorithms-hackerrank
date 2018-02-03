function insertionSort1(n, arr) {
    const y = arr.slice(0)
    const array = arr;
    initialLength = arr.length;
    element = arr[arr.length -1];
    array.pop(element);
    const x = y.sort((a, b) => (a - b)).indexOf(element);    
    for (let i = 0; i < array.length; ++i) {              
        if(array.length < initialLength && i === 1){
            array.push(array[array.length - i]);
            console.log(...array);
        }else if (array.length >= initialLength){
            
            if (array.length - i === x ){                
                array[array.length - i] = element;
                console.log(...array);
                break;
            }else {
                array[array.length - i] = array[array.length - i - 1]
                console.log(...array);
            }
        }
    }
    if (x === 0){
        array[0] = element;
        console.log(...array);
    }   
}
// insertionSort1(14, [ 1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23]);
insertionSort1(5, [ 2, 4, 6, 8, 6]);
// insertionSort1(10, [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);
