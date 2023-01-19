/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = {}, prefixRem = 0, res = 0;
    for (let i = 0; i < k; i++) {
        map[i] = 0;
    }
    map[0] = 1;
    for(let num of nums) {
        prefixRem = (num % k + prefixRem + k) % k;
        res += map[prefixRem];
        map[prefixRem]++;
    }
    return res;
};