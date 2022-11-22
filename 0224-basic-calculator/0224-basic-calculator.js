/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let sign = 1;
    let result = 0;
    let num = 0;
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i]=== ' ') continue;
        if(s[i] >= 0 && s[i] <= 9) {
            num = num * 10 + parseInt(s[i]);
        }
        if(s[i] === '-' || s[i] === '+') {
            result += num * sign;
            (s[i] === '-')? sign = -1: sign = 1;
            num = 0;
        }
        if(s[i] === '('){
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        }
        if(s[i] === ')') {
            result += sign * num;
            result *= stack.pop();
            result += stack.pop();
            num = 0;
        } 
    }
    result += sign * num;
    return result
};

