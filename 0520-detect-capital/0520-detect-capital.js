/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return (
        word === word.toUpperCase() ||
        word === word.toLowerCase() ||
        word.charAt(0) === word.charAt(0).toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()
    );
};