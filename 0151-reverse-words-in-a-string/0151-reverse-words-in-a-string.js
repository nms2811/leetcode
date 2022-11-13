/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(' ').filter(s=> s !='').reverse().join(' ');
};