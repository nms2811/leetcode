/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    let partition = [];
    function isPalindrom(left, right) {
        while(left < right) {
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    function dfs(i) {
        if(s.length === i) {
            res.push([...partition]);
            return;
        }
        for(let j = i; j < s.length; j++) {
            if(isPalindrom(i, j)) {
                partition.push(s.slice(i , j + 1));
                dfs(j + 1);
                partition.pop();
            }
        }
        
    }
    dfs(0);
    return res;
};