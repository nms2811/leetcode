/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    map1 = new Map();
    
    for(let i = 0; i < s.length; i++) {
         map1.set(s[i], map1.get(s[i]) + 1 || 1)
    }
    return [...map1].sort((a,b) => b[1] - a[1]).map(
        entry => {
            let ns = [];
            for(i = 0; i < entry[1]; i++) {
                ns.push(entry[0]);
            }
           return ns.join('')
        }
    ).join('')
};