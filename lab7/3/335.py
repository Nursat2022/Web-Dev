a = int(input())
b = int(input())

for i in range(a, b + 1):
    for j in range(1, i):
        if i == j**2: print(i, end=' ')