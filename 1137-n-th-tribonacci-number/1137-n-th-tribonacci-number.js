/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let dp = [0,1,1];
    if(n < 3) return dp[n];
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i -3] + dp[i - 2] + dp[i - 1];
    }

    return dp[n];
};