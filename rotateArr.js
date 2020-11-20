//Given an array, rotate the array to the right by k steps, where k is non-negative.

let nums = [1,2,3,4,5,6,7]

const rotate = (nums, k) => {
    let rotated = nums.splice(-k)

    for(let num of nums){
        rotated.push(num)
    }
    return rotated
}

console.log(rotate(nums, 3))