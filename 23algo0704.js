// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

Input: s1 = "anagram", t1 = "nagaram"
// Output: true

// Example 2:

Input: s2 = "rat", t2 = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1 = {};
    let map2 = {};
    if (s.length !== t.length) {
        return false;
    }
    for (let x = 0; x < s.length; x++) {
        if (!map1[s[x]]) {
            map1[s[x]] = 1;
        } else {
            map1[s[x]]++;
        }
    }
    for (let y = 0; y < t.length; y++) {
        if (!map2[t[y]]) {
            map2[t[y]] = 1;
        } else {
            map2[t[y]]++;
        }
    }
    console.log("map1 components: ", map1);
    console.log("map2 components: ", map2);

    for (keys in map1) {
        if (map1[keys] !== map2[keys]) {
            return false;
        }
    }
    return true;

};

console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));


// Not Finished