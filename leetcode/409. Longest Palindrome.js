/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length === 0)
        return 0;
    let [sArr,cacheobj,res] = [s.split(''),{},0];
    sArr.forEach((v,i) => {
        if(cacheobj[v] === undefined)
            cacheobj[v] = 0;
        ++ cacheobj[v];
        if(cacheobj[v] === 2){
            res += 2;
            delete cacheobj[v];
        }
    });
    if(JSON.stringify(cacheobj) !== '{}')
        ++ res;
    return res;
};