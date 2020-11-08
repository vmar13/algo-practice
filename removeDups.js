//Remove duplicate values from a sorted array (not actually removing, just reordering). 
//Return the length of the unique values. Do not modify the original array.


const removeDuplicates = nums => {
    if(nums.length === 0) return 0
    
    let pointer1 = 0
    for(let pointer2 = 1; pointer2 < nums.length; pointer2++){
        if(nums[pointer1] !== nums[pointer2]){
            pointer1++
            nums[pointer1] = nums[pointer2]
        }
    }
    return pointer1 + 1
}


// function removeDuplicates(nums) {
//     nums = nums.filter((int, index) => nums.indexOf(int) === index)
//     return nums.length
// }

// function removeDuplicates(nums) {
//     let i = 0
//     for(let j = 1; j < nums.length; j++){
//         if(nums[j] !== nums[i]){
//             i++
//             nums[i] = nums[j]
//         }
//     }
//     return i + 1
// }