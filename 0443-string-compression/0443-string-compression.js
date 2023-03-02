/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if(chars.length <= 1) return chars.length;
    let len = 0;
    let count = 1;
    let cur = chars[0];
    for(let i = 0; i <= chars.length; i++){
        if(chars[i] === chars[i+1]) {
            count++;
        }else {
            chars[len] = cur;
            if(count > 1) {
                
                for(let c of count.toString().split('')) {
                    len++;
                    chars[len] = c;
                }
            }
            count = 1;
            len++;
            cur = chars[i+1]
        }
    }
    return len;
};