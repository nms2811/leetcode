/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let link = {};
    function find(a) {
        if(link[a] == null) link[a] = a;
        while(link[a] !== a) {
            link[a] = link[link[a]];
            a = link[a];
        }
        return a;
    }

    function union(a, b) {
        a = find(a);
        b = find(b);
        if(a > b) {
            let temp = b;
            b = a;
            a = temp;
        }
        link[b] = a;
    }

    for(let i = 0; i < s1.length; i++) {
        union(s1[i], s2[i]);
    }
    ans= "";
    for(const a of baseStr){
        ans+=find(a);
    }
    return ans
    
};