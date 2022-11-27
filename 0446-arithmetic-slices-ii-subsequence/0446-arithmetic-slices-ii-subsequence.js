// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var numberOfArithmeticSlices = function(nums) {
    let n = nums.length;
    let arr = new Array(n);
    arr[0] = new Map();
    let res = 0;
    for(let i = 1; i < n; i++) {
        arr[i] = new Map();
        for(let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let n1 = arr[j].get(diff) || 0;
            let n2 = arr[i].get(diff) || 0;
            res += n1;
            arr[i].set(diff,(n1+n2+1))
        }
    }
    return res;
}