/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let m = maze.length;
    let n = maze[0].length;
    let dir = [[-1, 0],[1, 0],[0,-1],[0,1]];
    let queue = new Array();
    queue.push([entrance, 0]);
    maze[entrance[0]][entrance[1]] = '+';
    while(queue.length) {
        let [pos, step] = queue.shift();
        step++;
        for(let d of dir) {
            let i = pos[0] + d[0];
            let j = pos[1] + d[1];
            if(i < 0 || j < 0 || j >= n|| i >= m || maze[i][j] === '+') continue;
            if(i === 0 || j === 0 || j === n -1 || i === m -1) return step;
            queue.push([[i,j], step]);
            maze[i][j] = '+';
        }
    }
    return -1;

};