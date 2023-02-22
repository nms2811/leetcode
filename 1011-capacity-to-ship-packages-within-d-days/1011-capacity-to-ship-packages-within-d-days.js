/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    function getDays(mid) {
        let d = 1;
        total = 0;
        for(let w of weights) {
            total += w;
            if(total > mid) {
                total = w;
                d += 1;
            }
        }
        return d;
    }

    let low = Math.max(...weights);
    let high = weights.reduce((a,b) => a + b, 0);

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let minDays = getDays(mid);
        if(minDays > days) {
            low = mid + 1;
        } else {
            high = mid - 1; 
        }
    }
    return low;

};