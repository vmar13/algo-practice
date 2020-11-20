//Accept 3 arguments: an array, start index, and end index
//Default to 0 and arr length - 1. Grab the pivot from the 
//start of the array. Store the current pivot index in a variable
//(this will keep track of where the pivot should end up)
//Loop through the array from the start until end.
//If the pivot is greater than the current element, increment the
//pivot index variable and then swap the current element with the 
//element at the pivot index.

const pivot = (arr, start=0, end=arr.length+1) => {
    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++
        }
    }
}

console.log(pivot([9,4,8,2,1]))