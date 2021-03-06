/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
   let res = '',
       arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1],
       str = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    for(let i = 0; i < arr.length; i++){
        while(num >= arr[i])
            {
                 num -= arr[i];
                 res += str[i];
            }
    }
    return res;
};