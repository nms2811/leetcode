/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let answer = [0, 0];
    let check = new Set();
    
    for (const n of nums) {
        if (check.has(n)) {
            answer[0]++;
            check.delete(n);
        } else {
            check.add(n);
        }
    }
    answer[1] = check.size;
    
    return answer;
};