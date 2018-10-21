/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === null || num2 === null || num1.length === 0 || num2.length === 0 || num1 === '0' || num2 === '0') return '0';
    let arr1 = num1.split('').reverse(),
        arr2 = num2.split('').reverse(),
        res = [];
    for(var i = 0; i < arr1.length; ++i){
        let cout = 0,
            val1 = parseInt(arr1[i]);
        for(var j = 0; j < arr2.length; ++j){
            let val2 = parseInt(arr2[j]),
                product = val1 * val2 + cout,
                exist = res[i + j] || 0,
                sum = product + exist,
                digit = sum % 10;
            cout = (sum / 10) | 0;
            res[i + j] = digit;
        }
        if(cout > 0) res[i + j] = cout;
    }
    res.reverse();
    res = res.join('');
    return res;
};