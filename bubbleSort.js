//Start looping with a variable called i from the end of the array
// towards the beginning. Start an inner loop with a variable
// called j from the beginning until i - 1.
// If arr[j] is greater than arr[j + 1], swap those two values
// Return the sorted array.

const bubbleSort = arr => {
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true 
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                //SWAP -- place large values on the end
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break 
    }
    return arr 
}

console.log(bubbleSort([37, 45, 58, 9]))

//----SWAP OPTIONS---//

//ES5
function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp 
}

//ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}