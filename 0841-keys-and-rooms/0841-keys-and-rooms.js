/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    dfs(rooms, 0);
    return rooms.length === visited.size;
    
    function dfs(rooms, idx) {
        visited.add(idx);
        let a = rooms[idx];
        for(let key of a){     
            if(!visited.has(key)) dfs(rooms, key);
        }
    }
}