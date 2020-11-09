let nums = [3,2,2,3]

// var removeElement = function(nums, val) {
//     if(nums.length === 0) return 0
    
//     nums = nums.filter(num => num !== val)
//     return nums.length
// }

//Do not allocate extra space for another array! Cannot use above.
//below is wrong too, but proud of passing most test cases
// var removeElement = function(nums, val) {
//     if(nums.length === 0) return 0
    
//     //if value at index i is equal to val, remove 1 at index i
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             nums.splice(i, 1)
//         }
//     }
//  return nums.length
// }

var removeElement = function(nums, val) {
    if(nums.length === 0) return 0
    
    let i = 0
    for(let j = 0; j < nums.length; j++){
        if(nums[i] === val){
            nums[i] = nums.length - 1
        }
    }
 return nums.length
};

console.log(removeElement(nums, 3))