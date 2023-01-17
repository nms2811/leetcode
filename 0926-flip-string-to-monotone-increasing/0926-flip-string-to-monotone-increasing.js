/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let ones = 0;
    let flip = 0;
    for(let chr of s) {
       (chr === '0')? flip++ : ones++;
       flip = Math.min(flip, ones)
    }
    return flip;
};