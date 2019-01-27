/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A.length !== B.length)
        return false;
    else if((B + B).indexOf(A) > -1)
        return true;
    return false;
};