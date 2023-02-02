/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i = 0; i < words.length - 1; i++){
        let len = (words[i] > words[i+1])? words[i].length: words[i+1].length;
        for(let j = 0; j < len; j++){
            if(words[i][j] === words[i + 1][j]) continue;
            if(order.indexOf(words[i][j]) < order.indexOf(words[i+1][j])) break;
            else return false;
        }
    }
    return true;
};