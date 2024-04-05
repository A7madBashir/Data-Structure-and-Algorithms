/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n < 1 || n > 8) return [];

    let result = []
    function backtrack(S = '', left = 0, right = 0) {
        if (S.length === 2 * n) {
            result.push(S);
            return;
        }
        if (left < n) {
            backtrack(S + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(S + ')', left, right + 1);
        }
    }

    backtrack();
    return result;
};


console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"]
