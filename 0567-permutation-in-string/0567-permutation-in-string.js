/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    let  map = {};
    let left = 0, right = 0, c = 0, n = s1.length;
    for(let c of s1) {
       map[c] = (map[c] || 0) + 1;
    }
    while(right < s2.length) {
        if(map[s2[right]] > 0) c++;
        map[s2[right]]--;
        right++;
        if(c === n) return true;
        if(right - left == n) {
            if(map[s2[left]] >= 0) c--;
            map[s2[left]]++;
            left++;
        }
    }
    return false;
};