/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curr = prices[0];
    let res = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] > curr && prices[i] - curr > res)res = prices[i] - curr;
        if(prices[i] < curr) curr = prices[i];
    }
    return res;
};