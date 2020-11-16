//Split arr in half
//Split that half in half... keep splitting until you have single-element arrays.
//Merge every 2 single-sorted arrays into 1 (comparing 2 values)
//Merge every 2 double-digit arrays into 1 (comparing 4 values)
//Merge every 2 four-digit arrays into 1 (comparing 8 values)
//Continue until you reach the final merge

const merge = (arr1, arr2) => {
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }
    return results
}

console.log(merge([2,3,7,10], [5,8,60]))