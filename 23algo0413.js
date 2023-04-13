/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    var new1 = "";
    var new2 = "";
    var newAmnt = amnt % str.length;
    new1 = str.slice(str.length - newAmnt, str.length);
    new2 = str.slice(0, str.length - newAmnt);
    return new1 + new2;
}

console.log(rotateStr(str, rotateAmnt1), "and expected is", expected1)
console.log(rotateStr(str, rotateAmnt2), "and expected is", expected2)
console.log(rotateStr(str, rotateAmnt3), "and expected is", expected3)
console.log(rotateStr(str, rotateAmnt4), "and expected is", expected4)
console.log(rotateStr(str, rotateAmnt5), "and expected is", expected5)

// .slice?
/*****************************************************************************/