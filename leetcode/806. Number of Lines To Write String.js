/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let arr = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        [map,sArr,row,countNum] = [{},S.split(''),1,0];
    arr.forEach((v,i) => map[v] = widths[i]);
    sArr.forEach((v,i) => {
        let wLen = map[v];
        if(countNum + wLen > 100){
            ++ row;
            countNum = wLen;
        } else
            countNum += wLen;
    });
    return [row,countNum];
};