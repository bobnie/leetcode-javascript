/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jArr = J.split(''),
        item,reg,match,res = 0;
    for(let i = 0; i < jArr.length; ++i){
        item = jArr[i];
        reg = new RegExp(item,'g');
        match = S.match(reg);
        if(match)
            res += match.length;
    }
    return res;
};