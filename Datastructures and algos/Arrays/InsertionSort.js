const input = [7, 2, 3, 5, 1, 12]


function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        let index = 0
        for (let k = i; k > -1; k--) {
            if (current > arr[k]) break;
            index = k
        }
        arr.splice(i, 1)
        arr.splice(index, 0, current)
    }
}

insertionSort(input)
console.log(input)