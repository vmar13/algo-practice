var wordPattern = function(pattern, s) {
    const dict = {}
    const sArr = s.split(" ")
    if(sArr.length !== pattern.length || new Set(pattern).size !== new Set(sArr).size) return false
    for(let i in pattern){
        if(!dict[pattern[i]]){
            dict[pattern[i]] = sArr[i]
        } else {
            if(dict[pattern[i]]!== sArr[i]){
                return false
            }
        }
    }
    return true
};

// var wordPattern = function(pattern, s) {
//     const dict = {}
//     const sArr = s.split(" ")
//     if(sArr.length !== pattern.length) return false
//     for(let i = 0; i < pattern.length; i++){
//         if(dict[pattern[i]]){
//             if(dict[pattern[i]] !== sArr[i]){
//                 return false
//             }
//         } else if (Object.values(dict).includes(sArr[i]) && !Object.keys(dict).includes(pattern[i])){
//             return false
//         } else {
//             dict[pattern[i]] = sArr[i]
//         }
//     }
//     return true
// };