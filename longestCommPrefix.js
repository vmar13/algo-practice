//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

const longestCommPref = arrStrs => {
    if (arrStrs.length === 0) return '';
    let prefix = '';
    let compare = arrStrs[0]; //word to compare every other wordEle to; first wordEle in array

    for (let i = 0; i < compare.length; i++) {  //6
        for (let j = 1; j < arrStrs.length; j++) {
            if (arrStrs[j][i] !== compare[i]) {    // if 'f' in 'flow' !== 'f' in 'flower'
            // console.log(arrStrs[i][j], arrStrs[i + 1][j])
                return prefix
            }
        }
        prefix += compare[i]   // if 'f' in flow === 'f' in 'flower', add it to prefix
    }
    return prefix
}

// const longestCommPref = strs => {
//     if(strs.length === 0) return ""
//     let prefix = ""
//     let compare = strs[0]

//     for(let i = 0; i < compare.length; i++){
//        for(let j = 1; j < strs.length; j++){
//            if(strs[j][i] !== compare[i]){
//               return prefix
//            }
//        }
//         prefix += compare[i]
//     }
//     return prefix
// };

console.log(longestCommPref(["flower","flow","flight"]))

//Output:
//"fl"