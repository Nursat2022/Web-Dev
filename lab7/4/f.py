n = int(input())
arr = list(map(int, input().split()))

ans = [arr[i] for i in range(1, len(arr)-1) if arr[i-1] < arr[i] and arr[i+1] < arr[i]]

print(len(ans))