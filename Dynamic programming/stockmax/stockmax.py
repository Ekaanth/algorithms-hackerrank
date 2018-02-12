def stockmax(prices):
    sharesBought = {}
    for i in range(len(prices)):
        if prices[i] < prices[i + 1] or None:
            print(prices[i])
            sharesBought[i] = prices[i]
    print(sharesBought)


stockmax([1, 2, 100])
