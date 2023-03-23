if __name__ == '__main__':
    n = int(input())

def to_str(n):
    ans = ""
    for i in range(1, n + 1):
        ans += str(i)
    
    return ans

print(to_str(n))
        
