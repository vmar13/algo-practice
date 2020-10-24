const palin5 = str => {
    str = str.toLowerCase().replace(/[\W]/g, '')
    let reversedStr = str.split('').reverse().join('')

    if(str === reversedStr){
        return true
    } else {
        return false
    }
}

palin5('Race car')