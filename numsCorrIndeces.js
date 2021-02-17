//Give a list of numbers nums, return the number of elements that are in the 
//correct indices, if the list were to be sorted.

const solve= (nums) => {
    let nums1 = [...nums]
    let sortedNums = nums1.sort((a,b) => a - b )
    let count = 0;

    for(let i = 0; i < sortedNums.length; i++){
        sortedNums[i] === nums[i] ? count+= 1 : null
    }
    return count 
}

console.log(solve([1, 7, 3, 4, 10]))
//2