def solve(n):
    count = 0
    for x in range(len(n)):
        xor = n ^ x
        if n+x == xor:
            count = count + 1
    return count
