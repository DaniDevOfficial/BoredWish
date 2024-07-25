const input = [1, 1, 2, 3, 3, 5, 6, 11, 12, 12, 14]
const toFind = 12

function binarySearch(input, toFind) {
    let left = 0
    let right = input.length
    let middle = Math.floor(right / 2)
    while (left < right) {
        middle = Math.floor((left + right) / 2)
        if (input[middle] == toFind) return middle
        if (input[middle] > toFind) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return null
}

console.log(binarySearch(input, toFind))