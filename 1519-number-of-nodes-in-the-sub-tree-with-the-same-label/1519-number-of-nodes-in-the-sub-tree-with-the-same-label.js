/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    const arr = Array.from(Array(n), () => new Array());
    let count = new Array(26).fill(0);
    let res = new Array(n).fill(0);
    for(let [i,j] of edges) {
        arr[i].push(j)
        arr[j].push(i)
    }
    dfs(0, -1, count);
    return res;
    function dfs(i, parent, pcount) {
        let count = new Array(26).fill(0);
        for(let j of arr[i]){
            if(j === parent) continue;
            dfs(j, i, count)
        }
        count[labels.charCodeAt(i) - 97]++;
        res[i] =  count[labels.charCodeAt(i) - 97];
        for(let i = 0; i < 26; i++){
            pcount[i] += count[i];
        }
    }
};
