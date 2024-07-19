


function bubbleSort(array){
    
    for(let i = 0; i < array.length; i++){
        for(let k = 0; k < array.length - i; k++){
            let num1 = array[k]
            let num2 = array[k + 1]
            if(num1 > num2){
                array[k] = num2
                array[k+1] = num1
            }
        }
    }
    return array
}

const input = [7, 2, 3, 5, 1, 12]

console.log(bubbleSort(input))