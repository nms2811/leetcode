/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    dp = [0];
    for(let i = 1;i <=n; i++) {
       if(i % 2 == 0){
           dp[i] = dp[i / 2];
       } else {
           dp[i] = dp[Math.floor(i / 2)] + 1
       }
    }

    return dp;
};