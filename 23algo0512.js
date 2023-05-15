// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/*****************************************************************************/
/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
// function twoSum(nums, targetSum) {
//     //Code goes here
//     var arr = [];
//     for (let x = 0; x < nums.length - 1; x++) {
//         for (let y = x + 1; y < nums.length; y++) {
//             if (nums[x] + nums[y] == targetSum) {
//                 arr.push(x)
//                 arr.push(y)
//             }
//         }
//     }
//     return arr;
// }

function twoSum(nums, targetSum) {
    //Code goes here
    let map = {};
    for (let x = 0;  x < nums.length; x++) {
        let indexValue = nums[x];
        let diff = targetSum - indexValue;
        if (map.hasOwnProperty(diff)) {
            return([map[diff], x])
        }
        map[indexValue] = x;
        console.log(map)
    }
}


console.log("Answer: ", twoSum(nums1, targetSum1), "Expected Answer: ", expected1);
console.log("Answer: ", twoSum(nums2, targetSum2), "Expected Answer: ", expected2);
console.log("Answer: ", twoSum(nums3, targetSum3), "Expected Answer: ", expected3);