/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let r1 = (ax2 - ax1) * (ay2 - ay1);
    let r2 = (bx2 - bx1) * (by2 - by1);
    let xoverlap = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    let yoverlap = Math.min(ay2, by2) - Math.max(ay1, by1);
    let overlap = 0;
    if(xoverlap > 0 && yoverlap > 0) overlap = xoverlap * yoverlap;
    return r1 + r2 - overlap;
};