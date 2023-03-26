n = int(input())
arr = list(map(int, input().split()))

for i in range(int(n/2)):
    num = arr[i]
    arr[i] = arr[n - 1 - i]
    arr[n - 1 - i] = num

print(*arr)