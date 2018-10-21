/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
     var result = solve(0, 0);

    function solve(i, j) {
        if (i == 9) return true;  //end reached
        //find the next cell
        var j2 = j + 1;
        var i2 = i;
        if (j2 == 9) {
            j2 = 0;
            i2++;
        }
        if (board[i][j] != '.') {
            if (solve(i2, j2)) return true;           
        }
        else {
            for (var k = 1; k <= 9; k++) {
                board[i][j] = k.toString();
                if (isValid(i, j) && solve(i2, j2)) return true;
            }
            board[i][j] = '.';
        }
        return false;
    }
    function isValid(i, j) {
        var num = board[i][j];
        for (var k = 0; k < 9; k++) {
            if (k != j && board[i][k] == num) {
                return false;
            }
            if (k != i && board[k][j] == num) {
                return false;
            }
        }
        var i0 = Math.floor(i / 3);
        var i1 = i % 3;
        var j0 = Math.floor(j / 3);
        var j1 = j % 3;
        for (var i2 = 0; i2 < 3; i2++) {
            for (var j2 = 0; j2 < 3; j2++) {
                if (i1 != i2 && j1 != j2 && board[i0 * 3 + i2][j0 * 3 + j2] == num) {
                    return false;
                }
            }
        }
        return true;
    }
};