/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let nums = [];
    let operators = new Set();
    operators.add('+');
    operators.add('-');
    operators.add('/');
    operators.add('*');
    for(let t of tokens) {
        if(operators.has(t)){
            let value2 = nums.pop();
            let value1 = nums.pop();
            if(t === '+') {
                nums.push(value1 + value2);
            }
            
            if(t === '*') {
                nums.push(value1 * value2);
            }
            
            if(t === '-') {
                nums.push(value1 - value2);
            }
            
            if(t === '/') {
                nums.push(~~(value1/value2));
            }    
        }else {
            nums.push(Number(t));
        }    
    }
    return nums.pop();
};
