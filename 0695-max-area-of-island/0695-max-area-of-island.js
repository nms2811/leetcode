/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
    let h = grid.length;
    let w = h && grid[0].length;
    let max = 0;
    let count = 0;
    let check;
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if (grid[i][j] === 0) continue;
            check = dfs(i,j);
            if(max < check) max = check;
            count = 0;
        }
    }
    return max;

    function dfs(r,c) {

        if (r < 0 || c < 0 || r >= h || c >= w) return;

        if(grid[r][c] === 1) {
            count++;
            grid[r][c] = 0;

            dfs(r-1, c);
            dfs(r+1, c);
            dfs(r, c-1);
            dfs(r, c+1);
        }
        return count;
    }
};
