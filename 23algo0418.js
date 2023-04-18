/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    var newArr = [];
    for (var x = 0; x < arr1.length || x < arr2.length; x++) {
        if (arr1[x] !== undefined) {
            newArr.push(arr1[x]);
        }
        if (arr2[x] !== undefined) {
            newArr.push(arr2[x]);
        }
    }
    return newArr;
}
console.log("Answer: ", interleaveArrays(arrA1, arrB1), "Expected answer: ", expected1)
console.log("Answer: ", interleaveArrays(arrA2, arrB2), "Expected answer: ", expected2)
console.log("Answer: ", interleaveArrays(arrA3, arrB3), "Expected answer: ", expected3)
console.log("Answer: ", interleaveArrays(arrA4, arrB4), "Expected answer: ", expected4)
