/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    if (matrix.length === 1) return matrix[0][0];
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length;j++){
            matrix[i][j] += Math.min(
                j > 0? matrix[i-1][j-1]: Infinity,
                matrix[i-1][j],
                j < matrix.length - 1? matrix[i-1][j+1]:Infinity
            )
        }
    }
    return Math.min(...matrix[matrix.length - 1]);
};