//Given an array, rotate the array to the right by k steps, where k is non-negative.

let nums = [1,2,3,4,5,6,7]

//----SOLUTION 1---//
// const rotate = (nums, k) => {
//     let rotated = nums.splice(-k)

//     // for(let num of nums){
//     //     rotated.push(num)
//     // }
//     return rotated
// }


//----SOLUTION 2---//
// const rotate = (nums, k) => {
//     let rotated = nums.splice(-k)

//     rotated.push(...nums)
//     return rotated
// }

//----SOLUTION 3---//

const rotate = (nums, k) => {
    k = k % nums.length

    reverse(nums,0,nums.length - 1)
    reverse(nums,0,k - 1)
    reverse(nums,k,nums.length - 1)
}

const reverse = (nums, start, end) => {
    while(start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}

console.log(rotate(nums, 3))
