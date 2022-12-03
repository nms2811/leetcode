/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i])+ 1 || 1);
    }
    nums = [...map].sort((a,b) => b[1] - a[1]);
    let arr = [];
    for(let i = 0; i < k; i++) {
        arr.push(nums[i][0]);
    }
    return arr;
};