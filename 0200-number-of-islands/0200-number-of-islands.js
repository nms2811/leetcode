/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let h = grid.length;
    let w = h && grid[0].length;
    let count = 0;
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if (grid[i][j] === '0') continue;

            count++;
            dfs(i,j);
        }
    }
    return count;

    function dfs(r,c) {
       if (r < 0 || c < 0 || r >= h || c >= w) return;

        if(grid[r][c] === '1') {
            grid[r][c] = '0';

            dfs(r-1, c);
            dfs(r+1, c);
            dfs(r, c-1);
            dfs(r, c+1);
        }
    
    }
};

