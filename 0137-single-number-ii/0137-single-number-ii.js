/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    obj = {};
    for(let i of nums)
        obj[i] = obj[i]?obj[i] + 1: 1;
    for(let n in obj)
        if(obj[n] === 1) return n;
};