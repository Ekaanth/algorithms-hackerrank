function getMoneySpent(keyboards, drives, s) {
  highestCost = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let cost = keyboards[i] + drives[j];
      if (cost <= s) {
        if (cost > highestCost) {
          highestCost = cost;
        }
      }
    }
  }
  if (highestCost > 0) {
    return highestCost;
  } else return -1;
}
