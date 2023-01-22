/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length < 4 || s.length > 12) return [];
    let res = [];
    dfs(s,"", 4);
    return res;
    function dfs(str, ip, c) {
        if(str.length === 0 && c === 0) res.push(ip);
        if(c === 0) return;

        for(let i = 0; i < 4; i++){
            if(i >= str.length) break;
            let subIp = str.slice(0, i + 1);
            if(parseInt(subIp) > 255 || subIp.length > 1 && subIp[0] === '0') continue;
            dfs(str.slice(i + 1), ip + (c === 4? '':'.') + subIp, c - 1);
        }
    }
};