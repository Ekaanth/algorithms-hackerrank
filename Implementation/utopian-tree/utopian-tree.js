function utopianTree(n) {
  if (n === 0){
    return 1;
  }
  else if(n === 1){
    return 2;
  } else {
    h = 1;
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0){
        h *=2;
      }else {
        h+=1
      }
    }
    return h;
  }
}
// utopianTree(0)
// utopianTree(1)
console.log(utopianTree(3));
