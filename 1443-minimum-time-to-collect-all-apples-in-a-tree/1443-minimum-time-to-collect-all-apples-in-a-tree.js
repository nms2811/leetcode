/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let map = new Map();
    let count = 0;
    for(let [i, j] of edges) {
        map.set(j, i);
    }
    for(let i = 0; i < hasApple.length; i++) {
        if(hasApple[i]) {
            let pointer = i;
            while(pointer !== 0) {
                let parent = map.get(pointer);
                count += 2;
                if(hasApple[parent]) {
                    break;
                }
                hasApple[parent] = true;
                pointer = parent;
            }
        }
    }
    return count;
};
