
# [7.  Reverse Integer](https://leetcode.com/problems/reverse-integer/)

Given a signed 32-bit integer  `x`, return  `x` _with its digits reversed_. If reversing  `x`  causes the value to go outside the signed 32-bit integer range  `[-231, 231  - 1]`, then return  `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

**Example 1:**

**Input:** x = 123
**Output:** 321

**Example 2:**

**Input:** x = -123
**Output:** -321

**Example 3:**

**Input:** x = 120
**Output:** 21

**Constraints:**

-   `-231  <= x <= 231  - 1`


## Solution

```js
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
```