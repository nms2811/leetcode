/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    let low = [];
    let up = [];
    trees.sort((a, b) => {
        return (a[0] === b[0])? a[1] - b[1]: a[0] - b[0];
    });
   
    for(let tree of trees) {
        while(low.length >= 2 && compare(low[low.length - 2], low[low.length - 1], tree) > 0) {
            low.pop()};
        while(up.length >= 2 && compare(up[up.length - 2], up[up.length - 1], tree) < 0) {
            up.pop();
        }
        low.push(tree);
        up.push(tree);
    }
    return [...new Set(low.concat(up))];

    function compare(p1,p2,p3) {
        let[x1, y1] = p1;
        let[x2, y2] = p2;
        let[x3, y3] = p3;
        return (y3 - y2)*(x2 - x1) - (y2 - y1)*(x3 -x2)
    }
};