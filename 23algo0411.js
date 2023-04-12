//Unsolved :C

/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";


const str5 = "abba"
const expected5 = "ab"
const expected5_bonus = "ba"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
*/

// My attept
// function stringDedupe(str) {
//     var newStr = "";
//     for (var x = 0; x < str.length; x++) {
//         var restStr = str.substring(x+1, str.length);
//         for (var y = 0; y < restStr.length; y++) {
//             if (str[x] != restStr[y]) {
//                 newStr +=  str[x];
//             } else {
//                 newStr += str[x];
//                 str = str.substring()
//             }
//         }
//     }    
//     return newStr;    
// }
// console.log(stringDedupe(str1))
// console.log(stringDedupe(str2))
// console.log(stringDedupe(str3))
// console.log(stringDedupe(str4))
// console.log(stringDedupe(str5))
/*****************************************************************************/


// :C 


/**************************************************GIVEN SOLUTION******************************************************* */


function stringDedupe(str) {

    let map = {};
    let output = "";

    for (let x = 0; x < str.length; x++) {
        if (!map[str[x]]) {
            map[str[x]] = true;
            output += str[x];
        }
    }
    return output
}

console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str3))
console.log(stringDedupe(str4))
console.log(stringDedupe(str5))