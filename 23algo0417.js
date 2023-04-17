/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

const nums6 = [1, 4, 5, 1, 4, 5, 8, 9, 2, 1, 4, 5]
const expected6 = 8


/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
    var obj = {};
    //goes through nums array and if  the index value is not in obj, create with value of one. Else, add one.
    for (var x = 0; x < nums.length; x++) {
        if (!obj[nums[x]]) {
            obj[nums[x]] = 1
        } else {
            obj[nums[x]]++;
        }
    }


    for (var y in nums) {
        if (obj[nums[y]] == 1) {
            return nums[y];
        }
    }
    return null;
}
console.log(firstNonRepeated(nums1), "expected answer ", expected1)
console.log(firstNonRepeated(nums2), "expected answer ", expected2)
console.log(firstNonRepeated(nums3), "expected answer ", expected3)
console.log(firstNonRepeated(nums4), "expected answer ", expected4)
console.log(firstNonRepeated(nums5), "expected answer ", expected5)
console.log(firstNonRepeated(nums6), "expected answer ", expected6)
/*****************************************************************************/