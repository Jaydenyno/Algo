// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

const nums1 = [2,7,11,15];
const target1 = 9;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

const nums2 = [3,2,4];
const target2 = 6;
// Output: [1,2]

// Example 3:

const nums3 = [3,3];
const target3 = 6;
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = [];
    for (let x = 0; x < nums.length - 1; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            console.log("Given array: ", nums);
            console.log("Given target value: ", target);
            console.log("numx[x]: ", nums[x]);
            console.log("numx[y]: ", nums[y]);
            if (nums[x] + nums[y] == target) {
                temp.push(x);
                temp.push(y);
                return temp;
            }
        }
    }
    return temp;
};

console.log("Answer: ", twoSum(nums1, target1));