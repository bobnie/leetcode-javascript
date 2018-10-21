/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= 1 || numRows <= 1 ) return s;
    var arr = new Array(numRows);
    arr.fill('');
    var res = '',row = 0,flag = true;
    for (let i = 0; i < s.length; i++)
        {
            arr[row] += s.charAt(i);
            if(flag)
                {
                    row++;
                    if(row == numRows)
                        {
                            flag = false;
                            row = numRows - 2;
                        }
                }
            else
                {
                    row--;
                    if(row < 0)
                        {
                            flag = true;
                            row = 1;
                        }
                }
        }
    for(let j = 0; j<numRows; j++)
        {
            res += arr[j];
            console.log(arr[j]);
        }
    return res;
};