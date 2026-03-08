// Problem Link: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let gcdLen = gcd(str1.length, str2.length);

    return str1.substring(0, gcdLen);
};

// Entry
console.log("RESULT>>", gcdOfStrings("ABCABC", "ABC"))