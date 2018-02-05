def fibonacciModified(t1, t2, n):
    fibArray = [t1, t2]
    for i in range(1, n):
        for j in range(0, n):
            tx = fibArray[j] + (fibArray[j + i] ** 2)
            fibArray.append(tx)
    print(fibArray[n - 1])

fibonacciModified(0, 1, 10)
