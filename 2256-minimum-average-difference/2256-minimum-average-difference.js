/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let total = nums.reduce((sum, a) => sum + a, 0);
    let n = nums.length;
    let sum = [];
    let min = [];
    sum[0] = total - nums[0];
    for(let i = 1; i < n; i++) {
        sum[i] = sum[i - 1] - nums[i];
    }
    for(let i = 0; i < n; i++) {
        let a = Math.floor((total - sum[i])/(i+1));
        let b = (n - i - 1 !== 0)?Math.floor(sum[i]/(n - i - 1)): 0;
        min[i] = Math.abs(a - b);
    }

    return min.indexOf(Math.min(...min));
};