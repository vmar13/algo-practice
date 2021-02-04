
const partition = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start]
    let swapIdx = start

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]
        }
    }
  
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]]
  
    return swapIdx
}

