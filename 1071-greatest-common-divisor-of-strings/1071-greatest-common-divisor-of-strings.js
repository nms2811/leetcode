/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";
    let x = str1.length, y = str2.length, temp;
    while(y) {
        temp = y;
        y = x % y;
        x = temp;
    }
    return str1.substring(0, x);
};