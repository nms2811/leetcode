/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let curMin = 0, curMax = 0, sum = 0, minSum = nums[0], maxSum = nums[0];
    for (let num of nums) {
        curMax = Math.max(curMax, 0) + num;
        maxSum = Math.max(curMax, maxSum);
        curMin = Math.min(curMin, 0) + num;
        minSum = Math.min(curMin, minSum);
        sum += num;
    }
    return sum == minSum ? maxSum : Math.max(sum - minSum, maxSum);
};