function introTutorial(V, arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === V){
            index = i;
            break;
        }
    }
    return index;
}
console.log(introTutorial(4, [ 1, 4, 5, 7, 9, 12 ]));
