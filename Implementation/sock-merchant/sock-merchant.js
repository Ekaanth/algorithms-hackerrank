function sockMerchant(n, ar) {
  socksCount = {};
  ar.map(s => {
    if (socksCount[s] === undefined){
      socksCount[s] = 0;
    }
    if(socksCount[s] >= 0){
      socksCount[s]+=1
    }
  })
  let pairCount = 0;
  const keys = Object.keys(socksCount);
  keys.map(key => {
    count = parseInt(socksCount[key] / 2);
    pairCount+=count;
  })
  return pairCount
}

sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ])