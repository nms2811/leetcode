/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]]? map[nums[i]]++: map[nums[i]] = 1;
    }
    return nums.sort((a,b) => (map[a] === map[b])?b - a: map[a] - map[b])
};
