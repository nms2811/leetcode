/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
   let total = 0, curr = 0, pos = 0;
   for(let i = 0; i < gas.length; i++) {
        curr += gas[i] - cost[i];
        total += gas[i] - cost[i];
        if(curr < 0) {
           curr = 0;
           pos = i + 1;
        }
   }
   return(total < 0)? -1: pos;
};