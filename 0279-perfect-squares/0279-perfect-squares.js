/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = Array(n+1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= Math.floor(i ** 0.5); j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
        }
    }
    console.log(dp)
    return dp[n];
};