/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
   let arr = new Array(n+1).fill(0);
   for(let [a,b] of trust) {
       arr[a] -= 1;
       arr[b] += 1;
   }
   for(let i = 1; i <= n; i++) {
       if(arr[i] === n - 1) return i;
   }
   return -1;
};