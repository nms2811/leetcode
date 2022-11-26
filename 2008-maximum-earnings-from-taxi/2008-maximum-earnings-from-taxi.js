/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
    let customers = [];
    let rl = rides.length;
    for(let i = 0; i < rl; i++) {
        customers.push({s: rides[i][0], e: rides[i][1], t:rides[i][2]});
    }
    customers.sort((a,b) => a.e - b.e);
    let dp = Array(rl);
    dp[0] = customers[0].e - customers[0].s + customers[0].t;;
    for (let i = 1; i < rl; i++) {
        let total = customers[i].e - customers[i].s + customers[i].t;
        let task = -1;
        for(let j = i-1; j >= 0; j--) {
            if(customers[j].e <= customers[i].s) {
                task = j;
                break;
            }
        }
        if(task !== -1) total += dp[task];
        dp[i] = Math.max(total, dp[i - 1]);
    }
    return dp[rl - 1];
};