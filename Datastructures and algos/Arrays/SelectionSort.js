const input = [7, 2, 3, 5, 1, 12]


function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = arr[i]
        for(let k = i; k < arr.length; k++){
            const current = arr[k]
            if(lowest > current) {
                arr[k] = lowest
                lowest = current
            }
        }
        arr[i] = lowest
    }
    return arr;
}

console.log(input)
console.log(selectionSort(input))
