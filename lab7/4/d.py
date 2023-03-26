n = int(input())
arr = list(map(int, input().split()))
if n > 1:
    ans = [arr[i] for i in range(1, len(arr)) if arr[i] > arr[i-1]]
    print(len(ans))

else: print(0)