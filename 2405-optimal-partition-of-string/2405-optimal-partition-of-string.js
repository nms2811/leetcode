/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let arr = new Array(26).fill(0);
    let res = 1;
    for(let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        arr[index]++;
        if(arr[index] > 1) {
            res++;
            arr.fill(0);
            arr[index]++;
        }
    }
    return res;
};