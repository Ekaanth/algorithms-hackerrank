function getMoneySpent(keyboards, drives, s){
  costArray = []
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let cost = keyboards[i] + drives[j]
      if (cost < s){
        costArray.push(cost)
      }
    }
  }
  if(costArray.length > 0){
    return Math.max(...costArray)
  }else return -1
}
getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10)
getMoneySpent([4], [5], 5)