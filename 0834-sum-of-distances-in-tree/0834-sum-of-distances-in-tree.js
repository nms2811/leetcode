/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    if(n < 1 || edges.length < 1) return [0];
    let graph = {};
    let count =  new Array(n).fill(1);
    let res =  new Array(n).fill(0);
    for(let i = 0; i < edges.length; i++) {
        if(!graph[edges[i][0]]) graph[edges[i][0]] = [];
        graph[edges[i][0]].push(edges[i][1])
        if(!graph[edges[i][1]]) graph[edges[i][1]] = [];
        graph[edges[i][1]].push(edges[i][0])
    }
    
    function dfs1(node, parent){
        for(const child of graph[node]) {
            if(child !== parent) {
                dfs1(child, node)
                count[node] += count[child];
                res[node] += res[child] + count[child];
            }
        }
    }
    function dfs2(node, parent) {
        for(const child of graph[node]) {
            if(child !== parent) {
                res[child] = res[node] - count[child] + n - count[child];
                dfs2(child, node);
            }
        }
    }
    dfs1(0, null);
    dfs2(0, null);

    return res;
};