/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let [len1,len2,matrix] = [word1.length,word2.length,[]];
    if(len1 === 0 || len2 === 0)
        return Math.max(len1,len2);
    for(let i = 0; i <= len1; ++i){
        matrix.push([]);
        matrix[i][0] = i;
    }
    for(let j = 0; j <= len2; ++j)
        matrix[0][j] = j;
    for(let i = 1; i <= len1; ++i){
        for(let j = 1; j <= len2; ++j){
            if(word1.charAt(i - 1) === word2.charAt(j - 1))
                matrix[i][j] = matrix[i - 1][j - 1];
            else
                matrix[i][j] = Math.min(matrix[i - 1][j],matrix[i][j - 1],matrix[i - 1][j - 1]) + 1;
        }
    }     
    return matrix[len1][len2];
};