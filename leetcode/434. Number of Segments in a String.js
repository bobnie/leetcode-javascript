/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim();
    if(s === null || s.length === 0)
        return 0;
    let str = s.split(/\s+/);
    return str.length;
};