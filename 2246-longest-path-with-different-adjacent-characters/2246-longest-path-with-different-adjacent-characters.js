/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    let n = parent.length;
    const arr = Array.from(Array(n), () => new Array());
    for(let i = 1; i < n; i++) {
        arr[parent[i]].push(i)
    }
    let lp = 0;
    dfs(0);
    return lp;
    function dfs(node) {
        let lc1 = 0, lc2 = 0;
        for(let child of arr[node]) {
            let lengthChild = dfs(child);
            if(s[node] === s[child]) continue;
            if(lc1 < lengthChild) {
                lc2 = lc1;
                lc1 = lengthChild;
            } else if(lc2 < lengthChild) {
                lc2 = lengthChild;
            }
        }
        lp = Math.max(lp, lc1 + lc2 + 1);
        return lc1 + 1;
    }
};