/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let index1 = nums.indexOf(nums[i]);
        let index2 = nums.lastIndexOf(nums[i]);
        if(index1 !== index2) {
            nums.splice(index2, 1);
            nums.splice(index1, 1);
            count++;
            i--;
        }
    }
    return [count, nums.length];
};