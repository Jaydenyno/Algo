// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

Input: nums1 = [1,2,3,1]
// Output: true
// Example 2:

Input: nums2 = [1,2,3,4]
// Output: false
// Example 3:

Input: nums3 = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let x = 0; x < nums.length - 1; x++) {
        let temp = x;
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[temp] == nums[y]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));