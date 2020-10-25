//Store the first element as the smallest value you've seen so far.
//Compare this item to the next item in the array until you find a
//smaller number.
//If a smaller number is found, designate that smaller number to be
//the new 'minimum' and continue until the end of the array.
//If the 'minimum' is not the value (index) you intitially began
//with, swap the two values.
//Repeat this with the next element until the array is sorted.

const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++){
        let lowest = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(i !== lowest){
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr;
}

console.log(selectionSort([34, 4, 9, 23, 78, 35]))