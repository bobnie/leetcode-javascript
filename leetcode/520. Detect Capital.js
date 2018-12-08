/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let [bigReg,smallReg] = [/[A-Z]+/g,/[a-z]+/g];
    if(match(word,bigReg) || match(word,smallReg))
        return true;
    if(match(word.slice(0,1),bigReg) && match(word.slice(1),smallReg))
        return true;
    return false;
};
const match = (word,reg) => {
    if(word == '')
        return true;
    let match = word.match(reg);
    if(match && match[0].length === word.length)
        return true;
    return false;
};