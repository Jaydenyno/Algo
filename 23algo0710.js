// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

const nums1 = [1,1,1,2,2,3];
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
    // map that hold keys with each frequency values
    let map = {}; 
    for (let x = 0; x < nums.length; x++) {
        if (!map[nums[x]]) {
            map[nums[x]] = 1;
        } else {
            map[nums[x]]++;
        }
    }
    console.log("Current map: ", map);

    // arr is arraylist of arrays form of [[key, keyValue(frequency)], ...])
    let arr = Object.keys(map).map((key) => [Number(key), map[key]]);
    console.log("let arr: ", arr);

    // sortedArr will sort arr from largest to smallest of keyValue(frequency)
    let sortedArr = arr.sort((a,b) => {
        return b[1]-a[1];
    })
    console.log("sortedArr: ", sortedArr);

    // pushing k number of key with highest frequency into result. 
    let result = [];
    for (let y = 0; y < k; y++) {
        result.push(sortedArr[y][0]);
    }
    return result;
};

console.log(topKFrequent(nums1, k1));