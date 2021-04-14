//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

const longestCommPref = arrStrs => {
    if (arrStrs.length === 0) return '';
    let prefix = '';
    let compare = arrStrs[0]; //word to compare every other wordEle to; first wordEle in array

    for (let i = 0; i < compare.length; i++) {  //6
        // console.log(`i loop: ${i}`)
        for (let j = 1; j < arrStrs.length; j++) { //3
            // console.log(`jloop ${j}: ${arrStrs[j][i]}, ${arrStrs[j]}`)
            if (arrStrs[j][i] !== compare[i]) {    // if 'f' in 'flow' !== 'f' in 'flower'
                return prefix
            }
        }
        prefix += compare[i]   // if 'f' in flow === 'f' in 'flower', add it to prefix
        // console.log(prefix)
    }
    return prefix
}

//***** WHAT'S HAPPENING FOR EVERY LOOP *****/
// i loop: 0
// j loop 1: f, flow
// j loop 2: f, flight
// f
// i loop: 1
// j loop 1: l, flow
// j loop 2: l, flight
// fl
// i loop: 2
// j loop 1: o, flow
// j loop 2: i, flight
// fl

console.log(longestCommPref(["flower","flow","flight"]))

//Output:
//"fl"
