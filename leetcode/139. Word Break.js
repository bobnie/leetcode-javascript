/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(wordDict === null || wordDict.size === 0)
        return false;
    let mySet = new Set();
    for(let i = 0; i < wordDict.length; ++i)
        mySet.add(wordDict[i]);
    let possible = [];
    possible[0] = true;
    for(let i = 0; i < s.length; ++i){
        if(possible[i]){
            for(let j = i + 1; j <= s.length; ++j){
                let str = s.substring(i,j);
                if(mySet.has(str))
                    possible[j] = true;
            }
        }
    }
    return possible[s.length] === true;
};