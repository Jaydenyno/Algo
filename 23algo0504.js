/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
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
    for (keys1 in map1) {
        for (keys2 in map2) {
            if (keys1 == keys2) {
                arr.push(keys2);
            }
        }
    }
    return arr;
}
console.log("Answer: ", orderedIntersection(numsA1, numsB1), "Expected Answer: ", expected1)
console.log("Answer: ", orderedIntersection(numsA2, numsB2), "Expected Answer: ", expected2)
console.log("Answer: ", orderedIntersection(numsA3, numsB3), "Expected Answer: ", expected3)
/*****************************************************************************/


module.exports = { orderedIntersection };