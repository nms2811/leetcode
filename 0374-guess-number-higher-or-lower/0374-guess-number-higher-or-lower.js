/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1;
    let mid;
    while(low <= n) {
        mid = Math.floor((n+low)/2);
        if (guess(mid) === 0) {
            return mid;
        }
        if (guess(mid) < 0) {
            n = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};