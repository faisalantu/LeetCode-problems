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