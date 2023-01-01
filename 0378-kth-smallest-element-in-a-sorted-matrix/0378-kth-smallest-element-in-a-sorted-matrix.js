/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let r = matrix.length, c = matrix[0].length;
    let res = [];
    if(!r || !c) return 0;
    if(k > r * c) return 0;
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            res.splice(binary(res, matrix[i][j]), 0, matrix[i][j]);
        }
    }
    return res[k - 1];

    function binary(arr, val) {
        let low = 0, high = arr.length - 1;
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            if(arr[mid] === val){
               return mid;
            }else if(arr[mid] < val) {
                low = mid + 1;
            }   
            else high = mid - 1;
        }
        return low;
    }  
};