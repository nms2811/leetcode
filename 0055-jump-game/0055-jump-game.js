/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;
    let first = nums[0];
    for(let i = 0; i < nums.length; i++) {
        first--;
        if(first < 0) return false;
        if(nums[i] > first) first = nums[i];
    }
    return true;
};