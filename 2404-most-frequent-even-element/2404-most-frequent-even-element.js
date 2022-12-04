/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) map.set(nums[i], map.get(nums[i]) + 1 || 1)
    }
    if(!map.size) return -1;
    
    return[...map].sort((a,b) => {
        return b[1] - a[1] || a[0] - b[0]
        })[0][0]

};