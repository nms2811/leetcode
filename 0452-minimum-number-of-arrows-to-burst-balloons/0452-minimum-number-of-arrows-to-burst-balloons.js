/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let count = 0, currentEnd = -Infinity;
    points = points.sort((a,b) => a[0] - b[0]);
    for(let [xstart, xend] of points) {
        if(xstart > currentEnd) {
            count++;
            currentEnd = xend;
        } else {
            currentEnd = Math.min(currentEnd, xend);
        }
    }
    
    return count;
};