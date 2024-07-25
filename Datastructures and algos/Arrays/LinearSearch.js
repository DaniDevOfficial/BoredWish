const input = [1, 6, 2, 4, 5, 3]
const toFind = 12
function linearSort(arr, toFind){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == toFind) return i;
    }
    return null
}

console.log(linearSort(input, toFind))