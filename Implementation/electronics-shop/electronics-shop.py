def getMoneySpent(keyboards, drives, s):
    costArray = []
    for i in range(len(keyboards)):
        for j in range(len(drives)):
            cost = keyboards[i] + drives[j]
            if cost < s:
                costArray.append(cost)
    if len(costArray) > 0:
        print(costArray)
        return max(costArray)
    else:
        return -1

getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10)
getMoneySpent([4], [5], 5)