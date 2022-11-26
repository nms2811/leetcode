/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        let min = arr[i];
        result += min;
        let j = i + 1;
        while(j < arr.length) {
            if(min > arr[j]) {
              min = arr[j]  
            }
            result += min;
            j++;
        }
    }
    return result % (Math.pow(10, 9) + 7)
};