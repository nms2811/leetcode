/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length === 1) return 1;
    let maxpoints = 2;
    for(let i = 0; i < points.length; i++) {
        let map = {};
        let p1 = points[i];
        for(let j = 0; j < points.length; j++) {
            if(j === i) continue;
            let p2 = points[j]
            let slope = findSlope(p1, p2);
            map[slope] = (map[slope])?map[slope] + 1: 2;
        }
        maxpoints = Math.max(maxpoints, ...Object.values(map));
    }
    return maxpoints;
    function findSlope(p1,p2) {
        let [x1,y1] = p1;
        let [x2,y2] = p2;
        return (y2 - y1)/(x2 - x1);
    }
};