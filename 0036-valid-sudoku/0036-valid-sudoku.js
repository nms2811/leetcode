/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i ++) {
        for(let j = 0; j < 9; j++) {
            let value = board[i][j];
            if(value !== '.') {
                if(!validRow(board, i, j, value) || !validCol(board, i, j, value) || !validBox(board, i, j, value)) {
                    return false;
                }
            }
        }
    }
    return true;
};
function validRow(board, r, c, value ) {
    for(let j = 0; j < 9; j++) {
        if(j != c) {
            if(board[r][j] === value ) {
                return false;
            }
        }
    }
    return true;
}
function validCol(board, r, c, value ) {
    for(let i = 0; i < 9; i++) {
        if(i != r) {
            if(board[i][c] === value ) {
                return false;
            }
        }
    }
    return true;
}
function validBox(board, r, c, value ) {
    let sr = r - (r%3);
    let sc = c - (c%3);
    for(let i = sr;i < sr+3; i++) {
        for (let j = sc; j <sc +3; j++) {
            if(i !== r && j!== c) {
                if(board[i][j] === value) {
                    return false;
                }
            }
        }
    }
    return true;
}