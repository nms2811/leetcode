/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    dp = [0];
    dp[0] = 0;
    for(let i = 1;i <=n; i++) {
        let q = i%2;
        let a = Math.floor(i/2);
        dp[i] = dp[a] + q;
    }

    return dp;
};