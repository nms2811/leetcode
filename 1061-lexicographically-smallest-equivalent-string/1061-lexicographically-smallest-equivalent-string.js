/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let arr =  'abcdefghijklmnopqrstuvwxyz'.split('');
    ans = "";
    for(let i = 0 ; i < s1.length; i++) {
        let f = arr[s1[i].charCodeAt(0) - 97];
        let s = arr[s2[i].charCodeAt(0) - 97];
        let a = "", b = "";
        if(f === s) continue;
        if(f > s) {
            a = s;
            b = f;
        } else {
            a = f;
            b = s;
        }
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === b) arr[i] = a;
        }
    }
   for(let char of baseStr) {
       ans += arr[char.charCodeAt(0) - 97];
   }
   return ans;
};
