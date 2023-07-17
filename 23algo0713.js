// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Example 1:

const nums1 = [1,2,3,4];
// Output: [24,12,8,6]

// Example 2:

const nums2 = [-1,1,0,-3,3];
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    for (let x = 0; x < nums.length; x++) {
        // console.log("Index to ignore: ", x);
        let product = 1;
        for (let y = 0; y < nums.length; y++) {
            if (x == y) {
                continue;
            } 
            // console.log("Current index: ", y, "Current index value: ", nums[y]);
            product *= nums[y];
        }
        result.push(product);
    }
    return result;
};

console.log(productExceptSelf(nums1));
console.log(productExceptSelf(nums2));