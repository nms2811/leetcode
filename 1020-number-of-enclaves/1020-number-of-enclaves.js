/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let m = grid.length; 
    let n = grid[0].length;
    let count = 0;
    for(let i = 0; i < m; i++) {
        dfs(i,0);
        dfs(i,n-1);
    }
    for(let j = 0; j < n; j++) {
        dfs(0,j); 
        dfs(m-1,j);
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) count++;
        }
    }
    return count;

    function dfs(r, c) {
        if(r<0 || c<0 || r>=m || c>=n || grid[r][c]===0) return;
        grid[r][c] = 0;
        dfs( r, c-1 );
        dfs(r , c+1);
        dfs( r-1, c);
        dfs(r+1 , c);
    }
 
};