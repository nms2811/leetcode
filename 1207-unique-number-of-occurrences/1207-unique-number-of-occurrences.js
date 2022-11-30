/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    for(let i = 0; i < arr.length; i++) {
        (!map[arr[i]])? map[arr[i]] = 1: map[arr[i]]++;
    }
    let check = {};
    for(let k in map) {
        let val = map[k];
        if(check[val] === undefined) check[val] = k;
        else return false;
    }
    return true;
   
};