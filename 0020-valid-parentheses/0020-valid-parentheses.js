/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        '(':')',
        '{':'}',
        '[':']',
    }

    for (let i of s) {
        if(i in map) stack.push(i);
        else if (map[stack.pop()] !== i) return false; 
    }

    return stack.length === 0;
};