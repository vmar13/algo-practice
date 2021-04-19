// **** PURE RECURSION ****
const pureCollOddVals = arr => {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
        // console.log(`arr: ${arr}`, newArr)
    }

    newArr = newArr.concat(pureCollOddVals(arr.slice(1)));
    return newArr;
}

// What's happening on line 12 above: 
//arr: 1,2,3,4,5,6,7,8,9 [1]
//collOddVals.js:9 arr: 3,4,5,6,7,8,9 [3]
//collOddVals.js:9 arr: 5,6,7,8,9 [5]
//collOddVals.js:9 arr: 7,8,9 [7]
//collOddVals.js:9 arr: 9 [9]
//collOddVals.js:36 (5) [1, 3, 5, 7, 9]
// ...We ONLY check for odd values by slicing at index 1 each time, essentially
// cutting out even numbers. If we slice at index 0, it causes a stack overflow 
// because we never reach number 3 — we get stuck on 2 infinitely.

// **** HELPER METHOD RECURSION ****
const collectOddValues = arr => {
    let result = [];

    const helper = helperInput => {
        if (helperInput.length === 0) return;

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
        console.log(result, helperInput)

    }
    helper(arr);
    return result;
}

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))
console.log(pureCollOddVals([1,2,3,4,5,6,7,8,9]))