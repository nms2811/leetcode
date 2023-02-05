/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let map = {}, arr = [], l = 0, r = 0, c = p.length;
    for(let c of p) {
        map[c] = (map[c] || 0) + 1;
    }
    console.log(map);
    while(r < s.length) {
        if(map[s[r]] > 0) c--;
        map[s[r]]--;
        r++;
        if(c === 0) arr.push(l); 
        if(r - l === p.length) {
            if(map[s[l]] >= 0) c++;
            map[s[l]]++;
            l++;
        }
    }
    return arr;
};