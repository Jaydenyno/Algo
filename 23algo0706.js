// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

const strs1 = ["eat","tea","tan","ate","nat","bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

const strs2 = [""];
// Output: [[""]]

// Example 3:
const strs3 = ["a"];
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//PSEUDO CODE
// Make a result array to return at the end which will have the output
// Go through given array of strings and create two temp map to compare two strings
// If they are valid anagram, push them to result array
// Return result at the end


// var groupAnagrams = function(strs) {
//     let result = [];

//     if (strs.length == 1) {
//         return [[strs[0]]];
//     }

//     for (let x = 0; x < strs.length - 1; x++) {
//         let tempArray = [];
//         let map1 = {};
//         for (let a = 0; a < strs[x].length; a++) {
//             if (!map1[strs[x][a]]) {
//                 map1[strs[x][a] = 1];
//             } else {
//                 map1[strs[x][a]]++;
//             }
//         }
//         tempArray.push(strs[x]);
//         console.log("Map for strs[x]: ", map1);
//         for (let y = x + 1; y < strs.length; y++) {
//             let map2 = {};
//             for (let b = 0; b < strs[y].length; b++) {
//                 if (!map2[strs[y][b]]) {
//                     map2[strs[y][b] = 1];
//                 } else {
//                     map2[strs[y][b]]++;
//                 }
//             }
//             console.log("Map for strs[y]: ", map2);
//             for (keys in map1) {
//                 if (map1[keys] == map2[keys]) {
//                     tempArray.push(strs[y]);
//                 }
//             }
//             console.log("tempArray to push into result: ", tempArray);
//         }
//     }
// };

// console.log("Result: ", groupAnagrams(strs1));

// --------------------------------- Unable to finish (ಥ﹏ಥ) --------------------------------------
// Given answer


// /**
//  * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
//  * Hash Map - Adjacency List
//  * Time O(N * (K * log(K))) | Space O(N * K)
//  * https://leetcode.com/problems/group-anagrams/
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = (words, map = new Map()) => {
//     if (!words.length) return [];

//     groupWords(words, map);    /* Time O(N * (K * log(K)) | Space O(N * K) */

//     return [ ...map.values() ];/* Time O(N)               | Space O(N * K) */
// };

// var groupWords = (words, map) => {
//     for (const original of words) {/* Time O(N) */
//         const sorted = reorder(original);/* Time O(K * log(K)) | Space O(K) */
//         const values = map.get(sorted) || [];

//         values.push(original);           /*                    | Space O(N) */
//         map.set(sorted, values);         /*                    | Space O(N * K) */
//     }
// }

// const reorder = (str) => str
//     .split('')                         /* Time O(K)          | Space O(K) */
//     .sort((a, b) => a.localeCompare(b))/* Time O(K * log(K)) | Space O(1 || log(K)) */
//     .join('');                         /* Time O(K)          | Space O(K) */

// /**
//  * Hash Map
//  * Time O(N * K) | Space O(N * K)
//  * https://leetcode.com/problems/group-anagrams/
//  * @param {string[]} words
//  * @return {string[][]}
//  */
var groupAnagrams = (words, map = new Map()) => {
    if (!words.length) return [];

    groupWords(words, map);    /* Time O(N * K) | Space O(N * K) */

    return [ ...map.values() ];/* Time O(N)     | Space O(N * K) */
}

var groupWords = (words, map) => {
    for (const original of words) {/* Time O(N) */
        const hash = getHash(original); /* Time O(K) | Space O(1) */
        const values = map.get(hash) || [];

        values.push(original);          /*           | Space O(N) */
        map.set(hash, values);          /*           | Space O(N * K) */
    }
}

const getHash = (word) => {
    const frequency = new Array(26).fill(0);

    for (const char of word) {/* Time O(K) */
        const charCode = getCode(char);/* Time O(1) | Space (1) */

        frequency[charCode]++;         /*           | Space O(1) */
    }

    return buildHash(frequency)
}

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

const buildHash = (frequency) => frequency.toString();


// ------------------------------------------- Note ------------------------------------------

// 1. One thing I learned from given answer is that creating different functions to handle different part of actions or steps could help organizing.
// 2. Using built in functions or methods possibliy shorten the amount of work

