/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    s = s.split('');
    let i = 0;
    while(i < s.length - 1) {
        if (s[i] && s[i + 1] && s[i].toLowerCase() === s[i + 1].toLowerCase() && s[i] !== s[i + 1]) {
            s.splice(i, 2);
            i--;
            continue;
        }
        i++;
    }
    return s.join('')
};