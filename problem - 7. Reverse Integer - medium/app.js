/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    let num =0;
    let temp =x;
    let neg = false;
    if(temp<0){
        neg = true
        temp *= -1;
    }
    while(temp>0){
        num = num * 10;
        num += temp%10;
        temp = Math.floor(temp/10);
        
    }
    if(num>= Math.pow(2,31)) return 0;
    if(neg){
        num*= -1;
    }
    
    return num;
    
};