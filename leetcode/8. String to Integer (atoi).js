/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
   var result = "",fu = 1;
    str = str.trim();
    if(str[0] == '-')
        {
            fu = -1;
        }
    else if(str[0] == '+'||str[0] == '*')
        {
            fu = 1;
        }
    else if(!isNaN(str[0])){
        result += str[0];
    }
    else{
        return 0;
    }
    for(let i = 1; i < str.length; i++){
        if(str[i] == ""||str[i] == " "){
            break;
        }
        if(!isNaN(str[i])){
            result += str[i];
        }
        else{
            break;
        }
    }

    if (fu == 1 && result * 1 > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1;
    } else if (fu == -1 && result * fu < -1 * Math.pow(2, 31)) {
        return -1 * Math.pow(2, 31);
    } else {
        return result * fu;
    }

};