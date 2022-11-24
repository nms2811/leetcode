/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let h = board.length;
    let w = board[0].length;
    if(!board.length || ! word.length) return false;
   for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(promising(i , j, word)) {
                return true;
            }
        }
    }
    return false;

    function promising(i, j, word) {
        if(word.length === 0) return true;
        if(i < 0 || j < 0 || i >= h || j >= w) return false;
        if(board[i][j] !== word[0]) return false;
        let char = board[i][j];
        board[i][j] = '#';

        let result = (promising(i - 1, j, word.substring(1)) || promising(i + 1, j, word.substring(1)) || promising(i, j - 1, word.substring(1)) || promising(i, j + 1, word.substring(1)))
        board[i][j] = char;
        return result;
        
    }
};