/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l = 0, c = 0, r = 0;
    while(r < nums.length - 1) {
        let max = 0;
        for(let i = l; i <= r; i++){
            max = Math.max(max, nums[i] + i);
        }
        l = r + 1;
        r = max;
        c++;
    }
    return c;
}