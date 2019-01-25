/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    let [sArr,sObj] = [S.split(''),{}];
    sArr.forEach((v,i) => sObj[v] = i);
    let tArr = T.split(''),
        resArr = tArr.sort((a,b) => {
            let [indexA,indexB] = [sObj[a] || 0,sObj[b] || 0];
            return indexA - indexB;
        });
    return resArr.join('');
};