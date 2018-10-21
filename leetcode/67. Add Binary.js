/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let lenA = a.length,
        lenB = b.length,
        ai = 0,
        bi = 0,
        sum = '',
        carry = 0;
    while(ai < lenA || bi < lenB){
        let valA = ai < lenA ? parseInt(a[lenA - 1 - ai]) : 0,
            valB = bi < lenB ? parseInt(b[lenB - 1 - bi]) : 0,
            val = valA + valB + carry,
            rem = val % 2;
        carry = val > 1 ? 1 : 0;
        sum = rem + sum;
        ai ++;
        bi ++;
    }
    return carry > 0 ? carry + sum : sum;
};