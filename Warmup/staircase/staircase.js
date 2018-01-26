function staircase(n) {
    n+=1;
    for (let index = 1; index < n; index++) {
        stairs = ' '.repeat(n).slice(index, -1) + '#'.repeat(index) ;
        console.log(stairs);
    }
}
staircase(6);