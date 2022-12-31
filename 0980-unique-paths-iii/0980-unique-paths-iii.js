/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let si ,sj = 0;
    let walkable = 0;
    let dirs = [[0,-1], [0,1], [1,0], [-1,0]];
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(grid[i][j] === 1) {
                si = i;
                sj = j;
            }
            if(grid[i][j] !== -1) {
                walkable++;
            }
        }
    }
    return dfs(si, sj, 1);

    function dfs(i, j, p) {
        let res = 0;
        for(let [dx, dy] of dirs) {
            let x = i + dx;
            let y = j + dy;
            if(x < 0 || y < 0 || x >= r || y >= c || grid[x][y] === -1 || grid[x][y] === 1) continue;
            if(grid[x][y] === 2){
                if(p + 1 === walkable) res++;
                continue;
            }
                grid[x][y] = 1;
                res += dfs(x, y, p + 1)
                grid[x][y] = 0;
        }
        return res;
    }
};