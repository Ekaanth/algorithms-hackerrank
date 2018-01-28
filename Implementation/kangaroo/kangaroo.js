function kangaroo(x1, v1, x2, v2) {
    sameValueFound = false;
    let kangOneJumpCountArray = [];
        kangOneJumpCountArray[0] = x1;

    let kangTwoJumpCountArray = [];
        kangTwoJumpCountArray[0]= x2;
    for (let i = 1; i < 10000; i++) {
        kangOneJumpCountArray[i] = kangOneJumpCountArray[i - 1] + v1;
        kangTwoJumpCountArray[i] =  kangTwoJumpCountArray[i - 1] + v2;
        if (kangOneJumpCountArray[i] === kangTwoJumpCountArray[i]){
            sameValueFound = true;
            return 'YES';
            break;
        }
    }
    if(sameValueFound === false) {
        return 'NO';
    }    
}
kangaroo(0, 2, 5, 3)