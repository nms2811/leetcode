/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let map = new Map();
    let count = 0;
    for(let task of tasks) {
       map.set(task, map.get(task) + 1 || 1);
    }
    for(let [k,v] of map) {
        if(v < 2) return -1;
        count += Math.ceil(v / 3);
    }
    return count;
};