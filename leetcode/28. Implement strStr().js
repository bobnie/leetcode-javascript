/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    for(let i = 0; i < haystack.length; i++){
        let res = haystack.substring(i,(needle.length + i));
        if(res == needle) return i;
    }
    return -1;
};
//有一个简便的函数这里附加上
/** var strStr = function (haystack, needle) {
            return haystack.search(needle);
        };
**/