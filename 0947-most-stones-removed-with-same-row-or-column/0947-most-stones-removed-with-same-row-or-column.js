/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let storage = {};
    let visited = {};
    let count = 0;
    for( i in stones) {
        storage[i] = {}
        visited[i] = false;
    }
    
    for(let i = 0; i < stones.length; i++) { 
        for(let j = 0; j < stones.length; j++) { 
            if(i !== j) {
                if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) { 
                    storage[i][j] = true;
                    storage[j][i] = true;
                }
            }
        }
    }
    
    for(let e in storage) {
        dfs(e, visited);
    }
    return count;
    
    function dfs(node, visited) {
        visited[node] = true;
        let edges = storage[node];
        for(let e in edges) {
            if(!visited[e]) {
                count++;
                dfs(e, visited);
            }
        }
    }
}