const longestCommonPrefix = strs => {
    if(strs.length === 0) return ""
    let prefix = ""
    let compare = strs[0]
    for(let i = 0; i < compare.length; i++){
       for(let j = 1; j < strs.length; j++){
           if(strs[j][i] !== compare[i]){
              return prefix
           }
       }
        prefix += compare[i]
    }
    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"], "fl"))