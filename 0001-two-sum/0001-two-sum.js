/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
           if (target - nums[i] == nums[j]) {
               arr.push(i);
               arr.push(j);
               return arr;
           }
       }  
    }
};

var nums = [2,7,11,15];
var target = 9;

console.log(twoSum(nums, target));