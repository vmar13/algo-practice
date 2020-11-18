const maxChar = str => {
    const strObj = {}
    let maxValue = 0
    let maxChar = ''

    for(let char of str){
        strObj[char] = strObj[char] + 1 || 1
    }

    for(let char in strObj){
        if(strObj[char] > maxValue){
            maxChar = char 
            maxValue = strObj[char]
        }
    }
    return maxChar
}