/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = [];
    dfs(0,[]);
    function dfs(index, sub) {
        let unique = new Set();
        for(let j = index; j < nums.length; j++) {
            if(unique.has(nums[j]) || sub.length > 0 && sub[sub.length - 1] > nums[j]) continue;
            unique.add(nums[j]);
            sub.push(nums[j]);
            if(sub.length >= 2) res.push([...sub]);
            dfs(j + 1, sub);
            sub.pop();
        }
    }
    return res;
};
