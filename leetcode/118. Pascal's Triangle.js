/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    if(numRows === 0)
        return result;
    for(let i = 0; i < numRows; ++i){
        let [cur,pre] = [[],i > 0 ? result[i - 1] : []];
        for(let j = 0; j <= i; ++j){
            if(j === 0)
                cur.push(1);
            else if(j === i)
                cur.push(1);
            else
                cur.push(pre[j] + pre[j - 1]);
        }
        result.push(cur);
    }
    return result;
};