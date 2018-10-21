/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0,
        data = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    for (let i = 0; i < s.length; i++){
        let value = data.get(s[i]);
        if(i === (s.length - 1) || data.get(s[i+1]) <= data.get(s[i])){
            res += value;
        }
        else{
            res -= value
        }
    }
    return res;
};