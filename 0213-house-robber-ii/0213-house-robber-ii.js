/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    dp1 = [nums[0], Math.max(nums[0], nums[1])];
    dp2 = [0, nums[1]];
    for(let i = 2; i < nums.length; i++) {
        dp1[i] = (i === nums.length - 1)? dp1[i-1]: Math.max(dp1[i-1], dp1[i-2] + nums[i]);
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i]);
    }
    return Math.max(dp1[nums.length - 1], dp2[nums.length - 1])
};