from mpmath import mp

# This very sophisticated algorithm will sort an array of numbers and strings based on the first appearance of the number in Pi. 
# If the number is not in Pi, it will be placed at the end of the array.
# This algorithm is also able to the "." character, which is at the start of pi in 3.14 




# Recomnedations:
# the higher your numbers are the higher the amount of digits of pi you probably will need
mp.dps = 100000
piDigits = str(mp.pi)

def FindLocationInPi(number): 
    piIndex = -1
    strNumber = str(number)
    numberLength = len(strNumber)

    if numberLength == 1:
        for i in range(len(piDigits)):
            if piDigits[i] == strNumber:
                piIndex = i
                return piIndex
    else: 
        for i in range(len(piDigits) - numberLength + 1):
            if piDigits[i] == strNumber[0]:
                if piDigits[i + numberLength - 1] == strNumber[numberLength - 1]: 
                    if piDigits[i:i + numberLength] == strNumber:
                        piIndex = i
                        return piIndex
        return len(piDigits) + 1

def SortKey(item):
    return item[1]    

def PiSort(arr):
    locationInPi = {}
    amountOfSameNumbers = {}

    for number in arr:
        if number not in locationInPi:
            locationInPi[number] = FindLocationInPi(number)
            amountOfSameNumbers[number] = 1
        else: 
            amountOfSameNumbers[number] += 1

    sortedItems = sorted(locationInPi.items(), key=SortKey)
    sortedInPi = dict(sortedItems)
    # print("sortedInPi:", sortedInPi)
    # print("amountOfSameNumbers:", amountOfSameNumbers)

    sortedArray = []
    for number in sortedInPi:
        for _ in range(amountOfSameNumbers[number]):
            sortedArray.append(number)

    return sortedArray

inputArray = [1, 2, 3, 5, 3, 3, 2, ".", 359, 1235123465143261346, 3.1415]
print(PiSort(inputArray)) # Output should be [3, 3, 3, 3.1415, '.', 1, 5, 2, 2, 359, 1235123465143261346]
