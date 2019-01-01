/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let res = [],
        [reg1,reg2,reg3] = [/[qwertyuiopQWERTYUIOP]/g,/[asdfghjklASDFGHJKL]/g,/[zxcvbnmZXCVBNM]/g],
        regArr = [reg1,reg2,reg3];
    words.forEach(word => {
        for(let i = 0; i < regArr.length; ++i){
            let match = word.match(regArr[i]);
            if(match){
                if(match.length !== word.length)
                    return;
            }
        }
        res.push(word);
    });
    return res;
};