/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
    let h = grid.length;
    let w = h && grid[0].length;
    let max = 0;
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(i, j));
            }
        }
    }
    return max;

    function dfs(r,c) {
        let count = 0;
        if (r < 0 || c < 0 || r >= h || c >= w || grid[r][c] === 0) return 0;

        grid[r][c] = 0;
        count++;
        count += dfs(r-1, c);
        count += dfs(r+1, c);
        count += dfs(r, c-1);
        count += dfs(r, c+1);

        return count;
    }
};
