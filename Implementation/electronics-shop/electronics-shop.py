def getMoneySpent(keyboards, drives, s):
    costArray = []
    for i in range(len(keyboards)):
        for j in range(len(drives)):
            cost = keyboards[i] + drives[j]
            if cost < s:
                costArray.append(cost)
    if len(costArray) > 0:
        print('Out', max(costArray))
        return max(costArray)
    else:
        return -1
