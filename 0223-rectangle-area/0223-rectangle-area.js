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
    let w = 0;
    let h = 0;
    if (ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1) return r1 + r2;
    if(ax1 <= bx1) {
        w = (ax2 <= bx2)? ax2 - bx1: bx2 - bx1;

    }else {
        w = (ax2 <= bx2)? ax2 - ax1: bx2 - ax1;
    }
    if(by1 <= ay1) {
        h = (ay2 <= by2)? ay2 - ay1: by2 - ay1;
    }else {
        h = (ay2 <= by2)? ay2 - by1: by2 - by1;
    }
    return r1 + r2 - (w * h);
};