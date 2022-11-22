/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    
    let dp = Array(n+1).fill().map(() => Array(n+1).fill(Infinity));
    return recurse(1, n);
    function recurse(l, h) {
        if(h <= l) return 0;
        if(dp[l][h] !== Infinity) return dp[l][h];
        for(let i = l; i <= h; i++) {
            dp[l][h] = Math.min(dp[l][h], i + Math.max(recurse(l, i - 1), recurse(i + 1, h)));
        }
        return dp[l][h];
    }

};