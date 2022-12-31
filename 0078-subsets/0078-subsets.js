/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length === 0) return [];
    let subsets = [];
    subsets.push([],[nums[0]]);
    for(let i = 1; i < nums.length; i++) {
        currLength = subsets.length;
        for(let j = 0; j < currLength; j++) {
            subsets.push([...subsets[j], nums[i]]);
        }
    }
    return subsets;
};
