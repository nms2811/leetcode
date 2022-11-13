/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) {
                count += 4;
                if(grid[i-1] && grid[i-1][j] === 1) count--;
                if(grid[i+1] && grid[i+1][j] === 1) count--;
                if(grid[i] && grid[i][j-1] === 1) count--;
                if(grid[i] && grid[i][j+1] === 1) count--;
            }
        }
    }
    return count;
};