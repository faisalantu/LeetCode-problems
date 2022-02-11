/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let a=0,b=0;
    for(let i =0; i< sentences.length; i++){
        let temp;
        for(let j=0; j< sentences[i].length; j++){
            temp = sentences[i];
            if(temp[j] === " ") b++;
        }
        if(a<b) a=b;
        b=0;
    }
    return a+1
};