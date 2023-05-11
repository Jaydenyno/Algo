/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    // Code goes here
    let map1 = {};
    let map2 = {};
    let arr = [];
    for (let x = 0; x < sortedA.length; x++) {
        if (!map1[sortedA[x]]) {
            map1[sortedA[x]] = 1;
        } else {
            map1[sortedA[x]]++;
        }
    }
    for (let y = 0; y < sortedB.length; y++) {
        if (!map2[sortedB[y]]) {
            map2[sortedB[y]] = 1;
        } else {
            map2[sortedB[y]]++;
        }
    }
    console.log(map1)
    console.log(map2)
    for (key1 in map1) {
        if (!map2[key1] || map1[key1] == map2[key1]) {
            for (let a = 0; a < map1[key1]; a++) {
                arr.push(key1);
            }
        } else if (map1[key1] > map2[key1]) {
            for (let b = 0; b < map1[key1]; b++) {
                arr.push(key1);
            }
        } else {
            for (let c = 0; c < map2[key1]; c++) {
                arr.push(key1);
            }
        }
    }
    for (key2 in map2) {
        if (!map1[key2]) {
            for (let d = 0; d < map2[key2]; d++) {
                arr.push(key2);
            }
        }
    }
    let result =  [];
    for (let e = 0; e < arr.length; e++) {
        result.push(parseInt(arr[e]));
    }
    return result;
}
console.log("Answer: ", orderedMultisetUnion(nums1A, nums1B), "Expected: ", expected1)
// ===== Did not finish :C =====
// ===== Combining the map would've made things easier and led to answer =====