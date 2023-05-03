/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort. // if doubles in the array, they may or may not be in the same order after sorting
    
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
  // PSEUDO CODE
  // nested loop
  // outer loop (i loop) keeps track of where we are
  // inner loop (j loop) keeps track of minimum
  // create a for loop
  // create a min var, and a min idx var, current
  // inside j loop have a conditional that compares for min
  // inside the if, we have found a smaller val, so make that the new min
  // after j loop swap (if current and min are different)
function selectionSort(nums = []) {
    for (var x = 0; x < nums.length; x++) {
        let min = nums[x];
        let minIdx = x;
        for (var y = x; y < nums.length; y++) {
            if (min > nums[y]) {
                min = nums[y];
                minIdx = y;
            }
        }
        if (nums[x] != nums[minIdx]) {
            [nums[x], nums[minIdx]] = [nums[minIdx], nums[x]];
        }
    }
    return nums;
}

console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));

/*****************************************************************************/