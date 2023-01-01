/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' '); 
    let r1 = '', r2 = ''; 
    for(let i = 0; i < s.length; i++){
        r1 += s.indexOf(s[i]);
    }
    for(let i = 0; i < pattern.length; i++){
        r2 += pattern.indexOf(pattern[i]);
    }
    return r1 === r2;
};