/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    return dp(n);
    function dp(n) {
        if (n === 0) return 0; 
	    if (n === 1) return 1;
        let temp = dp(n - 1) + dp(n - 2);
        return temp;
    }  
};