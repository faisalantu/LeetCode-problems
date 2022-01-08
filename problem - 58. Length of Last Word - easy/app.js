/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let p = '';
    let c = '';
    for(let i=s.length-1; i>=0; i--){
        if(p!=='' && c===''){
            break;
        }
        if(s[i] === ' ') {
            p = c;
            c='';   
        }else{
            c += s[i];
        }
    }
    if(c !==""){
        return c.length
    }else{
        return p.length
    }
};
