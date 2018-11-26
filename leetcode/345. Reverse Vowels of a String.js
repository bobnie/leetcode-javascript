/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(s === undefined || s === '')
        return '';
    let reg = /[aeiouAEIOU]/g,
        match = s.match(reg);
    if(!match)
        return s;
    let [reverseMatchArr,sArr] = [match.reverse(),s.split('')];
    for(let i = 0; i < sArr.length; ++i){
        let item = sArr[i];
        if(item.match(reg))
            sArr[i] = reverseMatchArr.shift();
    }
    return sArr.join('');
};