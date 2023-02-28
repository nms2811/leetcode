/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1));

    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            if(i === 0) dp[0][j] = j;
            else if(j === 0) dp[i][0] = i;
            else if(word1[i - 1] === word2[j - 1]) 
                dp[i][j] = dp[i -1][j - 1];
            else 
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
            
        }
    }
    return dp[m][n];
};