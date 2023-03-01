/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }

   const mid = Math.floor(nums.length / 2);
   const left = nums.slice(0, mid);
   const right = nums.slice(mid);

    return merge(sortArray(left), sortArray(right));
};
   function merge(left, right) {
       let arr = [];

       while(left.length && right.length) {
           if(left[0] < right[0]) {
               arr.push(left.shift());
           } else {
               arr.push(right.shift());
           }
       }
       return arr.concat(left, right);
   }