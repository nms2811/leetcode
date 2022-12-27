/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let res = 0;
    for(let i = 0; i < rocks.length; i++) {
        rocks[i] = capacity[i] - rocks[i];
    }
    rocks.sort((a,b) => a - b)

    for(let i = 0 ; i < rocks.length; i++) {
        if(rocks[i] === 0) res ++;
        else if(rocks[i] <= additionalRocks && additionalRocks > 0) {
            additionalRocks -= rocks[i];
            res++;
        }
    }
    return res;
};