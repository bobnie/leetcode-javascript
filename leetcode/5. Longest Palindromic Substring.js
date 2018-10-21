/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
 let maxlen = 1,
    start = 0,
     dp = [];
    for (let i = 0; i < s.length; i++)
        {
           dp.push([]); 
        }
        for (var i = 0; i < s.length; i++)
            {
                for (var j = 0; j < i; j++)
                    {
                        if(s[i]==s[j]){
                        if(i - j <= 2){
                            if(i - j > maxlen){
                                start = j;
                                maxlen = i - j;
                            }
                            dp[j][i] = true;
                        }
                        else if(dp[j+1][i-1])
                            {
                                if(i - j > maxlen){
                                start = j;
                                maxlen = i - j;
                                }
                                dp[j][i] = true;
                            }
                    }
                 }
             }
    return s.substr(start,maxlen);
};
                
            
   

