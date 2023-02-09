/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    let suffix = [];
    for(let i = 0; i < 26; i++){
        suffix[i] = new Set();
    }
    for(let c of ideas){
        suffix[c.charCodeAt(0) - 97].add(c.slice(1));
    }
    let res = 0;
    for(let i = 0; i < 25; i++){
        for(let j = i + 1; j < 26; j++){
            let count = 0;
            let set1 = suffix[i];
            let set2 = suffix[j];
            for(let s of set1) {
                if(set2.has(s)) count++;
            }
            res += 2 * (set1.size - count) * (set2.size - count);
        }
    }
    return res;
};