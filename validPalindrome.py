# def isPalindrome(s):
#     newStr = {}; i =0; isEven = True;
#     if s == " ": return True;
#     for char in s:
#         if char.isalnum():
#             newStr[i] = ord(char.lower());
#             i+=1;
#     if not newStr: return True;
#     newLength = int(len(newStr));
#     midValIndex = int(newLength/2);
#     if newLength%2!=0:
#         isEven = False;
#         del newStr[midValIndex]
#     for j in range(midValIndex):
#         diff = midValIndex*2-1 - int(j) if isEven else midValIndex*2 - int(j);
#         if newStr[j]!= newStr[diff]:
#             return False;

#     return True;

def isPalindrome(s):
    newStr = [];
    if s == " ": return True;
    for char in s:
        if char.isalnum():
            newStr.append(ord(char.lower()));      
    return newStr==newStr[::-1];

print(isPalindrome("abba"))
