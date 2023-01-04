/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper = word.toUpperCase();
    let lower = word.toLowerCase();
    let first = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    if(upper === word || lower === word || first === word) return true;
    else return false;
    
};