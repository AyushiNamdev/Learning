def ReverseString():
    Input = input("enter string")
    rev = ""
    for i in Input:
        rev = i+rev
    print(rev)

ReverseString()