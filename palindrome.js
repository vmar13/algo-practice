const palin5 = str => {
    str = str.toLowerCase().replace(/[\W_]/g, '')
    let reversedStr = str.split('').reverse().join('')

    if(str === reversedStr) return true
    else return false 
    // if(str === reversedStr){
    //     return true
    // } else {
    //     return false
    // }
}

console.log(palin5('oce3!!nTT_'))

