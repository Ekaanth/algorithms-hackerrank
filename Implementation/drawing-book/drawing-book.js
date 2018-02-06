function solve(n, p){
  countFromFront = 0;
  countFromBack = 0;
  for (let i = 0; i < n; i+=2) {
    if(i === 0){
      page = n - 1;
      if(page === p){
        if (page % 2 !== 0){
          countFromBack++;
        }
        break;
      }
    }else {
    countFromBack++;
    page = n - i;
    if(page === p || p === page - 1){
      break;
    }
    }
  }
  for (let j = 0; j < n; j += 2) {
    let page = 0;
    if(j === 0){
      page = page + 1;
      if(page === p || page === p + 1){
        countFromFront = 1;
        break;
      }
    }else {
    countFromFront++;
    page = page + j;
    if(page === p || page === p - 1){
      break;
    }
    }
  }
  if (n === p || p === 1){
    return 0
  }else {
    return Math.min(countFromBack, countFromFront);
  }
}
console.log(solve(6, 5));
console.log(solve(5, 4));
