/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        map[s[i]]? map[s[i]]++: map[s[i]] = 1;
    }
    return Object.entries(map).sort((a,b) => b[1] - a[1]).map(x => x[0].repeat(x[1])).join('')
};