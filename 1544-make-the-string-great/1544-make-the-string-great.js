/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let i = 0;
    while ( i < s.length - 1) {
        if(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) === 32) {
           s = s.slice(0, i) + s.slice(i+2); 
           i--;
        } else {
            i++;
        }
    }
    
   return s;
};