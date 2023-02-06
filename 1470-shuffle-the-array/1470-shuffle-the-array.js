/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    return nums.map((element, idx)=> (idx % 2 === 0)? nums[idx / 2]: nums[n + (idx-1)/2]);
};
