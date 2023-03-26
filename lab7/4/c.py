n = int(input())

arr = list(map(int, input().split()))

positives = [i for i in arr if i > 0]
print(len(positives))