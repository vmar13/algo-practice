//Given a list of integers nums, put all the zeros to the back 
//of the list by modifying the list in-place. 
//The relative ordering of other elements should stay the same.
//Can you do it in O(1) additional space?

const moveZeroes = nums => {
    let counter = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[counter] = nums[i];
            counter += 1;
        }
    }

    //[0, 1, 0, 2, 3] counter = 0
    //[1, 1, 0, 2, 3] counter = 1
    //[1, 2, 0, 2, 3] counter = 2
    //[1, 2, 3, 2, 3] counter = 3

    for(counter; counter < nums.length; counter++){
        nums[counter] = 0;
    }

    //[1, 2, 3, 0, 3]
    //[1, 2, 3, 0, 0] --> DONE!

    return nums; 
}

console.log(moveZeroes([0, 1, 0, 2, 3]))

//SOLUTION
//[1, 2, 3, 0, 0]


// class Solution {
//     solve(nums) {
//         let counter = 0
//         for(let i = 0; i < nums.length; i++){
//             if(nums[i] !== 0){
//                 nums[counter] = nums[i]
//                 counter += 1
//             }
//         }
//         for(counter; counter < nums.length; counter++){
//             nums[counter] = 0
//         }
//         return nums
//     }  

// }