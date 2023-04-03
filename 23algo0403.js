/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    var reversed = "";
    for (var x = str.length - 1; x >=0; x--) {
        reversed += str[x];
    }
    return reversed;
}

console.log(expected1, reverseString(str1));
console.log(expected2, reverseString(str2));
console.log(expected3, reverseString(str3));
console.log(expected4, reverseString(str4));
/*****************************************************************************/