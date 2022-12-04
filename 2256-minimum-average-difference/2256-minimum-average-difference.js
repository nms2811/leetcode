/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    
    let total = nums.reduce((sum, a) => sum + a, 0);
    let n = nums.length;
    let lsum = 0;
    let rsum = 0;
    let min = [];
    for(let i = 0; i < n; i++) {
        lsum += nums[i];
        rsum = total - lsum;
        min[i] = (n-1-i !== 0)? Math.abs(Math.floor(lsum/(i+1)) - Math.floor(rsum/(n - i - 1))): Math.abs(Math.floor(lsum/(i+1)));
    }
    return min.indexOf(Math.min(...min));
};