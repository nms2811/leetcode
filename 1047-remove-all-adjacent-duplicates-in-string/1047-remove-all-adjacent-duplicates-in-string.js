/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for (let char of s) {
        (char === stack[stack.length - 1])? stack.pop(): stack.push(char);
    }
    return stack.join('');
};