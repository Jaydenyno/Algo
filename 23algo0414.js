/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

const strA5 = "noss"
const strB5 = "nott"


/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    s1 = s1.toLowerCase()
    s2 =  s2.toLowerCase()
    var obj = {};
    for (var x = 0; x < s1.length; x++) {
        if (!obj[s1[x]]) {
            obj[s1[x]] = 1;
        } else {
            obj[s1[x]]++;
        }
    }
    for (var y = 0; y < s2.length; y++) {
        if (!obj[s2[y]]) {
            obj[s2[y]] = 1;
        } else {
            obj[s2[y]]++;
        }
    }
    var boolean = true;
    for (keys in obj) {
        if (obj[keys] % 2 != 0) {
            return false;
        }
    }
    console.log(obj)
    return boolean;
}
    console.log(isAnagram(strA1, strB1), "expected is", expected1)
    console.log(isAnagram(strA2, strB2), "expected is", expected2)
    console.log(isAnagram(strA3, strB3), "expected is", expected3)
    console.log(isAnagram(strA4, strB4), "expected is", expected4)
    console.log(isAnagram(strA5, strB5))



/*****************************************************************************/



// this does not work for strA5 and strB5. My thoughts on change is that we use two obj instead of one obj. 