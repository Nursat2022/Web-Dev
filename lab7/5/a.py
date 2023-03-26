def findMin(a, b, c, d):
    if a > b: a = b
    if a > c: a = c
    if a > d: a = d
    return a

a, b, c, d = map(int, input().split())
print(findMin(a, b, c, d))
