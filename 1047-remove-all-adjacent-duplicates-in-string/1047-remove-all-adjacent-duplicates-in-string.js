/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let i = 0;
    while(i < s.length-1) {
        if(s.charAt(i) === s.charAt(i+1)){
            s = s.slice(0, i) + s.slice(i+2);
            i--;
        }else{
            i++;
        }
    }
    return s;
};