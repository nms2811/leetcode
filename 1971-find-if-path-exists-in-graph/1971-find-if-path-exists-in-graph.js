/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    let visited = new Set();
    for(let [v,e] of edges) {
        (graph.has(v))? graph.get(v).push(e): graph.set(v, [e]);
        (graph.has(e))? graph.get(e).push(v): graph.set(e, [v]);
    }
    function dfs(v) {
        visited.add(v);
        let edges = graph.get(v);
        if(edges && edges.length > 0) {
            for(let e of edges) {
                if(!visited.has(e)) dfs(e);
            }
        }  
    }
    dfs(source);
    return visited.has(destination);
};