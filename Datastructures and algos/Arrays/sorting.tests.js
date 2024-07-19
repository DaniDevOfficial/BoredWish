
const selectionSort = require("./SelectionSort");
const bubbleSort = require("./BubbleSort");
const QuickSort = require("./QuickSort");
const insertionSort = require("./InsertionSort");



function runTests() {
    const tests = [
        { input: [1, 6, 2, 4, 5, 3], expected: [1, 2, 3, 4, 5, 6] },
        { input: [1, 6, 2, 4, 5, 3, 7], expected: [1, 2, 3, 4, 5, 6, 7] },
        { input: [1, 6, 2, 4, 5, 3, 7, 0], expected: [0, 1, 2, 3, 4, 5, 6, 7] },
        { input: [], expected: [] },
        { input: [5], expected: [5] },
        { input: [5, -2, 10, 3], expected: [-2, 3, 5, 10] },
        { input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    ];

    const sortingFunctions = { QuickSort, insertionSort, bubbleSort, selectionSort };

    for (let [sortName, sortFunction] of Object.entries(sortingFunctions)) {
        console.log(`Testing ${sortName}...`);
        for (let { input, expected } of tests) {
            const inputCopy = [...input];

            console.time(`${sortName} - ${JSON.stringify(input)}`);

            const sorted = sortFunction(inputCopy);

            console.timeEnd(`${sortName} - ${JSON.stringify(input)}`);

            if (!arraysEqual(sorted, expected)) {
                console.log(`Test failed for ${sortName} with input ${JSON.stringify(input)}`);
                console.log(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(sorted)}`);
            } else {
                console.log(`Test passed for ${sortName} with input ${JSON.stringify(input)}`);
            }
        }
    }
}

runTests();
