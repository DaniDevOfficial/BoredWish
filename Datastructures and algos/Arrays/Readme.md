# All the Sorting algos step by step

## Bubble sort

Name is because the biggest numbers bubble to the top. Its O(n^2) minus a bit because its not 100% squared.

Information:

- Don't sort the last i elements because they are already sorted (bubbled up)

1. go thru all the elements n times.
2. compare arr[i] and arr[i + 1]. if the arr[i] is bigger swap the two.
3. after arr.length iterations of the array it should be sorted.

## QuickSort

1. **Choose a Pivot**:
   - Pick a pivot element from the array.
   - A common method is to use the "median-of-three" approach: choose the median of the first, middle, and last elements of the array / subarray.

2. **Partitioning**:
   - Reorder the array / subarray so that all elements less than the pivot are on the left, and all elements greater than the pivot are on the right.
   - The pivot is now in its final position.

3. **Recursive Sorting**:
   - Recursively apply the above steps to the sub-arrays formed by splitting the array at the pivot's final position.
   - One sub-array is from the start to just before the pivot.
   - The other sub-array is from just after the pivot to the end.

### Detailed Steps

1. **Initial Call**:
   - Start with the entire array and the initial left (start) and right (end) indices.

2. **Choosing the Pivot**:
   - Identify three elements: the first, middle, and last elements of the array.
   - Determine the median of these three elements to use as the pivot.

3. **Partitioning Process**:
   - Move elements less than the pivot to its left.
   - Move elements greater than the pivot to its right.
   - Keep track of the index where the pivot ends up.

4. **Recursive Sorting**:
   - Call the QuickSort function recursively on the left sub-array (elements before the pivot's final position).
   - Call the QuickSort function recursively on the right sub-array (elements after the pivot's final position).

5. **Base Case**:
   - If the sub-array has one or no elements, it is already sorted, so the recursion stops.
