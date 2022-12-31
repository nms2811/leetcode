/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let combinations = [];
    backtrack(nums, []);
    return combinations;

    function backtrack(nums, path) {
        combinations.push([...path]);
        for(let i = 0; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(nums.slice(i+1), path);
            path.pop();
        }
    }
};