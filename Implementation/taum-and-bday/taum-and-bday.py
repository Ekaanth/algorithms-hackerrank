def taumBday(b, w, x, y, z):
    if ((x == y and y == z) or (x < z and y < z)):
        return b * x + w * y
    if (x > y and x > z):
        costs = []
        whiteToBlackCost = y + z
        c1 = b * whiteToBlackCost + w * y
        c2 = b * x + w * y
        costs.append(c1)
        costs.append(c2)
        return min(costs)
    if (y > x and y > z):
        costs = []
        blackToWhiteCost = x + z
        c1 = b * x + w * blackToWhiteCost
        c2 = b * x + w * y
        costs.append(c1)
        costs.append(c2)
        return min(costs)


print(taumBday(10, 10, 1, 1, 1))
