/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //check negative
    if(x < 0) return false;
    
    const getReminder = (num) => {
      return num % 10;
    };
    
    let y = x;
    let temp = 0;
    while (y !== 0) {
      temp += getReminder(y);
      y = Math.floor(y / 10);
      if (y !== 0) temp = temp * 10;
    }
    if(temp === x) return(true)
    else return (false)
    
};