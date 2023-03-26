n = int(input())

arr = list(map(int, input().split()))

arr = [el for index, el in enumerate(arr) if index % 2 == 0]
print(*arr)