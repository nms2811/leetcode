/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    s = s.split('');
    let i = 0;
    while(i < s.length-1) {
        if(s[i] === s[i+1]){
            s.splice(i,2);
            i--;
        }else{
            i++;
        }
    }
    return s.join('');
};