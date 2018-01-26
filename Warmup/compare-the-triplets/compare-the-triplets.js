function solve(a0, a1, a2, b0, b1, b2) {
    let alice = 0;
    let bob = 0;
    let a = [a0, a1, a2];
    let b = [b0, b1, b2];
    for (i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++;
        }
        if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob]
}