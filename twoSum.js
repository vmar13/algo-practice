//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, 
//and you may not use the same element twice.
//You can return the answer in any order.

const twoSum = (nums, target) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + nums[i - 1] === target) {
            return [...[i - 1], ...[i]]
        }
    }
}

// console.log(twoSum([2,7,11,15], 9))  // [0 ,1]
console.log(twoSum([2,7,6,4], 10))    // [2, 3]


//nput: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1].


//const twoSum = (nums, target) => {    
    //     for (let i = 0; i < nums.length - 1; i++) {
    //         for (let j = i + 1; j < nums.length; j++ ) {
    //             if (nums[i] + nums[j] === target) {
    //                 return [i, j]
    //             } 
    //         }
    //     }
    // };