

function swap(arr, index1, index2) {
    const num1 = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = num1
}

function findMiddleElement(arr, low, high) {
    const num1 = arr[low];
    const num2 = arr[Math.floor((arr.length - 1) / 2)];
    const num3 = arr[high];
    const middle = num1 + num2 + num3 - Math.min(num1, num2, num3) - Math.max(num1, num2, num3);

    let middleIndex = -1;

    if (middle === num1) {
        middleIndex = low;
    } else if (middle === num2) {
        middleIndex = Math.floor((arr.length - 1) / 2);
    } else if (middle === num3) {
        middleIndex = high;
    }

    return { value: middle, index: middleIndex };
}

function Partition(arr, left, right){
    const pivot = arr[right]
    let leftWall = left
    for(let i = left; i < right; i++){
        if(pivot > arr[i]){
            swap(arr, leftWall, i)
            leftWall++; 
        }
    }
    swap(arr, leftWall, right)
    return leftWall;
}


function QuickSort(arr, left = 0, right = undefined) {
    if(right == undefined) right = arr.length - 1;
    if (left < right) {
        const pivotIndex = Partition(arr, left, right);
        QuickSort(arr, left, pivotIndex - 1);
        QuickSort(arr, pivotIndex, right);
    }
    return arr;
}

const array = [1, 6, 2, 4, 5, 3];

// console.time("QuickSort");
// console.log(array);
QuickSort(array);
// console.log(array);
// console.timeEnd("QuickSort");


