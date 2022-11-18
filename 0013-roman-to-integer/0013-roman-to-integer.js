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
    for(i = 0; i < s.length; i++) {
        if(map[s.charAt(i)] < map[s.charAt(i+1)]) {
            num += map[s.charAt(i+1)] - map[s.charAt(i)];
            i++;
        } else {
            num += map[s.charAt(i)];
        }
    }
    return num;
};