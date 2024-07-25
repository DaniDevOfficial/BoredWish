const input = [1, 200, 300, 400]



function radixSort(arr){
    const radixArray = [[], [], [], [], [], [], [], [], [], []]
    const maxVal = Math.max(...arr)
    let exp = 1
    // this is for checking every number slot
    while(Math.floor(maxVal / exp) > 0){
        console.log("exp: ", exp)
        console.log("array before: ", arr)
        // this is for putting the numbers in their corresponding radix array possisions
        while(arr.length > 0){
            const val = arr[0]
            arr.shift()
            const index = (Math.floor(val / exp)) % 10
            radixArray[index].push(val)
        }
        console.log(radixArray)
        // this is for removing the numbers ascending from the radix array
        for(let i = 0; i < radixArray.length; i++){
            console.log("current index: ", i)
            while(radixArray[i].length > 0){
                const val = radixArray[i][0]
                arr.push(val)
                radixArray[i].shift()
            }
        }
        console.log("array after: ", arr)

        exp *= 10
    }
}

radixSort(input)
console.log(input)