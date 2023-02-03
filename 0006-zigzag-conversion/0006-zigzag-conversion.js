/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let n = s.length, res = "", section = numRows * 2 - 2;
    for(let r = 0; r < numRows; r++){
        let i = r;
        while(i < n){
            res += s[i];

            if(r !== 0 && r !== numRows - 1) {
                let charsInBetween = section - 2 * r;
                let secondIndex = i + charsInBetween;
                if(secondIndex < n) res += s[secondIndex];
            }
            i += section;
        }
    }
    return res;
};