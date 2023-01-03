/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++){
            if(strs[j-1].charAt(i) > strs[j].charAt(i)) {
                count++;
                break;
            }
        }
    }
    return count;
};