# **[1108. Defanging an IP Address](https://leetcode.com/problems/defanging-an-ip-address/)**



Given a valid (IPv4) IP  `address`, return a defanged version of that IP address.

A  _defanged IP address_ replaces every period  `"."`  with  `"[.]"`.

**Example 1:**

**Input:** address = "1.1.1.1"
**Output:** "1[.]1[.]1[.]1"

**Example 2:**

**Input:** address = "255.100.50.0"
**Output:** "255[.]100[.]50[.]0"

**Constraints:**

-   The given  `address`  is a valid IPv4 address.


## **Solution:**

```js
/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let tempAddress =""
    for(let i=0; i< address.length; i++){
        if(address[i] === ".") tempAddress+= "[.]";
        else tempAddress+= address[i]
    }
    return tempAddress
};

```