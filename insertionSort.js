//Start by picking the second element in the array.
//Now compare the second element with the one before it
//and swap if necessary.
//Continue to the next element and if it is in the incorrect
//order, iterate through the sorted portion (i.e. the left side)
//to place the element in the correct place.
//Repeat until the array is sorted.

let arr = [4,2,3,56,34]

const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            let temp = arr[i - 1]
            arr[i - 1] = arr[i]
            arr[i] = temp
        }
    }
    return arr 
}

console.log(insertionSort(arr))