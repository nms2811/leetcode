/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var sortColors = function(nums) {
        let i,j,key;
        for (i = 1; i < nums.length;i++) {
        key = nums[i];
        for(j = i-1; j >= 0 && nums[j] > key; j--) {
            nums[j+1] = nums[j];
        }
        nums[j+1] = key;
    }   
};