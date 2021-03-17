var reverse = function(x) {
    numStr = x.toString()
    let finalNum = parseInt(numStr.split('').reverse().join(''))
    if (finalNum > 2**31 - 1) return 0
    
    if (numStr.includes('-')) {
        return '-' + finalNum
    } else {
        return finalNum
    }   
};