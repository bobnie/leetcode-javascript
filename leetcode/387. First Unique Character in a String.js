/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = s.split('');
    for(let i = 0; i < arr.length; ++i){
        let item = arr[i];
        if(arr.indexOf(item) === arr.lastIndexOf(item))
            return i;
    }
    return -1;
};