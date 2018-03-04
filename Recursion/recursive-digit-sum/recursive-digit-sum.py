#!/bin/python3

import sys


def digitSum(n, k):
    superDigit = (n * k) % 9
    if superDigit == 0:
        return 9
    else:
        return superDigit


if __name__ == "__main__":
    n, k = input().strip().split(' ')
    n, k = [int(n), int(k)]
    result = digitSum(n, k)
    print(result)
