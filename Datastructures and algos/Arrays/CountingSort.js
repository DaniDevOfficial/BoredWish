const input = [4, 2, 1]

function countingSort(arr) {
    const counter = []
    for (let i = 0; i <= Math.max(...arr); i++) {
        counter[i] = 0
    }
    while (arr.length > 0) {
        counter[arr[0]] = counter[arr[0]] + 1
        arr.shift();
    }

    const newArray = []
    for (let i = 0; i < counter.length; i++) {
        for (let n = 0; n < counter[i]; n++) {
            newArray.push(i)
        }
    }
    console.log(newArray)
}

countingSort(input)