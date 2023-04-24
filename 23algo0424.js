/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    {
        if (num <= 0)
            return 0;
        return Math.floor(num) + recursiveSigma(num - 1);
    }
}

console.log("Answer: ", recursiveSigma(num1), "Expected Answer: ", expected1)
console.log("Answer: ", recursiveSigma(num2), "Expected Answer: ", expected2)
console.log("Answer: ", recursiveSigma(num3), "Expected Answer: ", expected3)
/*****************************************************************************/