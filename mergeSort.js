//1st part of merge sort

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

// console.log(merge([23, 76], [3,6,8,45]))

// let arr = [34, 45, 6, 7, 99]

// const getHalf = arr => {
//     //To get the first half of an array
//     // Math.floor(arr.length/2)
//     //start at index 0 and select everything up until BEFORE index 3
//     return arr.slice(0,3)
    
// }

// console.log(getHalf(arr))

const mergeSort = arr => {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return mergeSort(left, right)
}

console.log(mergeSort([10,24,76,73]))