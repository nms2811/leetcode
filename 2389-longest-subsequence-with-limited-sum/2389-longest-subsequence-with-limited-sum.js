/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums = nums.sort((a,b) => a - b);
    arr = [];
    for(let query of queries) {
        let count = 0;
        for(let num of nums) {
            if(query >= num) {
                query -= num;
                count += 1;
            }
        }
        arr.push(count);
    }
    return arr;
};