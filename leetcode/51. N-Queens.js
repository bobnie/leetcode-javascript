/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];;
    halper(n,0,[],res);
    return res;
};
const halper = (n,row,columnForRow,res) => {
    if(row === n){
        let item = [];
        for(let i = 0; i < n; ++i){
            let strRow = '';
            for(let j = 0; j < n; ++j){
                if(columnForRow[i] === j)
                    strRow += 'Q';
                else strRow += '.';
            }
            item[i] = strRow;
        }
        res.push(item);
        return;
    }
    for(let i = 0; i < n; ++i){
        columnForRow[row] = i;
        if(isValid(row,columnForRow))
            halper(n,row + 1,columnForRow,res);
    }
};
const isValid = (row,columnForRow) => {
    for(let i = 0; i < row; ++i){
        if(columnForRow[row] === columnForRow[i] || Math.abs(columnForRow[row] - columnForRow[i]) === row - i)
            return false;
    }
    return true;
};