const palindrome = str => {
    str = str.toLowerCase().replace(/[\W_/]/g, '')
    let revStr = str.split('').reverse().join('')
    if (str === revStr) {
        return true
    } 

    return false 
}

console.log(palindrome('rAce!!C_ar'))





