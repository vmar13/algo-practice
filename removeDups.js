//Remove duplicate values from a sorted array (not actually removing, just reordering). 
//Return the length of the unique values. Do not modify the original array.

let nums = [1, 1, 2, 3, 4, 4]

const removeDuplicates = nums => {
    if(nums.length === 0) return 0
    
    let p1 = 0
    for(let p2 = 1; p2 < nums.length; p2++){
        if(nums[p1] !== nums[p2]){
            p1++
            nums[p1] = nums[p2]
        }
    }
    return p1 + 1
}

console.log(removeDuplicates(nums))


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