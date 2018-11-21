/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = '';
    while(str.length !== 1){
        str = num + '';
        for(let i = 0; i < str.length; ++i){
            if(i === 0){
                num = 0;
                num += parseInt(str[i]);
            } else
                num += parseInt(str[i]);
        }
    }
    return num;
};