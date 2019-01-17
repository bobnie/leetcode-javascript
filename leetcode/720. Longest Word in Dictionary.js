/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let res = '';
    words.forEach((v,i,arr) => {
        let originV = v;
        while(v.length > 1){
            v = v.slice(0,v.length - 1);
            if(arr.indexOf(v) < 0)
                return;
        }
        if(originV.length > res.length)
            res = originV;
        if(originV.length === res.length && originV < res)
            res = originV;
    });
    return res;
};