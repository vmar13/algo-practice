let pivot = arr[start]
let swapIdx = start 

for(let i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
        swapIdx++
        swapIdx(arr, swapIdx, i)
    }
}