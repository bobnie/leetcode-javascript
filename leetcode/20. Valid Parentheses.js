/**
 * @param {string} s
 * @return {boolean}
 */
/**此法巧妙地运用了对称原理**/
var isValid = function(s) {
    let res = [];
    for(let i = 0; i< s.length; i++){
        let char = s.charAt(i);
        if(char == '(' || char == '[' || char == '{'){
            res.push(char);
        }
        else{
            if(res.length == 0) return false;
            let oldChar = res.pop();
        if(oldChar == '(' && char !== ')') return false;
        else if(oldChar == '[' && char != ']') return false;
        else if(oldChar == '{' && char != '}') return false;
        }
    }
    return res.length === 0;
};