/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length < 1) return false;

    s = s.toLowerCase().split(" ").join("");

    let cleanStr = [];
    for (let i = 0; i < s.length; i++) {

        if ((96 < s.charCodeAt(i) && s.charCodeAt(i) < 123) || (47 < s.charCodeAt(i) && s.charCodeAt(i) < 58)) {
            cleanStr.push(s[i]);
        }
    }

    if (cleanStr.length == 1) return true;

    // BEST SOLUTION
    //  s = s.replace(/[\W_]/g, '').toLowerCase() // JUST APPEND THIS LINE ON THE TOP AND KEEP THE WHILE CHECK LOOP

    let l = 0;
    let r = cleanStr.length - 1;

    while (l <= r) {
        if (cleanStr[l] !== cleanStr[r]) return false

        l++;
        r--
    }

    return true;
};

console.log(isPalindrome("0P"));