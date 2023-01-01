/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = {}, map2 = {};
    for(let i = 0; i < s.length; i++) {
        if(map1[s[i]] !== map2[t[i]]) return false;
        map1[s[i]] = i;
        map2[t[i]] = i;
    }
    return true;
}