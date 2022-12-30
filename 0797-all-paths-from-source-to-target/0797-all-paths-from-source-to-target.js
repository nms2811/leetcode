/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let output = [];
    let path = [];
    path.push(0);
    dfs(0);
    return output;
    function dfs(node) {
        if(node === graph.length - 1) {
            output.push(path.slice(0));
        } else {
            for(let i = 0; i< graph[node].length; i++){ 
                path.push(graph[node][i]);
                dfs(graph[node][i]);
                path.pop(); 
            }
        }
    }
};