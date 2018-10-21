/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = new Array;
    var r = x.toString(),
        t,y;
    var re = new Array;
    for (let i =  0; i < r.length; i++)
        {
            res[i] = r[i];
        }
    if(res[0] == '-')
        {
            
                    re = res.reverse();
                    re.pop();
                    re.unshift('-');
        }
    else
        {
            re = res.reverse();
        }
     t = re.join('');
    y = parseInt(t);
    if(y >= 2147483647 || y <=  -2147483648)
        {
            y = 0;
        }
    console.log(y);
    return y;
};