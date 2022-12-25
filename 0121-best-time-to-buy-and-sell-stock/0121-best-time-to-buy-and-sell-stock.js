/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curr = res = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < prices[curr]) curr = i;
        res = Math.max(res, prices[i] - prices[curr])
    }
    return res;
};