// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {
    let solution = [];
    for (let x = 0; x < arr.length; x++) {
        if (cb(arr[x])) {
            solution.push(arr[x])
        }
    }
    return solution;
}

console.log(dropIt(nums1, callback1));
console.log(dropIt(nums2, callback2));
console.log(dropIt(nums3, callback3));

function functionalDropIt(arr, cb) {
    let solution = [];
    arr.map((x) => cb(x) ? solution.push(x) : false)
    return solution
}
console.log(functionalDropIt(nums1, callback1));
console.log(functionalDropIt(nums2, callback2));
console.log(functionalDropIt(nums3, callback3));
/*****************************************************************************/