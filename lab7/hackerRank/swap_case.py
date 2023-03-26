def swap_case(s):
    ans = ""
    ans = [i.lower() if i.isupper() else i.upper() for i in s]
    return ''.join(ans)

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)