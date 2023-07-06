/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0, start = 0, minLength = Infinity;
    for(let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while(sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }
    return (minLength === Infinity) ? 0: minLength;
};