/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length == 0 || s.length % 2 === 1) return [];

    s = s.replace(/[^(\[\])(\{\})(\(\))]*/gmi, "");
    if (s.length < 1) return [];

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if ((s[i] == ")" && stack.at(-1) == "(") ||
            (s[i] == "]" && stack.at(-1) == "[") ||
            (s[i] == "}" && stack.at(-1) == "{"))
            stack.pop()
        else
            stack.push(s[i])
    }

    return stack.length == 0
};

console.log(isValid("({})"))