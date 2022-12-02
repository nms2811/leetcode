/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [];
    let n = startTime.length;
    for(let i = 0; i < n; i++) {
        jobs.push({s:startTime[i], e: endTime[i], p: profit[i]})
    }
    jobs.sort((a,b) => a.e - b.e)
    dp = Array(n);
    dp[0] = jobs[0].p;

    for(let i = 1; i < n; i++) {
        let profit = jobs[i].p;
        let task = -1;
        for(let j = i-1; j >= 0; j--){
            if(jobs[j].e <= jobs[i].s) {
                task = j;
                break;
            }
        }
        if(task !== -1) profit += dp[task];
        dp[i] = Math.max(profit, dp[i - 1]);
    }
    return dp[n-1]
    
};