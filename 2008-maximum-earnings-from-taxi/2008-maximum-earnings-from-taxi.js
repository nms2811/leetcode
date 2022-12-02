/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
    let rl = rides.length;
    rides.sort((a,b) => a[1] - b[1]);
    let dp = Array(rl);
    dp[0] = rides[0][1] - rides[0][0] + rides[0][2];
    for (let i = 1; i < rl; i++) {
        let total = rides[i][1] - rides[i][0] + rides[i][2];
        let task = -1;
        for(let j = i-1; j >= 0; j--) {
            if(rides[j][1] <= rides[i][0]) {
                task = j;
                break;
            }
        }
        if(task !== -1) total += dp[task];
        dp[i] = Math.max(total, dp[i - 1]);
    }
    return dp[rl - 1];
};