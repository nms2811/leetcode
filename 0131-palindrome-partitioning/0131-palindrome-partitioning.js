/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if(s.length === 0) return [];
    let res = [];
    let partition = [];
    const isPalindrom = (str) => str === str.split('').reverse().join('');
    let dfs = function (s, partition, res) {
        if(s.length === 0) {
            res.push([...partition]);
            return;
        }

        for(let i = 0; i < s.length; i++) {
            let prefix = s.slice(0, i + 1);
            let postfix = s.slice(i + 1);
            if(isPalindrom(prefix)) {
                partition.push(prefix);
                dfs(postfix, partition, res);
                partition.pop();
            }
        }
        
    }
    dfs(s,partition, res);
    return res;
};