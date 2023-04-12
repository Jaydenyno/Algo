/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    var obj = {};
    for (var x = 0; x < nums.length; x++) {   // goes through every elements within nums
        if (!obj[nums[x]]) {  // if key does not exist, create key(for this example, nums[x]) and give it a value of 1
            obj[nums[x]] = 1;
        } else if (obj[nums[x]]) { // if there is a key with same name, add 1
            obj[nums[x]] += 1;
        }
    }
    for (var keys in obj) { //{key: ObjName[key]}
        if (obj[keys] % 2 == 1) {
            return keys;
        }
    }
}

console.log(oddOccurrencesInArray(nums1), expected1)
console.log(oddOccurrencesInArray(nums2), expected2)
console.log(oddOccurrencesInArray(nums3), expected3)
console.log(oddOccurrencesInArray(nums4), expected4)