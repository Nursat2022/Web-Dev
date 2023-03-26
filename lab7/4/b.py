n = int(input())

arr = list(map(int, input().split()))

evens = [i for i in arr if i % 2 == 0]
print(*evens)