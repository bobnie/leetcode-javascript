/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        let arr = [];
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] !== '.' && arr[board[i][j]]) return false;
            else arr[board[i][j]] = true;
        }
    }
    for(let i = 0; i< board.length; i++){
        let arr = [];
        for(let j = 0; j < board[0].length; j++){
            if(board[j][i] !== '.' && arr[board[j][i]]) return false;
            else arr[board[j][i]] = true;
        }
    }
    for(let i = 0; i < board.length; i+=3){
        for(let j = 0; j < board.length; j+=3){
            let arr = [];
            for(let x = 0; x < 3; x++){
                for(let y = 0; y < 3; y++){
                    if(board[i+x][j+y] !== '.' && arr[board[i+x][j+y]]) return false;
                    else arr[board[i+x][j+y]] = true;
                }
            }
        }
    }
        return true;
};