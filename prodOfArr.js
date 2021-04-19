const productOfArray = arr => {
    if (arr.length === 0) return 1;
    return arr[0] *= productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,4]))

//**** WHAT'S HAPPENING ON LINE 3 
// 1 *= productOfArray([2,3,4])
// 2 *= productOfArray([3,4])
// 3 *= productOfArray([4])
// 4 *= 1 (since arr.length is empty by this point, the if statement finally triggers and returns 1)
// so... 4 * 1 = 4, 4 * 3 = 12, so on and so forth until the result: 24