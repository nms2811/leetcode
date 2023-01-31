/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let n = scores.length, arr = [], dp = [];
    for(let i = 0; i < n; i++) {
        arr.push([ages[i], scores[i]]);
    }
    arr.sort((a, b) => (a[0] === b[0])? a[1]- b[1]: a[0] - b[0]);
    for(let i = 0; i < n; i++) {
        dp[i] = arr[i][1];
        for(let j = 0; j < i; j++){
            if(arr[i][1] >= arr[j][1]) dp[i] = Math.max(dp[i], dp[j] + arr[i][1]);
        }
    }
    return Math.max(...dp)
};