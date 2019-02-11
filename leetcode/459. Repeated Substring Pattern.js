/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(let i = 0; i < s.length; ++i){
        let item = s.slice(0,i);
        if(s.length % item.length !== 0)
            continue;
        let joinStr = new Array(s.length / item.length + 1).join(item);
        if(joinStr === s)
            return true;
    }
    return false;
};