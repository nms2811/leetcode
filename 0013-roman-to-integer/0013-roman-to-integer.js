/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let num = 0;
    let r1;
    let r2;
    for(i = 0; i < s.length; i++) {
        r1 = map[s[i]]
        r2 = map[s[i + 1]]
        if(r1 < r2) {
            num += r2 - r1;
            i++;
        } else {
            num += r1;
        }
    }
    return num;
};