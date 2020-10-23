validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false
    }

    const lookupObj = {}
    for(let char of str1){
        lookupObj[char] ? lookupObj[char] += 1 : lookupObj[char] = 1
    }

    for(let char of str2){
        if (!lookupObj[char]){
            return false
        } else {
            lookupObj[char] -= 1
        }
    }
    return true
}

validAnagram('anagram', 'nagaram')