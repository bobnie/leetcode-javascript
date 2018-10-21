/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr = new Array;
    var arry = new Array;
    
    var r = x.toString();
    for (let i = 0; i < r.length; i++)
        {
            arr[i] = r[i];
            arry[i] = r[i];
        }
    arr = arr.reverse();
    arr = arr.join('');
    arry = arry.join('');
    console.log(arr);
     console.log(arry);
    if(arr == arry)
        {
            return true;
        }
    else
        {
            return false;
        }
   
};