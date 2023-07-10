// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

const nums1 = [1,1,1,2,2,3,4,4,4,4,4,4,5,5];
const k1 = 2;
// Output: [1,2]

// Example 2:

const nums2 = [1];
const k2 = 1;
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequency = {}
    for( let i = 0; i < nums.length; i++){
        if(frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }
    console.log("Map: ", frequency);
    let result = Object.keys(frequency).map((key) => [Number(key), frequency[key]]);
    console.log("let result: ", result);
    let sortedResult = result.sort((a,b) => {
        return b[1]-a[1]
    })
    console.log("sortedResult: ", sortedResult);
    let output = []
    for ( let i = 0; i < k; i++){
        output.push(sortedResult[i][0])
    }
    return output;
};

console.log(topKFrequent(nums1, k1));