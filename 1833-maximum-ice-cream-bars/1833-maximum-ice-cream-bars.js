/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs = costs.sort((a,b)=> a - b);
    let count = 0;
    for(let i = 0; i < costs.length; i++) {
        if(costs[i] <= coins) {
            count++;
            coins -= costs[i];
        } else {
            break;
        }
    }
    return count;
};