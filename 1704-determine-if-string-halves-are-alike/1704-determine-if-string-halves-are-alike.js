/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let s1 = s.slice(0, s.length / 2);
    let s2 = s.slice(s.length / 2);
    let c1 = 0;
    let c2 = 0;
    for(let i = 0; i < s1.length; i++) {
        if(vowels.indexOf(s1[i]) !== -1) c1++;
        if(vowels.indexOf(s2[i]) !== -1) c2++;
    }
    return (c1 === c2)? true: false;
    
};