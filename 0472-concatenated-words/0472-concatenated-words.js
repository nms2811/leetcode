/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let set = new Set(words);
    let res = [];

    let dfs = function (word, n) {
        if (n >= 2 && word.length == 0) return true
        for (let i = 1; i <= word.length; i++) {
            let substr = word.substring(0, i)
            if (set.has(substr)) {
                if (dfs(word.slice(i), n+1)) return true
            }
        }
        return false
    }

    for (let word of words) {
        if(dfs(word, 0)) res.push(word)
    }
    return res
};