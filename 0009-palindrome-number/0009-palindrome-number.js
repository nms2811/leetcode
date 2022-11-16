/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if((x > 0 && x % 10 === 0) || x < 0) return false;
    let check = 0;
    let original = x;
    while (x > 0) {
        check = check * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return (check === original)? true:false
   
};