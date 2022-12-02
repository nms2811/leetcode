/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;
    let map1 = new Map();
    let map2 = new Map();
    let num1 = new Map();
    let num2 = new Map();
    for(let i = 0; i < word1.length; i++) {
        map1.set(word1[i], map1.get(word1[i]) + 1 || 1);
        map2.set(word2[i], map2.get(word2[i]) + 1 || 1);
    }
   for(let [k,v] of map1) {
       if ((map1.get(k) && !map2.get(k))|| (!map1.get(k) && map2.get(k))) return false;
       num1.set(v, num1.get(v) + 1 || 1)
   } 
   for(let [k,v] of map2) {
       num2.set(v, num2.get(v) + 1 || 1)
   }
   for(let [k,v]of num1){
        if(v!==num2.get(k)) return false;
    }
    return true;
};
