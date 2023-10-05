// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
const strs1 = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
const strs2 = [""]
// Output: [[""]]

// Example 3:
const strs3 = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for (let str of strs) {
        let s = str.split("").sort().join("");
        // console.log("split: ", str.split(''));
        // console.log("split, sort: ", str.split('').sort());
        // console.log("split, sort, join: ", str.split('').sort().join(''));
        if (!map[s]) map[s] = []
        map[s].push(str);
    }
    return Object.values(map);
};

console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));