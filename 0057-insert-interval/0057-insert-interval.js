/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [start, end] = newInterval;
    let left = [];
    let right = [];
    for(let interval of intervals) {
        const [first, second] = interval
        if(first > end) {
            right.push(interval);
        }else if(second < start) {
            left.push(interval);
        } else {
            start = Math.min(start, first);
            end = Math.max(end, second);
        }
    }
    return [...left, [start, end], ...right];
};