/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let [visited,mySet,queue,level,letters] = [new Set(),new Set(),[],1,'abcdefghijklmnopqrstuvwxyz'];
    for(let i = 0; i < wordList.length; ++i)
        mySet.add(wordList[i]);
    queue.push(beginWord);
    visited.add(beginWord);
    if(!mySet.has(endWord) || beginWord === endWord)
        return 0;
    while(queue.length > 0){
        let len = queue.length;
        for(let i = 0; i < len; ++i){
            let word = queue.shift();
            for(let j= 0; j < word.length; ++j){
                for(let k = 0; k < letters.length; ++k){
                    let newWord = word.substring(0,j) + letters[k] + word.substring(j + 1);
                    if(newWord === endWord)
                        return level + 1;
                    if(mySet.has(newWord) && !visited.has(newWord)){
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
        ++ level;
    }
    return 0;
};