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

// console.log(merge([2,3,7,10], [5,8,60]))

//Split arr in half
//Split that half in half... keep splitting until you have single-element arrays.
//Merge every 2 single-sorted arrays into 1 (comparing 2 values)
//Merge every 2 double-digit arrays into 1 (comparing 4 values)
//Merge every 2 four-digit arrays into 1 (comparing 8 values)
//Continue until you reach the final merge

let arr = [2, 8, 5, 7, 1, 10, 6]

const mergeSort = arr => {
    if(arr.length <= 1) return arr 

    let half = Math.floor(arr.length / 2)
    let firstHalf = mergeSort(arr.slice(0,half))
    let secHalf = mergeSort(arr.slice(half))
    return merge(firstHalf, secHalf)
}

console.log(mergeSort(arr))


